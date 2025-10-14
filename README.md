# Gjimnazi Abdulla Keta - School Website

A modern, full-stack school management website for Gjimnazi Abdulla Keta high school in Albania. Built with React, TypeScript, and Express.js.

![School Website](https://img.shields.io/badge/React-19-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue) ![Vite](https://img.shields.io/badge/Vite-5.4-purple)

## ✨ Features

- 🏠 **Homepage** - Modern hero section with school information
- 📚 **Academic Pages** - Class schedules, study materials, and exam preparation
- 📖 **Digital Library** - Browse and access educational resources
- 🎭 **Clubs & Activities** - Student clubs and extracurricular activities
- 📅 **Events Calendar** - School events and announcements
- 👨‍🏫 **Staff Directory** - Teacher and administrator profiles
- 🏛️ **Student Senate** - Information about student government
- 🇦🇱 **Independence Day** - Special commemorative page (activatable)

## 🚀 Quick Start

### Prerequisites
- Node.js 20 or higher
- npm (comes with Node.js)

### Installation

1. **Download or Clone the Project**
   ```bash
   # Download as ZIP from Replit or clone with git
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   ```
   http://localhost:5000
   ```

📖 **For detailed setup instructions, see [LOCAL_SETUP.md](LOCAL_SETUP.md)**

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Shadcn/ui** - Component library
- **Wouter** - Lightweight routing

### Backend
- **Express.js** - Server framework
- **TypeScript** - Type safety
- **Drizzle ORM** - Database management
- **PostgreSQL** - Database (optional)

## 📁 Project Structure

```
├── client/                 # Frontend application
│   ├── src/
│   │   ├── pages/         # Page components
│   │   ├── components/    # Reusable UI components
│   │   ├── lib/           # Utilities & helpers
│   │   └── App.tsx        # Main app component
│   └── index.html
├── server/                 # Backend application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   └── vite.ts            # Vite integration
├── shared/                 # Shared types & schemas
├── package.json
├── vite.config.ts
└── tailwind.config.ts
```

## 🎨 Design Features

- **Dark Mode** - Built-in theme toggle
- **Responsive Design** - Mobile-first approach
- **Albanian Language** - Full Albanian localization
- **Modern UI** - Gradient effects and smooth animations
- **Accessible** - ARIA-compliant components

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Run production server |
| `npm run check` | TypeScript type checking |
| `npm run db:push` | Push database schema |

## 🇦🇱 Special Features

### Albania Independence Day Page
A special commemorative page for November 28th (Albania Independence Day) with:
- Red, black, and gold theme (Albanian flag colors)
- Historical content and quotes
- Beautiful animations

**To activate:** See [INDEPENDENCE_DAY_ACTIVATION.md](INDEPENDENCE_DAY_ACTIVATION.md)

## 📚 Pages Included

- **Ballina** - Homepage
- **Rreth Nesh** - About Us
- **Historia** - School History
- **Rregullorja** - School Regulations
- **FAQ** - Frequently Asked Questions
- **Orari** - Class Schedule
- **Materiale** - Study Materials
- **Matura Shtetërore** - State Exam Preparation
- **Biblioteka** - Digital Library
- **Klube** - Student Clubs
- **Lajme** - News & Announcements
- **Kalendari** - Events Calendar
- **Senati** - Student Senate
- **Kontakti** - Contact Information
- **Portali** - Student Portal (external link)

## 🔧 Configuration

### Environment Variables
Create a `.env` file:
```env
PORT=5000
SESSION_SECRET=your-secret-key
DATABASE_URL=your-database-url (optional)
```

### Vite Configuration
The project is configured to work both locally and on Replit with proper host settings.

## 📝 License

© 2025 Gjimnazi Abdulla Keta. All rights reserved.

## 🤝 Contributing

This is a school project. For modifications or questions, contact the school administration.

## 📞 Support

For technical issues or questions:
- Email: info@gjimnazi-keta.edu.al
- Phone: +355 4 123 4567

---

**Built with ❤️ for Albanian education**
