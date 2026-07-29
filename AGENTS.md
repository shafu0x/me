<!-- BEGIN:nextjs-agent-rules -->

# shafu.me

Personal resume site built with Next.js 16 App Router.

## Stack

- Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4
- Deployed at https://shafu.me

## Project structure

- `app/` — routes, layouts, metadata files (sitemap, robots, OG image)
- `components/` — UI components (server components by default)
- `lib/` — shared data and config (`site.ts`, `talks.ts`)
- `public/` — static assets

## Conventions

- Server Components by default; add `"use client"` only when needed (e.g. PDF download)
- Use `next/image`, not raw `<img>`
- Use the Metadata API for SEO (`layout.tsx`, `opengraph-image.tsx`, etc.)
- Read `node_modules/next/dist/docs/` for version-specific Next.js APIs — this is Next.js 16 with breaking changes from earlier versions
- Preserve the intentional retro HTML aesthetic (monospace, blue links) — do not modernize the visual design

## Environment

- `NEXT_PUBLIC_SITE_URL` — optional override for metadata/canonical URLs; defaults to `https://shafu.me` in production

<!-- END:nextjs-agent-rules -->
