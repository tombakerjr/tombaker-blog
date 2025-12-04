# Codebase Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (Navbar, Footer, metadata)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles (Tailwind)
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── blog/
│       ├── page.tsx        # Blog listing with pagination
│       └── [slug]/
│           └── page.tsx    # Individual blog post
├── components/             # Shared React components
│   ├── navbar.tsx
│   └── footer.tsx
└── server/                 # Drizzle ORM schemas
    ├── posts.ts            # Posts table schema
    ├── users.ts            # Users table schema
    ├── categories.ts       # Categories table schema
    ├── categoriesToPosts.ts # Many-to-many junction
    └── audit.ts            # Audit fields (createdOn, etc.)
```

## Configuration Files
- `wrangler.jsonc` - Cloudflare Workers config (bindings, environments)
- `open-next.config.ts` - OpenNext configuration
- `tsconfig.json` - TypeScript configuration
- `.eslintrc.json` - ESLint rules
- `.prettierrc` - Prettier config (printWidth: 120)
- `tailwind.config.js` - Tailwind CSS configuration

## Type Definitions
- `cloudflare-env.d.ts` - Cloudflare binding types (generated)
- `env.d.ts` - Environment variable types
- `types.d.ts` - Custom type definitions
