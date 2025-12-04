# Suggested Commands

## Development
```bash
npm run dev          # Start dev server with Turbopack (localhost:3000)
npm run preview      # Build and preview as Cloudflare Worker locally
```

## Building
```bash
npm run build           # Standard Next.js build
npm run build:workers   # Build for Cloudflare Workers (opennextjs-cloudflare)
```

## Linting & Formatting
```bash
npm run lint         # Run ESLint
```
Note: Prettier is integrated via ESLint, so `npm run lint` handles formatting checks.

## Deployment
```bash
npm run deploy       # Build and deploy to Cloudflare Workers
npm run upload       # Build and upload (without activating)
```

## Cloudflare-specific
```bash
npm run cf-typegen   # Generate TypeScript types for Cloudflare env bindings
```

## Utility Commands (Linux)
- `git` - Version control
- `ls`, `cd`, `find`, `grep` - Standard file navigation/search
- Node version: Check `.nvmrc` for required version
