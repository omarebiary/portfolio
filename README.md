# Omar Elebiary — Portfolio

Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/                 Routing, layout, metadata, global styles
components/layout/    Nav (scroll-spy) + SignalTrace (signature scroll-progress element)
components/sections/  One component per page section (Hero, About, Skills, Projects, Leadership, Education, Contact)
components/ui/        Reusable primitives (Button, Tag, StatCallout, ProjectCard, Reveal, SectionLabel)
lib/data.ts            All content: projects, skills, leadership entries -- edit this file to update copy
lib/sections.ts        Single source of truth for section/nav order
types/                 Shared TypeScript interfaces for the content model
```

## Editing content

Everything you'd want to change regularly -- project descriptions, skills, leadership entries, stats -- lives in `lib/data.ts` as typed objects. Add a project by adding an object to the `PROJECTS` array; no component code needs to change.

To reorder sections, edit the single array in `lib/sections.ts` -- the nav and the page both read from it.

## Fonts (important before deploying)

The design spec calls for **IBM Plex Sans** (display/body) and **IBM Plex Mono** (data/labels). The build environment this was created in didn't have network access to Google Fonts, so `app/layout.tsx` currently falls back to a close system-font stack defined in `app/globals.css` (`--font-plex-sans` / `--font-plex-mono`).

To restore the actual typefaces once deployed somewhere with normal internet access (Vercel, etc.):

```tsx
// app/layout.tsx
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

// then in the <body> className, replace `fontVariables` with:
// `${plexSans.variable} ${plexMono.variable}`
```

Next.js self-hosts and optimizes the fonts automatically -- no other changes needed, since the CSS already reads from those variable names.

## Before this goes live -- action items from the portfolio review

1. **GitHub repos**: only one project currently has a real repo. Push clean, documented repos for the other featured projects and set `href` per entry in `lib/data.ts` (defaults to `github.com/omarebiary` if omitted).
2. **LinkedIn URL**: `components/sections/Contact.tsx` has a placeholder `https://linkedin.com` -- swap in your actual profile URL.
3. **Domain**: `app/layout.tsx` has a placeholder `metadataBase` URL for Open Graph tags -- update once you have a real domain.

## Scripts

- `npm run dev` -- local development
- `npm run build` -- production build (verified passing)
- `npm run start` -- serve the production build
- `npm run lint` -- ESLint (verified passing)

## Accessibility notes

- Skip-to-content link, visible on keyboard focus
- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`) throughout
- All interactive elements are real `<a>`/`<button>` tags
- `prefers-reduced-motion` disables scroll-reveal motion and shortens transitions site-wide
- Visible focus ring on every interactive element (never suppressed)
