# TechForge - Student Project Platform

A modern, responsive platform for selling premium student projects across various technologies including AI/ML, Web Development, Full-Stack, Mobile Apps, and more.

## Features

- **Modern Design**: Clean, professional UI with gradient backgrounds and smooth animations
- **Analytics Tracking**: Google Analytics 4 integration for comprehensive site monitoring
- **Project Categories**: AI/ML, Web Development, Full-Stack, Mobile Apps, Database, Cybersecurity
- **Contact Form**: Integrated form that sends inquiries directly to email
- **Data Storage**: JSON-based database for storing inquiries
- **Responsive**: Mobile-first design that works on all devices
- **Email Integration**: Automatic email notifications for new inquiries

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Lucide React
- **Backend**: Node.js, Express.js, Nodemailer
- **Analytics**: Google Analytics 4
- **Database**: JSON file storage
- **Build Tool**: Vite

## Getting Started

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
# Google Analytics is pre-configured with: G-RE8FYB41FC
# For email functionality (optional)
cp .env.example .env

# Edit .env and add:
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
```

3. Start the development server:
```bash
npm run dev
```

4. In a separate terminal, start the backend server:
```bash
cd server
npm install
npm start
```

## 🚀 Deployment to Render

### Quick Deploy (Recommended):
1. **Fork this repository** to your GitHub
2. **Connect to Render**: [dashboard.render.com](https://dashboard.render.com/)
3. **Create Web Service** from your forked repo
4. **Use these settings**:
   ```
   Build Command: npm install && npm run build
   Start Command: npm run start
   ```
5. **Set Environment Variables**:
   ```
   NODE_ENV=production
   VITE_GA_MEASUREMENT_ID=G-RE8FYB41FC
   EMAIL_USER=your-gmail@gmail.com (optional)
   EMAIL_PASS=your-app-password (optional)
   ```

### Alternative: Auto-Deploy with Blueprint
- Push this repo to GitHub with the included `render.yaml`
- Import as Blueprint in Render for automatic configuration

**📋 See `deploy-instructions.md` for detailed deployment guide**

## Google Analytics Setup

✅ **Already Configured!** 
- **Analytics ID**: `G-RE8FYB41FC`
- **Tracking**: Automatically active on deployment

### What's Being Tracked:
- **Page Views**: All page visits
- **User Interactions**: Button clicks, form submissions
- **Engagement**: Scroll depth, time on page
- **Business Metrics**: Project category views, contact form conversions

### Verify Analytics:
1. Deploy your site to Render
2. Visit your live URL
3. Check [Google Analytics](https://analytics.google.com/) → Real-time reports
4. You should see live visitors! 📊

## Project Structure

```
src/
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Project categories
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── hooks/
│   └── useAnalytics.ts # Analytics hook
├── utils/
│   └── analytics.ts    # Analytics utilities
├── App.tsx             # Main app component
└── main.tsx            # Entry point

server/
├── index.js            # Express server
└── package.json        # Server dependencies

data/
└── inquiries.json      # Stored inquiries
```

## Email Configuration

To enable email functionality:

1. Use Gmail with an App Password
2. Set environment variables:
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASS`: Your Gmail App Password

All inquiries will be sent to: `techforge81@gmail.com`

## Analytics Dashboard

Once configured, you can monitor your website performance in Google Analytics:

- **Real-time visitors** and page views
- **Popular project categories** and user interests
- **Contact form conversion rates**
- **User engagement metrics** (scroll depth, time on page)
- **Traffic sources** and user demographics
- **Custom events** for detailed interaction tracking

## Deployment

### Production Build:
```bash
npm run build
```

### Deployment Options:
- **Render** (Recommended): See deployment instructions above
- **Vercel/Netlify**: Deploy `dist` folder + serverless functions
- **VPS/Cloud**: Use included Dockerfile for containerized deployment

### Environment Variables for Production:
```bash
NODE_ENV=production
VITE_GA_MEASUREMENT_ID=G-RE8FYB41FC
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
```

## Customization

- Update contact email in `server/index.js`
- Modify project categories in `Projects.tsx`
- Change branding in `Header.tsx` and `Footer.tsx`
- Adjust colors in Tailwind classes throughout components
- Configure additional analytics events in `utils/analytics.ts`