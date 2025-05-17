import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { google } from 'googleapis';

// Define your working hours (9 AM to 5 PM)
const WORKING_HOURS_START = 9;
const WORKING_HOURS_END = 17;

// Define your time slots (same as in schedule-call.tsx)
const TIME_SLOTS = ["09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { date, duration = "30" } = body; // Default to 30 minutes if not specified
    
    if (!date) {
      return NextResponse.json(
        { error: 'Date is required' },
        { status: 400 }
      );
    }
    
    // Convert duration string to number
    const durationMinutes = parseInt(duration, 10);
    
    // Set up the auth and calendar client
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/calendar.readonly'],
    });
    
    const calendar = google.calendar({ version: 'v3', auth });
    
    // Create start and end datetime for the entire day
    const selectedDate = new Date(date);
    const startOfDay = new Date(selectedDate);
    startOfDay.setHours(WORKING_HOURS_START, 0, 0, 0);
    
    const endOfDay = new Date(selectedDate);
    endOfDay.setHours(WORKING_HOURS_END, 0, 0, 0);
    
    // Query all events for the day
    const response = await calendar.events.list({
      calendarId: 'primary',
      timeMin: startOfDay.toISOString(),
      timeMax: endOfDay.toISOString(),
      singleEvents: true,
    });
    
    const existingEvents = response.data.items || [];
    
    // Convert existing events to busy time ranges
    const busyRanges = existingEvents.map(event => {
      const start = new Date(event.start?.dateTime || event.start?.date || '');
      const end = new Date(event.end?.dateTime || event.end?.date || '');
      return { start, end };
    });
    
    // Check each time slot against busy ranges, considering the meeting duration
    const availableTimes = TIME_SLOTS.filter(slot => {
      // Parse the time slot
      const [timePart, period] = slot.split(' ');
      const [hourStr, minuteStr] = timePart.split(':');
      let hour = parseInt(hourStr, 10);
      const minute = parseInt(minuteStr, 10);
      
      // Convert to 24-hour format
      if (period === 'PM' && hour < 12) {
        hour += 12;
      } else if (period === 'AM' && hour === 12) {
        hour = 0;
      }
      
      // Create start and end time for this slot based on selected duration
      const slotStart = new Date(selectedDate);
      slotStart.setHours(hour, minute, 0, 0);
      
      const slotEnd = new Date(slotStart);
      slotEnd.setMinutes(slotEnd.getMinutes() + durationMinutes);
      
      // Make sure the meeting ends before the end of working hours
      if (slotEnd.getHours() > WORKING_HOURS_END || 
          (slotEnd.getHours() === WORKING_HOURS_END && slotEnd.getMinutes() > 0)) {
        return false;
      }
      
      // Check if this slot overlaps with any busy range
      const isOverlapping = busyRanges.some(range => {
        return (
          (slotStart >= range.start && slotStart < range.end) ||
          (slotEnd > range.start && slotEnd <= range.end) ||
          (slotStart <= range.start && slotEnd >= range.end)
        );
      });
      
      return !isOverlapping;
    });
    
    return NextResponse.json({
      availableTimes,
      meetingDuration: durationMinutes
    });
  } catch (error: any) {
    console.error('Error checking available times:', error);
    
    // If there's an error, return all time slots as a fallback
    return NextResponse.json({
      availableTimes: TIME_SLOTS,
      error: 'Failed to check availability, showing all time slots',
      details: error.message
    });
  }
} 