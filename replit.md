# Overview

UpCraft is a marketing and consultancy website for "UpCraft LLC," a Strategy & UX Design consultancy. The site is a single-page application with a hero section, trusted-by logos, about section, pricing tiers, and a contact form. It also hosts a privacy policy page for a separate product called "Beemo" (a habit tracking app). The contact form sends inquiries via email using the Resend email service.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend
- **Framework**: React with TypeScript, bundled via Vite
- **Routing**: Wouter (lightweight client-side router) with routes for `/` (home), `/apps/privacy` (privacy policy), and a 404 page
- **Styling**: Tailwind CSS v4 (using `@tailwindcss/vite` plugin) with CSS variables for theming. The design uses a beige/cream color scheme (`#F2F0E3` background, `#2E2E2E` text, `#F76F53` accent)
- **UI Components**: shadcn/ui (new-york style) with Radix UI primitives — extensive component library already installed
- **Animations**: Framer Motion for scroll-triggered animations and transitions
- **State Management**: TanStack React Query for server state; no complex client state management needed
- **Fonts**: Bricolage Grotesque (primary/body) loaded from Google Fonts
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`

## Backend
- **Runtime**: Node.js with Express, written in TypeScript (run via `tsx`)
- **Server entry**: `server/index.ts` creates an HTTP server, registers routes, and serves static files in production or uses Vite dev middleware in development
- **API**: Single POST endpoint `/api/contact` that receives form submissions (name, email, tier, questionnaire answers) and sends an email via Resend
- **Storage**: In-memory storage (`MemStorage` class) with a basic user CRUD interface — currently only used as a placeholder, not actively used by any routes

## Database
- **ORM**: Drizzle ORM configured for PostgreSQL via `@neondatabase/serverless`
- **Schema**: Defined in `shared/schema.ts` — currently only has a `users` table with `id`, `username`, and `password` fields
- **Migrations**: Managed via `drizzle-kit push` (schema push approach, not migration files)
- **Note**: The database schema exists but isn't actively used by any routes yet. The storage layer uses in-memory maps instead.

## Build System
- **Development**: `npm run dev` starts the Express server with Vite middleware for HMR
- **Production build**: `npm run build` runs a custom script (`script/build.ts`) that builds the client with Vite and bundles the server with esbuild. Server output is CommonJS (`dist/index.cjs`), client output goes to `dist/public/`
- **Production start**: `npm start` runs the built `dist/index.cjs`

## Key Design Decisions
- **Monorepo structure**: Client (`client/`), server (`server/`), and shared code (`shared/`) in one repo with shared TypeScript config
- **No authentication**: The site is a public marketing page with no login functionality despite having user schema defined
- **Static privacy page**: There's both a React-rendered privacy page and a standalone HTML version at `client/public/apps/privacy/index.html` as a fallback
- **Contact modal with guided flow**: The pricing section opens a multi-step contact modal that collects tier-specific questions before submitting

# External Dependencies

- **Resend**: Email delivery service, accessed via Replit Connectors (credentials fetched from `REPLIT_CONNECTORS_HOSTNAME`). Used to send contact form submissions to `mashaal@upcraft.xyz`
- **Neon Database**: PostgreSQL provider via `@neondatabase/serverless`. Requires `DATABASE_URL` environment variable. Currently configured but not actively queried by any route
- **Google Fonts**: Bricolage Grotesque and Space Grotesque loaded via CDN in `index.html`
- **External brand logos**: Trusted-by section loads SVG logos from Wikimedia Commons (Google, PayPal, Visa, LinkedIn, Square, Apple, Microsoft, Amazon)
- **Replit-specific plugins**: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner` (dev-only)