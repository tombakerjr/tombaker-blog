# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (Turbopack)
npm run build        # Next.js production build
npm run preview      # Build and preview as Cloudflare Worker locally
npm run lint         # ESLint with Prettier
npm run deploy       # Build and deploy to Cloudflare Workers
npm run cf-typegen   # Regenerate Cloudflare binding types after wrangler.jsonc changes
```

No test suite is configured.

## Architecture

Next.js 15 blog deployed to Cloudflare Workers via `@opennextjs/cloudflare`. Uses React 19 with React Compiler (enforced via ESLint error).

**Database pattern**: Drizzle ORM with Cloudflare D1. Access the database in server components:
```typescript
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { drizzle } from "drizzle-orm/d1";

const context = getCloudflareContext();
const db = drizzle(context.env.D1DATA);
```

**Schema structure** (`src/server/`): Each table has a file exporting `tableName`, `definition`, `table`, and `relation`. All tables include `auditSchema` (createdOn, updatedOn as integers).

**Cloudflare bindings** (defined in `wrangler.jsonc`):
- `D1DATA` - D1 database
- `KVDATA` - KV namespace
- `NEXT_INC_CACHE_R2_BUCKET` - R2 bucket for Next.js incremental cache

## Code Style

- Path alias: `@/*` → `./src/*`
- Prettier printWidth: 120
- React Compiler compatibility required (ESLint error level)
