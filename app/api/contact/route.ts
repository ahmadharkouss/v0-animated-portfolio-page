import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;
    
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // For production, you should use environment variables
    // This is a temporary transporter for testing
    // You'll need to update this with your actual email credentials
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD, // Use app password for Gmail
      },
    });

    const transporter2 = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_TO,
        pass: process.env.EMAIL_TO_PASSWORD // Use app password for Gmail
      },
    });
    
    // Send email to site owner
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO, // Where you want to receive emails
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e1e1e1; border-radius: 5px;">
          <h2 style="color: #8a2387;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
    });
    
    // Send confirmation email to the user
    await transporter2.sendMail({
      from: process.env.EMAIL_TO,
      to: email,
      subject: `Thank you for contacting Ahmad Harkous`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e1e1e1; border-radius: 5px;">
          <h2 style="color: #8a2387;">Thank You for Your Message</h2>
          <p>Hi ${name},</p>
          <p>I've received your message regarding <strong>"${subject}"</strong>.</p>
          <p>I'll review your message and get back to you as soon as possible.</p>
          <p>For your records, here's a copy of your message:</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; margin: 15px 0;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <p>Best regards,</p>
          <p><strong>Ahmad Harkous</strong><br>
          IOT & Edge Computing Engineer</p>
        </div>
      `,
    });
    
    return NextResponse.json({ 
      success: true,
      message: 'Email sent successfully',
      confirmationSent: true
    });
  } catch (error: any) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send message',
        details: error.message 
      },
      { status: 500 }
    );
  }
} 