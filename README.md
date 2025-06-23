# Ahmad Harkouss - Animated Portfolio Website

*A modern, animated personal portfolio website built with React, Next.js, and TypeScript*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/ahmadharkouss-projects/v0-animated-portfolio-page)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/iZHmA22mszt)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## 🚀 Overview

This is a modern, fully animated personal portfolio website showcasing professional experience, projects, and skills. Built with cutting-edge web technologies, it features smooth animations, responsive design, and integrated contact/scheduling functionality.

**Live Website**: [https://ahmadharkous.com](https://ahmadharkous.com)

## ✨ Features

### 🎨 Design & User Experience
- **Fully Responsive Design** - Optimized for all devices and screen sizes
- **Smooth Animations** - Custom animated components and transitions
- **Modern UI/UX** - Clean, professional design with attention to detail
- **Dark/Light Theme Toggle** - User preference-based theme switching
- **Progressive Loading** - Optimized performance with lazy loading

### 📄 Portfolio Sections
- **About Section** - Professional profile with animated skills showcase
- **Projects Portfolio** - Interactive project cards with detailed case studies
- **Resume/CV Integration** - Downloadable resume with experience timeline
- **Case Studies** - Detailed project breakdowns with technical insights

### 🔧 Functional Features
- **Contact Form** - Direct email integration with form validation
- **Schedule Call System** - Calendar booking with Google Calendar & Zoom integration
- **Interactive Location Map** - Professional contact information display
- **SEO Optimized** - Meta tags, structured data, and performance optimization

## 🛠️ Technologies Used

### Frontend Framework
- **Next.js 14** - React framework with App Router
- **React 18** - Latest React features including Suspense and Server Components
- **TypeScript** - Type-safe development environment

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Advanced animations and transitions
- **Radix UI** - Accessible, unstyled UI primitives
- **Custom Components** - Reusable, animated component library

### Backend Integration
- **Next.js API Routes** - Serverless API endpoints
- **Nodemailer** - Email sending functionality
- **Google Calendar API** - Calendar integration for scheduling
- **Zoom API** - Video meeting creation and management

### Development Tools
- **pnpm** - Fast, disk space efficient package manager
- **ESLint** - Code linting and quality assurance
- **Prettier** - Code formatting
- **PostCSS** - CSS processing and optimization

## 📁 Project Structure

```
v0-animated-portfolio-page/
├── app/                    # Next.js App Router
│   ├── api/               # API routes for contact & scheduling
│   ├── case-studies/      # Case study pages
│   ├── projects/          # Projects showcase
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── ui/               # UI component library
│   ├── animated-*        # Custom animated components
│   ├── contact-form.tsx  # Contact functionality
│   └── schedule-call.tsx # Scheduling system
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/              # Static assets
│   ├── images/          # Profile and project images
│   └── reports/         # Downloadable documents
└── styles/              # Additional stylesheets
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/v0-animated-portfolio-page.git
   cd v0-animated-portfolio-page
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration & Setup

### Environment Variables

Create a `.env.local` file in the root directory and configure the following:

```env
# Email Configuration (for contact form)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=your-email@gmail.com
EMAIL_TO_PASSWORD=your-other-app-password

# Google Calendar API (for scheduling)
GOOGLE_CLIENT_EMAIL=your-service-account-email@project-id.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour Private Key Here\n-----END PRIVATE KEY-----\n"

# Zoom API Credentials (for video calls)
ZOOM_CLIENT_ID=your-zoom-client-id
ZOOM_CLIENT_SECRET=your-zoom-client-secret
ZOOM_ACCOUNT_ID=your-zoom-account-id

# Optional: Fallback Zoom Meeting
ZOOM_PERSONAL_MEETING_ID=your-personal-meeting-id
ZOOM_MEETING_PASSWORD=your-meeting-password
```

### Google Calendar API Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google Calendar API
4. Create service account credentials
5. Share your calendar with the service account email
6. Extract client email and private key for environment variables

### Zoom API Setup

1. Visit [Zoom App Marketplace](https://marketplace.zoom.us/)
2. Create a "Server-to-Server OAuth" app
3. Configure app credentials and scopes
4. Add credentials to environment variables

### Email Configuration

For Gmail integration:
1. Enable 2-Factor Authentication
2. Generate an App Password
3. Use the app password in your environment variables

## 📱 Features Deep Dive

### Contact Form System
- Real-time form validation
- Spam protection with rate limiting
- Email notifications with rich HTML templates
- Success/error feedback with animations

### Scheduling System
- **Google Calendar Integration**: Checks availability and books time slots
- **Zoom Meeting Creation**: Automatic meeting generation with join links
- **Email Notifications**: Calendar invites with meeting details
- **Fallback Handling**: Personal meeting room if API fails

### Animation System
- **Page Transitions**: Smooth navigation between sections
- **Scroll-triggered Animations**: Elements animate as they enter viewport
- **Interactive Hover Effects**: Enhanced user engagement
- **Loading States**: Skeleton loaders and progressive enhancement

## 🎨 Customization

### Updating Content
- **Profile Information**: Edit `components/about-profile.tsx`
- **Projects**: Update project data in `app/projects/page.tsx`
- **Resume**: Replace PDF file in `public/` directory
- **Images**: Add new images to `public/images/`

### Styling
- **Theme Colors**: Modify `tailwind.config.ts`
- **Animations**: Customize in individual component files
- **Layout**: Adjust spacing and typography in global CSS

## 🚀 Deployment

This project is configured for easy deployment on Vercel:

1. **Connect Repository**: Link your GitHub repo to Vercel
2. **Environment Variables**: Add all required env vars in Vercel dashboard
3. **Deploy**: Automatic deployments on every push to main branch

**Live Site**: [https://vercel.com/ahmadharkouss-projects/v0-animated-portfolio-page](https://vercel.com/ahmadharkouss-projects/v0-animated-portfolio-page)

## 🔗 v0.dev Integration

This project maintains automatic synchronization with [v0.dev](https://v0.dev):

- **Build & Edit**: Continue development at [v0.dev/chat/projects/iZHmA22mszt](https://v0.dev/chat/projects/iZHmA22mszt)
- **Auto-sync**: Changes from v0.dev automatically push to this repository
- **Seamless Workflow**: Design, deploy, and iterate with AI assistance

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📧 Contact

**Ahmad Harkouss**
- Portfolio: [Live Website](https://vercel.com/ahmadharkouss-projects/v0-animated-portfolio-page)
- Email: [Contact Form](https://vercel.com/ahmadharkouss-projects/v0-animated-portfolio-page#contact)
- Schedule: [Book a Call](https://vercel.com/ahmadharkouss-projects/v0-animated-portfolio-page#schedule)

---

*Built with ❤️ using React, Next.js, and modern web technologies*