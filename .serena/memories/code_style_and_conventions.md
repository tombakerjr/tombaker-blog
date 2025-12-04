# Code Style and Conventions

## TypeScript
- **Strict mode enabled** with `strictNullChecks`
- Path alias: `@/*` maps to `./src/*`
- Module resolution: NodeNext

## React/Next.js Patterns
- **App Router** (not Pages Router) - all routes in `src/app/`
- **React Server Components** by default
- **React Compiler** enabled (`react-compiler` ESLint plugin with error level)
- Named exports for components (e.g., `export const Navbar`)
- Default exports for page components

## Component Structure
- Components in `src/components/`
- Pages in `src/app/[route]/page.tsx`
- Server/database schemas in `src/server/`

## Database (Drizzle ORM)
- Schema files export: `tableName`, `definition`, `table`, `relation`
- Use `getCloudflareContext()` to access D1 binding
- Pattern: `const db = drizzle(context.env.D1DATA)`

## Styling
- Tailwind CSS with dark mode support (`dark:` prefix)
- Custom container class: `max-w-container`
- Print width: 120 characters (Prettier)

## ESLint Rules
- Extends: `next/core-web-vitals`, `plugin:prettier/recommended`
- `unused-imports/no-unused-imports-ts`: warn
- `react-compiler/react-compiler`: error

## Naming Conventions
- Files: kebab-case (e.g., `navbar.tsx`)
- Components: PascalCase (e.g., `Navbar`)
- Variables/functions: camelCase
