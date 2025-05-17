# Animated portfolio page

*Automatically synced with your [v0.dev](https://v0.dev) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/ahmadharkouss-projects/v0-animated-portfolio-page)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/iZHmA22mszt)

## Overview

This repository will stay in sync with your deployed chats on [v0.dev](https://v0.dev).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.dev](https://v0.dev).

## New Features: Contact Form & Scheduling System

The portfolio now includes fully functional contact and scheduling forms with backend integration:

- **Contact Form**: Send emails directly from the portfolio using Nodemailer
- **Schedule Call**: Book calls that integrate with Google Calendar and Zoom

### Setup Instructions

1. **Clone the repository and install dependencies**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   pnpm install
   ```

2. **Set up environment variables**:
   - Copy `.env.local.example` to `.env.local`
   - Update the following variables with your actual credentials:
     ```
     # Email Configuration
     EMAIL_HOST=smtp.gmail.com
     EMAIL_PORT=587
     EMAIL_SECURE=false
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASSWORD=your-app-password  # For Gmail, use an app password
     EMAIL_FROM=your-email@gmail.com
     EMAIL_TO=your-email@gmail.com
     EMAIL_TO_PASSWORD=your-other-app-password  # For your personal email account

     # Google Calendar API
     GOOGLE_CLIENT_EMAIL=your-service-account-email@project-id.iam.gserviceaccount.com
     GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour Private Key Here\n-----END PRIVATE KEY-----\n"
     
     # Zoom API Credentials
     ZOOM_CLIENT_ID=your-zoom-client-id
     ZOOM_CLIENT_SECRET=your-zoom-client-secret
     ZOOM_ACCOUNT_ID=your-zoom-account-id
     
     # Optional: Personal Zoom Meeting (fallback)
     ZOOM_PERSONAL_MEETING_ID=your-personal-meeting-id
     ZOOM_MEETING_PASSWORD=your-meeting-password
     ```

3. **Google Calendar API Setup**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the Google Calendar API
   - Create a service account and download the credentials JSON file
   - Extract the client email and private key from the credentials file
   - Share your Google Calendar with the service account email

4. **Zoom API Setup**:
   - Go to the [Zoom App Marketplace](https://marketplace.zoom.us/)
   - Click "Develop" > "Build App"
   - Choose "Server-to-Server OAuth" app type
   - Provide app information and create your app
   - Under "App Credentials", note your Client ID and Client Secret
   - Enable the necessary Zoom API scopes (at minimum: `meeting:write`, `meeting:read`)
   - Get your Account ID from your Zoom profile page

5. **Email Setup**:
   - For Gmail, you need to set up an "App Password":
     - Go to your Google Account > Security
     - Enable 2-Step Verification if not already enabled
     - Go to App passwords, generate a new app password
     - Use this password in your `.env.local` file

## Scheduling System Features

The scheduling system now provides:

- Calendar integration with Google Calendar to check and reserve time slots
- Zoom meeting creation for each scheduled call
- Automatic emails with calendar invites and Zoom meeting links
- Fallback to personal Zoom meeting link if API creation fails

## Deployment

Your project is live at:

**[https://vercel.com/ahmadharkouss-projects/v0-animated-portfolio-page](https://vercel.com/ahmadharkouss-projects/v0-animated-portfolio-page)**

## Build your app

Continue building your app on:

**[https://v0.dev/chat/projects/iZHmA22mszt](https://v0.dev/chat/projects/iZHmA22mszt)**

## How It Works

1. Create and modify your project using [v0.dev](https://v0.dev)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository