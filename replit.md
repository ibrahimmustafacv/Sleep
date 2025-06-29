# Sleep Calculator Application

## Overview

This is a smart sleep calculator web application built with React and TypeScript that helps users determine optimal sleep and wake times based on natural sleep cycles. The application features a bilingual interface (Arabic/English) with RTL support and provides personalized sleep recommendations based on 90-minute sleep cycles.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React hooks with @tanstack/react-query for server state
- **Build Tool**: Vite with hot module replacement

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL session store with connect-pg-simple

### Key Components

#### Frontend Components
- **Sleep Calculator Core**: Main application logic with dual calculation modes
- **Mode Selector**: Toggle between "sleep now" and "wake at specific time" modes
- **Results Display**: Visual presentation of optimal sleep/wake times
- **Health Info Sidebar**: Educational content about sleep hygiene
- **Live Clock**: Real-time clock display

#### Backend Infrastructure
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Route Handler**: Express.js route registration system
- **Vite Integration**: Development server with SSR support

### Data Flow

1. **User Input**: Time selection through HTML time inputs
2. **Calculation Engine**: Pure functions calculating sleep cycles (90-minute intervals)
3. **Result Generation**: Multiple optimal time options with cycle counts
4. **Display Logic**: Formatted time display with Arabic/English localization

### External Dependencies

#### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **date-fns**: Date manipulation utilities
- **wouter**: Lightweight routing

#### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **class-variance-authority**: Type-safe CSS class variants
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library

### Deployment Strategy

#### Development
- **Command**: `npm run dev`
- **Server**: Vite development server with Express.js middleware
- **Features**: Hot module replacement, runtime error overlay

#### Production Build
- **Frontend**: Vite builds to `dist/public` directory
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Deployment**: Single command `npm start` serves static files and API

#### Database Management
- **Schema**: Defined in `shared/schema.ts` with Drizzle
- **Migrations**: Generated in `./migrations` directory
- **Push Command**: `npm run db:push` for schema synchronization

### Changelog
- June 29, 2025. Initial setup

### User Preferences

Preferred communication style: Simple, everyday language.