import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

type ScheduleRequestBody = {
  name: string;
  email: string;
  date: string;
  time: string;
  duration: string;
  topic: string;
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as ScheduleRequestBody;
    const { name, email, date, time, duration = "30", topic } = body;
    
    if (!name || !email || !date || !time) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Parse the date and time to create start and end times
    const [timePart, period] = time.split(' ');
    const [hourStr, minuteStr] = timePart.split(':');
    let hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);
    
    // Convert to 24-hour format if necessary
    if (period === 'PM' && hour < 12) {
      hour += 12;
    } else if (period === 'AM' && hour === 12) {
      hour = 0;
    }
    
    // Convert duration to number
    const durationMinutes = parseInt(duration, 10);
    
    // Create start and end times based on selected duration
    const startDateTime = new Date(date);
    startDateTime.setHours(hour, minute, 0, 0);
    
    const endDateTime = new Date(startDateTime);
    endDateTime.setMinutes(endDateTime.getMinutes() + durationMinutes);
    
    // Set up Google Calendar API
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/calendar'],
    });

    const calendar = google.calendar({ version: 'v3', auth });
    
    // First, check availability
    try {
      const calendarId = process.env.EMAIL_TO || 'primary';
      console.log(`Checking availability in calendar: ${calendarId}`);
      
      const availabilityCheck = await calendar.freebusy.query({
        requestBody: {
          timeMin: startDateTime.toISOString(),
          timeMax: endDateTime.toISOString(),
          items: [{ id: calendarId }]
        }
      });
      
      const busySlots = availabilityCheck.data.calendars?.[calendarId]?.busy || [];
      console.log(`Found ${busySlots.length} busy slots in the selected time range`);
      
      if (busySlots.length > 0) {
        // Time slot is already booked
        return NextResponse.json(
          { 
            error: 'Time slot not available',
            details: 'This time slot is already booked or conflicts with another event.',
          },
          { status: 409 } // HTTP 409 Conflict
        );
      }
    } catch (fbError) {
      console.error('Error checking availability:', fbError);
      // Continue with event creation even if availability check fails
    }
    
    // Format duration for display
    const formatDuration = (mins: number) => {
      if (mins === 60) return "1 hour";
      return `${mins} minutes`;
    };
    
    // Create Zoom meeting link
    let zoomMeetingLink = '';
    let zoomMeetingPassword = '';
    let zoomError = null;

    try {
      // Get Zoom access token first
      const zoomCredentials = Buffer.from(
        `${process.env.ZOOM_CLIENT_ID}:${process.env.ZOOM_CLIENT_SECRET}`
      ).toString('base64');

      const tokenResponse = await fetch(
        `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${process.env.ZOOM_ACCOUNT_ID}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${zoomCredentials}`
          }
        }
      );

      if (!tokenResponse.ok) {
        throw new Error(`Failed to get Zoom token: ${tokenResponse.statusText}`);
      }

      const tokenData = await tokenResponse.json();
      const accessToken = tokenData.access_token;

      if (!accessToken) {
        throw new Error('No access token received from Zoom API');
      }

      console.log('Successfully obtained Zoom access token');

      // Now create the Zoom meeting
      const meetingData = {
        topic: `Call with ${name} - ${topic || 'Discussion'}`,
        type: 2, // Scheduled meeting
        start_time: startDateTime.toISOString(),
        duration: durationMinutes, // Use selected duration
        timezone: 'UTC',
        settings: {
          host_video: true,
          participant_video: true,
          join_before_host: true,
          mute_upon_entry: false,
          auto_recording: 'none',
          waiting_room: false
        }
      };

      const meetingResponse = await fetch('https://api.zoom.us/v2/users/me/meetings', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(meetingData)
      });

      if (!meetingResponse.ok) {
        throw new Error(`Failed to create Zoom meeting: ${meetingResponse.statusText}`);
      }

      const meetingResult = await meetingResponse.json();
      zoomMeetingLink = meetingResult.join_url;
      zoomMeetingPassword = meetingResult.password;

      console.log('Successfully created Zoom meeting:', zoomMeetingLink);
    } catch (error: any) {
      console.error('Error creating Zoom meeting:', error);
      zoomError = error.message;
      
      // Fallback to using a personal Zoom link if available in env vars
      if (process.env.ZOOM_PERSONAL_MEETING_ID) {
        zoomMeetingLink = `https://zoom.us/j/${process.env.ZOOM_PERSONAL_MEETING_ID}`;
        zoomMeetingPassword = process.env.ZOOM_MEETING_PASSWORD || '';
        console.log('Using fallback personal Zoom link:', zoomMeetingLink);
      }
    }
    
    let calendarResponse;
    
    try {
      // Create event with Zoom details
      const event = {
        summary: `Call with ${name}`,
        description: `Topic: ${topic || 'Not specified'}\nName: ${name}\nEmail: ${email}\nDuration: ${formatDuration(durationMinutes)}\n\nJoin Zoom Meeting: ${zoomMeetingLink}${zoomMeetingPassword ? `\nPassword: ${zoomMeetingPassword}` : ''}`,
        start: {
          dateTime: startDateTime.toISOString(),
          timeZone: 'UTC',
        },
        end: {
          dateTime: endDateTime.toISOString(),
          timeZone: 'UTC',
        },
        reminders: {
          useDefault: false,
          overrides: [
            { method: 'email', minutes: 24 * 60 },
            { method: 'popup', minutes: 30 },
          ],
        },
        creator: {
          email: process.env.EMAIL_TO
        },
        organizer: {
          email: process.env.EMAIL_TO,
          self: true
        }
      };
      
      // Get the calendar ID from environment variables
      const calendarId = process.env.EMAIL_TO || 'primary';
      console.log(`Creating event in calendar: ${calendarId}`);
      
      // Basic event creation
      calendarResponse = await calendar.events.insert({
        calendarId,
        requestBody: event
      });
      
      console.log('Event created successfully with Zoom link in description');
    } catch (calendarError: any) {
      console.error('Google Calendar API error:', calendarError);
      
      // If Google Calendar fails, we can still send an email notification
      // This is a fallback in case the calendar integration fails
      return NextResponse.json(
        { 
          error: 'Failed to schedule in calendar',
          details: calendarError.message,
          calendarError: true
        },
        { status: 500 }
      );
    }
    
    // Send confirmation emails
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: Number(process.env.EMAIL_PORT || 587),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_TO,
        pass: process.env.EMAIL_TO_PASSWORD,
      },
    });
    
    // Format date for email
    const dateOptions: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    const formattedDate = new Date(date).toLocaleDateString('en-US', dateOptions);
    
    // Send confirmation to the user
    await transporter.sendMail({
      from: process.env.EMAIL_TO,
      to: email,
      subject: `Call Scheduled: ${formattedDate} at ${time}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e1e1e1; border-radius: 5px;">
          <h2 style="color: #8a2387;">Your Call Has Been Scheduled</h2>
          <p>Hi ${name},</p>
          <p>Your call has been scheduled for <strong>${formattedDate} at ${time}</strong> (${formatDuration(durationMinutes)} duration).</p>
          <p><strong>Topic:</strong> ${topic || 'Not specified'}</p>
          <p>I'm looking forward to our conversation!</p>
          
          ${zoomMeetingLink ? `
          <div style="margin: 25px 0; padding: 15px; background-color: #f8f4ff; border-radius: 8px; border-left: 4px solid #2D8CFF;">
            <h3 style="margin-top: 0; color: #333;">Zoom Meeting Details</h3>
            <p>Join our meeting using Zoom:</p>
            <a href="${zoomMeetingLink}" style="display: inline-block; background-color: #2D8CFF; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; margin: 10px 0;">Join Zoom Meeting</a>
            ${zoomMeetingPassword ? `<p style="margin-bottom: 10px; font-size: 14px;">Password: <strong>${zoomMeetingPassword}</strong></p>` : ''}
            <p style="margin-bottom: 0; font-size: 14px; color: #666;">If you don't have Zoom installed, you can join via your browser.</p>
          </div>
          ` : ''}
          
          <p>Best regards,<br>Ahmad Harkous</p>
        </div>
      `,
    });

    const transporter2 = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: Number(process.env.EMAIL_PORT || 587),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    
    // Send notification to yourself
    await transporter2.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Call Scheduled: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e1e1e1; border-radius: 5px;">
          <h2 style="color: #8a2387;">New Call Scheduled</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Date:</strong> ${formattedDate}</p>
          <p><strong>Time:</strong> ${time}</p>
          <p><strong>Duration:</strong> ${formatDuration(durationMinutes)}</p>
          <p><strong>Topic:</strong> ${topic || 'Not specified'}</p>
          ${zoomMeetingLink ? `
          <p><strong>Zoom Meeting:</strong> <a href="${zoomMeetingLink}">${zoomMeetingLink}</a></p>
          ${zoomMeetingPassword ? `<p><strong>Password:</strong> ${zoomMeetingPassword}</p>` : ''}
          ` : ''}
          ${zoomError ? `<p><strong>Zoom API Error:</strong> ${zoomError}</p>` : ''}
        </div>
      `,
    });
    
    return NextResponse.json({
      success: true,
      message: 'Call scheduled successfully',
      calendarLink: `https://calendar.google.com/calendar/event?eid=${Buffer.from(
        calendarResponse?.data.id || ''
      ).toString('base64')}`,
      zoomLink: zoomMeetingLink,
      zoomPassword: zoomMeetingPassword
    });
  } catch (error: any) {
    console.error('Schedule call error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to schedule call',
        details: error.message 
      },
      { status: 500 }
    );
  }
} 