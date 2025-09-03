# Jayesh Vyas Portfolio

## Overview

This is a modern, responsive React single-page portfolio application for Jayesh Vyas, a Technical Team Lead and Solution Architect. The project showcases his professional experience, skills, and projects through a clean, minimal design built with React, TypeScript, and Tailwind CSS.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: wouter for lightweight client-side routing with pages for home, experience, projects, skills, articles, and contact
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, accessible UI components
- **Animations**: Framer Motion for smooth page transitions and element reveals
- **State Management**: TanStack React Query for server state management and caching
- **Forms**: React Hook Form with Zod validation for type-safe form handling

### Backend Architecture
- **Server**: Express.js with TypeScript for API endpoints
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Session Management**: connect-pg-simple for PostgreSQL-backed session storage
- **Development**: Hot module replacement via Vite integration in development mode
- **Build Process**: esbuild for server-side bundling and ES modules

### Design System
- **Theme**: Light/dark mode support with CSS custom properties
- **Colors**: Primary sky-500 (#0ea5e9), accent emerald-500 (#22c55e)
- **Typography**: Inter font family with systematic font weights
- **Layout**: Responsive grid system with generous whitespace and mobile-first approach
- **Components**: Comprehensive UI component library based on Radix UI primitives

### Database Schema
- **User Management**: Basic user schema with username/password authentication
- **Database**: PostgreSQL with UUID primary keys and proper indexing

### Project Structure
- **Monorepo**: Shared types and schemas between client and server
- **Client**: React SPA in `/client` directory with component-based architecture
- **Server**: Express API in `/server` directory with modular route organization
- **Shared**: Common types and database schemas in `/shared` directory

## External Dependencies

### Core Technologies
- **React Ecosystem**: React 18, React DOM, React Hook Form, TanStack React Query
- **Build Tools**: Vite, esbuild, TypeScript compiler
- **Database**: Neon Database (serverless PostgreSQL), Drizzle ORM, connect-pg-simple
- **UI Framework**: Tailwind CSS, Radix UI primitives, Lucide React icons

### Development Dependencies
- **Validation**: Zod for runtime type checking and form validation
- **Animation**: Framer Motion for UI animations and transitions
- **Utilities**: clsx, tailwind-merge for conditional styling
- **Date Handling**: date-fns for date manipulation and formatting

### Third-party Integrations
- **Email Service**: EmailJS integration planned for contact form functionality
- **Font Loading**: Google Fonts (Inter) for typography
- **Development Tools**: Replit-specific plugins for error handling and debugging

### Deployment & Infrastructure
- **Database Provider**: Neon Database for serverless PostgreSQL hosting
- **Session Storage**: PostgreSQL-backed sessions for user authentication
- **Static Assets**: Vite-optimized asset bundling and serving
- **Environment Management**: Environment variables for database connection and configuration