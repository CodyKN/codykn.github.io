# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server
pnpm build      # Build for production (static output to dist/)
pnpm preview    # Preview production build locally
```

No lint or test commands are configured.

## Architecture

This is an **Astro 5** static blog/portfolio site deployed to GitHub Pages at `https://codykn.github.io`.

### Content System

Content lives in `src/content/` as Markdown/MDX files, split into two collections:
- `blog/` — blog posts
- `projects/` — project showcases

Schemas are defined in `src/content.config.ts` using Zod. Pages use `getCollection()` at build time and `getStaticPaths()` for dynamic routes (`[...slug].astro`).

### Routing

File-based routing under `src/pages/`:
- `/blog/[...slug].astro` — individual blog posts (uses `BlogPost` layout with JSON-LD structured data)
- `/projects/[...slug].astro` — individual project pages
- `/tags/[tag].astro` — tag filter pages (auto-generated from post tags)
- `rss.xml.js` and `robots.txt.ts` — programmatic non-HTML routes

### Layouts & Components

- `Layout.astro` — base layout (wraps `BaseHead`, `Header`, `Footer`)
- `BlogPost.astro` — extends Layout; adds post metadata, medium-zoom for images, JSON-LD
- `src/consts.ts` — site-wide constants (site title, description, nav items)
- `src/utils/index.ts` — URL generation and tag utilities
- `src/assets/icons.ts` — SVG icon definitions

### Styling

Plain CSS in `src/styles/global.css` using CSS variables for dark/light theming. Max content width is 720px. No CSS framework.

### Deployment

GitHub Actions (`.github/workflows/deploy.yml`) auto-deploys to GitHub Pages on push to `main` using pnpm and Node 20.
