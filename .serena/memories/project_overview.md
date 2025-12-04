# Project Overview

## Purpose
Personal blog website for Tom Baker. A Next.js application that displays blog posts fetched from a Cloudflare D1 database.

## Tech Stack
- **Framework**: Next.js 15.4.6 with App Router
- **React**: React 19.1.1 with React Compiler enabled
- **Language**: TypeScript 5.5.4 (strict mode)
- **Styling**: Tailwind CSS 3.4.7
- **Database**: Cloudflare D1 (SQLite) via Drizzle ORM
- **Deployment**: Cloudflare Workers via OpenNextJS (@opennextjs/cloudflare)
- **Storage**: Cloudflare R2 for incremental cache, KV for data

## Cloudflare Bindings
- `D1DATA` - D1 database for blog posts, users, categories
- `KVDATA` - KV namespace
- `NEXT_INC_CACHE_R2_BUCKET` - R2 bucket for Next.js incremental cache
- `ANALYTICS1` - Analytics engine dataset

## Key Dependencies
- `drizzle-orm` - Database ORM
- `@opennextjs/cloudflare` - Cloudflare Workers adapter for Next.js
- `wrangler` - Cloudflare development/deployment CLI
