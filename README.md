# NavaJyothi Health & Retreat

Marketing site for NavaJyothi Health & Retreat, a Kerala Ayurveda, Yoga, and
Philosophy wellness retreat. A single-page React + TypeScript site built with
Vite and Tailwind CSS, deployed on Cloudflare Pages.

Real photography and contact details are still placeholders 
— see `src/components/PlaceholderImage.tsx` and `src/data/contact.ts`.

## Requirements

- Node.js 24+ and npm

## Local development

```bash
npm install   # install dependencies
npm run dev   # start the Vite dev server with HMR at http://localhost:5173
```

## Build

```bash
npm run build   # type-check (tsc) and produce a production build in dist/
```

## Test the production build locally

```bash
npm run preview   # build, then serve dist/ via `wrangler pages dev`
```

## Deploy to Cloudflare Pages

```bash
npm run deploy   # build, then publish dist/ via `wrangler pages deploy`
```

Requires being logged in to Cloudflare (`npx wrangler login`) and having
access to the `cloudeflare-jyothi` Pages project (see `wrangler.jsonc`).

## Lint

```bash
npm run lint   # oxlint
```
