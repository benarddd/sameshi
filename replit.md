# Overview

This is a school management website for **Gjimnazi Abdulla Keta** (a high school in Albania). The application is built as a full-stack web application using React for the frontend and Express.js for the backend, with a PostgreSQL database managed through Drizzle ORM. The website serves as an informational portal for students, parents, and staff to access school resources, schedules, announcements, clubs, library materials, and other academic information.

The application features a modern, dark-themed UI with Albanian language content, displaying information about the school's history, staff, clubs, events, calendar, class schedules, study materials, and a digital library. It includes pages for state exam preparation (Matura Shtetërore), contact information, FAQs, school regulations, and a student senate section.

# User Preferences

Preferred communication style: Simple, everyday language.

# Recent Changes

- October 14, 2025: Extracted and deployed full React/TypeScript school website
- October 14, 2025: Fixed critical routing issue - createPageUrl now returns correct format matching router paths
- October 14, 2025: Added Senati (Senate) page to navigation menu
- October 14, 2025: Created Albania Independence Day commemorative page (currently inactive, can be enabled by uncommenting)

# System Architecture

## Frontend Architecture

**Framework & Routing:**
- React 19 with TypeScript for type safety
- Wouter for client-side routing (lightweight React Router alternative)
- Vite as the build tool and development server

**UI Design System:**
- Shadcn/ui component library with Radix UI primitives
- Tailwind CSS for styling with custom design tokens
- Framer Motion for animations and transitions
- Dark mode support with HSL-based color system
- "New York" style variant from Shadcn/ui

**State Management:**
- TanStack Query (React Query) v5 for server state management
- React hooks for local component state
- Custom query client configuration with infinite stale time and no automatic refetching

**Component Architecture:**
- Page-based routing structure (`client/src/pages/`)
- Reusable UI components in `client/src/components/ui/`
- Feature-specific components in `client/src/components/home/`
- Layout wrapper component for consistent navigation and theming
- Custom hooks in `client/src/hooks/` for reusable logic

## Backend Architecture

**Server Framework:**
- Express.js with TypeScript
- HTTP server creation using Node's built-in `http` module
- Custom middleware for request logging and JSON response capture
- Error handling middleware for consistent error responses

**API Design:**
- RESTful API pattern (routes prefixed with `/api`)
- Modular route registration system in `server/routes.ts`
- Storage abstraction layer for data operations

**Data Layer:**
- Storage interface (`IStorage`) for CRUD operations
- In-memory storage implementation (`MemStorage`) as default
- Designed to be swappable with database implementations
- User entity with UUID-based identifiers

**Development Setup:**
- Vite middleware integration in development mode
- Custom logging system with timestamps
- Hot Module Replacement (HMR) support
- Runtime error overlay for development

## Database Schema

**ORM & Migration:**
- Drizzle ORM for type-safe database operations
- PostgreSQL dialect configuration
- Neon serverless PostgreSQL driver (`@neondatabase/serverless`)
- Schema validation using Drizzle-Zod integration
- Migrations stored in `./migrations` directory

**Current Schema:**
- Users table with username/password authentication
- UUID primary keys with PostgreSQL's `gen_random_uuid()`
- Zod schemas for input validation

**Planned Entities (from JSON schemas):**
The application defines several entity types for future database implementation:
- Announcements (title, content, category, date)
- Clubs (name, description, category, schedule, location, coordinator)
- Digital Books (title, author, category, cover, file URL, ISBN)
- Events (title, description, date, time, location, type)
- Materials (educational resources by subject and class level)
- Schedules (weekly class timetables)
- Staff (teacher/administrator profiles)

## External Dependencies

**UI & Component Libraries:**
- Radix UI primitives for accessible components (20+ component packages)
- Embla Carousel for image galleries
- Lucide React for iconography
- CMDK for command palette functionality
- Class Variance Authority (CVA) for component variants

**Utilities:**
- date-fns for date formatting and manipulation with Albanian locale support
- Zod for runtime schema validation
- clsx and tailwind-merge for className management
- nanoid for unique ID generation

**Development Tools:**
- TypeScript with strict mode enabled
- ESLint for code quality (configured but not shown)
- Replit-specific plugins (cartographer, dev-banner, runtime-error-modal)
- Source map tracing support

**Authentication & Sessions:**
- connect-pg-simple for PostgreSQL session storage (installed but not yet implemented)
- Session management infrastructure prepared for future authentication

**API & Communication:**
- Custom fetch wrapper with credential support
- JSON request/response handling
- 401 unauthorized handling with configurable behavior

## Design Principles

**Minimal Foundation:**
- Intentionally minimal starter template
- Neutral color palette for light/dark modes
- System font stack for zero load time
- Basic spacing system using Tailwind units (4, 8, 16)
- No custom animations by default

**Albanian Language Support:**
- All UI text in Albanian language
- Albanian date/time formatting
- Content tailored for Albanian high school context
- Days of week in Albanian (E Hënë, E Martë, etc.)

**Responsive Design:**
- Mobile-first approach with breakpoint at 768px
- Grid layouts that adapt to screen size
- Touch-friendly interactions
- Custom mobile detection hook

**Performance Optimization:**
- Code splitting through route-based lazy loading
- Image optimization opportunities
- Minimal bundle size through selective imports
- Vite's optimized build pipeline