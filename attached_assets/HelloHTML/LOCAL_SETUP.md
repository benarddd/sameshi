# Local Development Setup Guide

## Prerequisites

Before you begin, make sure you have:
- **Node.js** version 20 or higher installed ([Download here](https://nodejs.org/))
- A code editor (like VS Code)
- A terminal/command prompt

## Download the Project

### Option 1: Download ZIP from Replit
1. Click the three dots menu (⋮) in the file explorer
2. Select "Download as ZIP"
3. Extract the ZIP file to your desired location

### Option 2: Clone with Git
```bash
git clone <your-replit-git-url>
cd <project-folder>
```

## Installation Steps

### 1. Install Dependencies
Open terminal in the project folder and run:
```bash
npm install
```

This will install all required packages (React, Vite, TypeScript, etc.)

### 2. Environment Setup (Optional)
Create a `.env` file in the root directory if needed:
```bash
# Add any environment variables here
# SESSION_SECRET=your-secret-key-here
```

### 3. Run the Development Server
```bash
npm run dev
```

The website will start at: **http://localhost:5000**

## Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run check

# Database migration (if using database)
npm run db:push
```

## Project Structure

```
├── client/              # Frontend React application
│   ├── src/
│   │   ├── pages/      # Page components
│   │   ├── components/ # Reusable components
│   │   └── lib/        # Utilities
│   └── index.html      # Entry HTML
├── server/              # Backend Express server
├── shared/              # Shared types/schemas
├── package.json         # Dependencies
└── vite.config.ts      # Vite configuration
```

## Troubleshooting

### Port Already in Use
If port 5000 is busy, the server will automatically use another port or you can set:
```bash
PORT=3000 npm run dev
```

### Dependencies Issues
If you get dependency errors:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
Run type checking:
```bash
npm run check
```

## Building for Production

```bash
# Build the project
npm run build

# Run production server
npm start
```

The production build will be optimized and ready to deploy.

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Development Tips

- Hot Module Replacement (HMR) is enabled - changes appear instantly
- Open DevTools to see React components
- Check console for any errors or warnings

## Need Help?

- Check the terminal for error messages
- Make sure all dependencies installed successfully
- Verify Node.js version: `node --version` (should be 20+)
