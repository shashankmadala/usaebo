# USAEBO website

Production static Next.js site for the USA Economics and Business Olympiad (USAEBO), redesigned with a minimalist navy and gold design system.

## Structure

- `app/` - App Router pages (home, compete, results, team-usa, about, news, sponsors, contact)
- `components/` - shared UI (header, footer, cards, scroll reveal, Hall of Fame explorer)
- `lib/content/` - all site copy and data as typed TypeScript modules
- `public/images/` - locally hosted headshots and the USAEBO logo

## Development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run lint
npm run typecheck
npm run build
npm run check:copy
npm run check:routes
```

`check:copy` enforces content conventions (central color tokens, no em dashes). `check:routes` boots the production build and asserts every route renders.

## Deploying to Vercel

The project deploys as a standard Next.js app with no environment variables. Push to `main` and import the repository in Vercel, or run `npx vercel --prod`.
