# Star Innovation Website · 星动科技官网

[中文](./README.md) | English

The official website of **Star Innovation** (星动科技), focused on three business lines — **Foreign Trade**, **Self-Media**, and **Beauty & Medical** — helping enterprises build more sustainable growth through data, content, and global collaboration.

## Live URL

- **Production**: https://star-innovation.pages.dev/

## Tech Stack

- [Astro](https://astro.build) 7 (static output)
- [Tailwind CSS](https://tailwindcss.com) v4
- [Cloudflare Pages](https://pages.cloudflare.com) deployment

## Local Development

```bash
npm install
npm run dev        # start dev server with HMR
npm run build      # build to dist/
npm run preview    # preview the production build
```

## Deployment

```bash
npm run build
npx wrangler pages deploy dist --project-name star-innovation
```

## Pages

| Page | Route |
|------|-------|
| Home | `/` |
| Foreign Trade | `/foreign-trade/` |
| Self-Media | `/self-media/` |
| Beauty & Medical | `/beauty-medical/` |
| About | `/about/` |
| Contact | `/contact/` |
| 404 | `/404` |

## Project Structure

```
src/
├── components/     # components (Header/Footer/BusinessCard, etc.)
├── data/site.ts    # site & business content (data-driven, all copy lives here)
├── layouts/        # layouts
├── pages/          # pages
├── scripts/        # client-side scripts (theme toggle)
└── styles/         # global styles & design system (jade green + champagne gold)
```

## Content Maintenance

All copy for the three business lines (Foreign Trade / Self-Media / Beauty & Medical) — capabilities and service processes — lives in `src/data/site.ts`. Adding or adjusting business content requires no changes to page components.

## Branching Convention

```
main ← single trunk (all current code lives here)
```

All features are developed directly on `main` and merged back into it when complete.
