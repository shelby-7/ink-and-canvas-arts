# Overview

This is a portfolio website for a creative professional showcasing photography, videography, and 3D art work. The application is built as a full-stack web application with a React frontend and Express backend, featuring a brutalist design aesthetic with dark theming and pixelated visual elements.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built with React and TypeScript, using Vite as the build tool. The application follows a component-based architecture with:

- **UI Framework**: React with TypeScript
- **Styling**: Tailwind CSS with a custom brutalist design system
- **Component Library**: Radix UI primitives with shadcn/ui components
- **Routing**: React Router for client-side navigation
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite with custom configuration for development and production

The design system implements a brutalist aesthetic with:
- Dark color scheme with HSL color definitions
- Custom CSS variables for consistent theming
- Pixelated transitions and brutal shadow effects
- Monospace typography for industrial feel

## Backend Architecture

The backend uses a Node.js Express server with:

- **Runtime**: Node.js with TypeScript and ES modules
- **Framework**: Express.js for HTTP server and API routes
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Development Setup**: Custom Vite middleware integration for seamless dev experience
- **Storage Interface**: Pluggable storage system with in-memory implementation and database-ready interface

The server implements a modular architecture with separate concerns for routing, storage, and development tooling.

## Data Storage

The application is configured for PostgreSQL using:

- **Database**: PostgreSQL (configured but not yet implemented)
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Migrations**: Drizzle Kit for schema management
- **Connection**: Neon Database serverless driver
- **Current Implementation**: In-memory storage for development

The database schema includes a users table with basic authentication fields, designed to be extensible for additional content management.

## Development Environment

The project is optimized for Replit deployment with:

- **Hot Reload**: Vite HMR integrated with Express server
- **Path Resolution**: Custom aliases for clean imports
- **Error Handling**: Runtime error overlays and comprehensive logging
- **Build Process**: Dual build system for client (Vite) and server (esbuild)

# External Dependencies

## UI and Styling Dependencies

- **@radix-ui/react-\***: Comprehensive suite of accessible UI primitives for building the component library
- **tailwindcss**: Utility-first CSS framework for styling with custom brutalist design tokens
- **class-variance-authority**: Type-safe variant handling for component styling
- **lucide-react**: Icon library providing consistent iconography

## Backend Dependencies

- **@neondatabase/serverless**: Serverless PostgreSQL driver optimized for edge environments
- **drizzle-orm**: Type-safe ORM providing compile-time SQL validation
- **drizzle-kit**: CLI tools for database migrations and schema management
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## Development Dependencies

- **@replit/vite-plugin-\***: Replit-specific plugins for enhanced development experience
- **tsx**: TypeScript execution environment for development server
- **esbuild**: Fast JavaScript bundler for production server builds

## Additional Dependencies

- **@tanstack/react-query**: Server state management and caching
- **react-router-dom**: Client-side routing for single-page application
- **@hookform/resolvers**: Form validation with type-safe schema validation
- **date-fns**: Date manipulation utilities
- **nanoid**: Unique ID generation