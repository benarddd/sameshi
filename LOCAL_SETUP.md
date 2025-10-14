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

**For Windows (Command Prompt):**
```cmd
set NODE_ENV=development && npm run dev
```

**For Windows (PowerShell):**
```powershell
$env:NODE_ENV="development"; npm run dev
```

**For Mac/Linux:**
```bash
npm run dev
```

The website will start at: **http://localhost:5000**

## Available Commands

### Development
```bash
# Windows (Command Prompt)
set NODE_ENV=development && npm run dev

# Windows (PowerShell)
$env:NODE_ENV="development"; npm run dev

# Mac/Linux
npm run dev
```

### Production Build and Run
```bash
# First, build the project
npm run build

# Then start the production server
npm start
```

### Other Commands
```bash
# Type checking
npm run check

# Database migration (if using database)
npm run db:push
```

## Important: Development vs Production

### Development Mode (for local coding)
- Uses `npm run dev` 
- Hot reload enabled - changes appear instantly
- **No build step required**
- Faster for development

### Production Mode (for deployment)
- Requires `npm run build` first
- Uses `npm start`
- Optimized and faster
- **Build step required before running**

## Troubleshooting

### Error: "Could not find the build directory"
This means you're running in production mode without building first. Solutions:

**Option 1: Run in development mode (recommended for local work)**
```cmd
# Windows Command Prompt
set NODE_ENV=development && npm run dev

# Windows PowerShell
$env:NODE_ENV="development"; npm run dev

# Mac/Linux
npm run dev
```

**Option 2: Build for production mode**
```bash
npm run build
npm start
```

### Port Already in Use
If port 5000 is busy:
```bash
# Windows CMD
set PORT=3000 && set NODE_ENV=development && npm run dev

# Windows PowerShell
$env:PORT=3000; $env:NODE_ENV="development"; npm run dev

# Mac/Linux
PORT=3000 npm run dev
```

### Dependencies Issues
If you get dependency errors:
```bash
# Clear node_modules and reinstall
rmdir /s /q node_modules     # Windows CMD
del package-lock.json        # Windows CMD

# Or on Mac/Linux
rm -rf node_modules package-lock.json

# Then reinstall
npm install
```

### TypeScript Errors
Run type checking:
```bash
npm run check
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
│   ├── public/         # Built files (after npm run build)
│   └── vite.ts         # Vite dev/production server
├── shared/              # Shared types/schemas
├── package.json         # Dependencies
└── vite.config.ts      # Vite configuration
```

## Quick Start Summary

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```cmd
   set NODE_ENV=development && npm run dev    # Windows CMD
   ```
   ```powershell
   $env:NODE_ENV="development"; npm run dev    # Windows PowerShell
   ```

3. **Open browser:** http://localhost:5000

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Development Tips

- Hot Module Replacement (HMR) is enabled - changes appear instantly
- Open DevTools to see React components
- Check console for any errors or warnings
- Use development mode for coding (`npm run dev`)
- Only use production mode for final testing before deployment

## Need Help?

- Check the terminal for error messages
- Make sure all dependencies installed successfully
- Verify Node.js version: `node --version` (should be 20+)
- Ensure you're using `npm run dev` for development (not `npm start`)
