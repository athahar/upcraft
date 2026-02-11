# UpCraft

Consulting business marketing site — strategy & UX design.

## Tech Stack

- **Frontend:** React 19, TypeScript, Vite 7, Tailwind CSS v4, shadcn/ui (new-york), Wouter, Framer Motion, TanStack React Query
- **Backend:** Express 4, TypeScript (tsx), Drizzle ORM, Neon PostgreSQL
- **Email:** Resend (sends to hello@upcraft.xyz)

## Commands

- `npm run dev` — Full-stack dev server (default port 5000, use `PORT=3001` to override)
- `npm run build` — Production build (client → `dist/public/`, server → `dist/index.cjs`)
- `npm start` — Run production bundle
- `npm run check` — TypeScript type check
- `npm run db:push` — Push Drizzle schema to database

## Project Structure

```
client/src/
  components/layout/    # navbar, footer
  components/sections/  # hero, about, pricing, contact, trusted-by
  components/modals/    # contact-modal (multi-step form)
  components/ui/        # shadcn/ui primitives
  pages/                # home, privacy, not-found
  hooks/                # use-mobile, use-toast
  lib/                  # queryClient, utils
server/
  index.ts              # Express entry point
  routes.ts             # API routes (POST /api/contact)
  storage.ts            # In-memory storage
  resend.ts             # Email client setup
shared/
  schema.ts             # Drizzle schema + Zod validation
```

## Path Aliases

- `@/` → `client/src/`
- `@shared/` → `shared/`
- `@assets/` → `attached_assets/`

## Conventions

- **Files:** kebab-case (`contact-modal.tsx`)
- **Components:** PascalCase, default exports for pages
- **Styling:** Tailwind CSS v4 with CSS variables (HSL). Theme colors: beige background `#F2F0E3`, dark grey text `#2E2E2E`, teal accent `#378c87`
- **Font:** Bricolage Grotesque (Google Fonts)
- **Animations:** Framer Motion `whileInView` for scroll effects
- **Forms:** React Hook Form + Zod validation
- **API responses:** `{ success: true }` or `{ error: "message" }`

## Environment Variables

- `PORT` — Server port (default 5000)
- `DATABASE_URL` — Neon PostgreSQL connection string
- Resend credentials via Replit Connectors
