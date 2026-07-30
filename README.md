# USAEBO website rebuild

Production-ready static Next.js rebuild for the USA Economics and Business Olympiad website.

## Development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run lint
npx tsc --noEmit
npm run build
npm run check:copy
```

## Deploying to Vercel

Import the GitHub repository in Vercel, keep the default Next.js settings, and deploy. The site uses static content only and does not require environment variables.
