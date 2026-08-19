# Café Elio — Multi-Page Restaurant Website

> **Good food. Better vibe.** A production-style marketing site for [Café Elio](https://www.google.com/maps/search/?api=1&query=Cafe+Elio+Regent+Estate+Jadavpur+Kolkata), a real multi-cuisine café in Jadavpur, Kolkata (4.4★, 340+ Google reviews).

**🔗 Live: [cafe-elio.vercel.app](https://cafe-elio.vercel.app)**

<p>
  <a href="https://cafe-elio.vercel.app"><img alt="Live Demo" src="https://img.shields.io/badge/Live_Demo-000000?logo=vercel&logoColor=white"></a>
  <img alt="React" src="https://img.shields.io/badge/React_19-20232A?logo=react&logoColor=61DAFB">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white">
  <img alt="Vite" src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white">
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_v4-38BDF8?logo=tailwindcss&logoColor=white">
</p>

---

## Overview

Café Elio is a fast, fully-responsive, seven-page website built to feel like real
agency work for a local hospitality brand — not a single-scroll template. It pairs an
editorial layout and cinematic motion with genuine content: the menu, reviews, and
venue details all reflect the actual café.

## Highlights

- **Seven real routes** — Home, Menu, About, Gallery, Events, Journal, Contact, plus a Reservation flow and a styled 404.
- **Client-side routing** via React Router 7 with an animated intro splash on first load.
- **Motion, tastefully** — Framer Motion scroll reveals, staggered grids, and a page-transition system.
- **Accessible foundations** — semantic landmarks, a "Skip to content" link, focus-visible rings, and labelled controls.
- **Reservation form with validation** — inline field errors and a confirmation state (front-end only; see *Notes*).
- **Authentic content** — real Google review excerpts, the real menu structure, and accurate location/hours.

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | React 19 + Vite 8 |
| Language | TypeScript (strict, project references) |
| Routing | React Router 7 |
| Styling | Tailwind CSS v4 (PostCSS) |
| Motion | Framer Motion 12 |
| Linting | oxlint |
| Hosting | Vercel |

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Hero, signature dishes, why-people-return, menu preview, moments, reviews |
| `/menu` | Full categorised menu with anchored sections |
| `/about` | Story, space, and location + directions |
| `/gallery` | Photo grid of the space and food |
| `/events` | Celebrations, group bookings |
| `/journal` | Editorial posts |
| `/contact` | Contact form + details |
| `/reservation` | Validated table-booking flow |

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

```bash
npm run build    # tsc -b && vite build
npm run preview  # serve the production build
npm run lint     # oxlint
```

## Project structure

```
src/
├── App.tsx              # Routes + layout shell
├── components/
│   ├── layout/          # Navigation, Footer
│   └── ui/              # Button, Accordion, Reveal, Plate, IntroSplash…
├── data/                # content.ts, menu.ts, reviews.ts  ← single source of truth
├── pages/               # One file per route
└── types/               # Shared TS types
```

Content is data-driven: menu, reviews, and venue details live in `src/data/*` so copy
changes never touch component code.

## Notes

- The **contact and reservation forms are front-end only** — they validate and confirm
  in the UI but do not yet POST to a backend. Wiring them to a form service (Formspree,
  Resend, or a serverless function) is the natural next step.
- The published **phone number** is a placeholder pending the venue's confirmation.

## License

Built as a portfolio / client-style project. Café Elio branding and photography belong
to the venue.
