# Zackor Signals: Powered by Sure Thing

AI · Crypto · Market Intelligence newsletter site.

Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Pages

- `/` — Landing page with email signup
- `/issues` — Newsletter archive
- `/issues/[id]` — Individual issue view

## Adding a new issue

Edit `app/data/issues.ts` and add a new entry to the `ISSUES` array.

## Local dev

```bash
npm install
npm run dev
```

## Deploy

Connected to Vercel. Push to `main` to deploy.
