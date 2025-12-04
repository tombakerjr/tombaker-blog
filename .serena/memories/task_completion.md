# Task Completion Checklist

When completing a task, run these commands in order:

## 1. Linting
```bash
npm run lint
```
This runs ESLint with Prettier integration. Fix any errors or warnings.

## 2. Build Verification
```bash
npm run build
```
Ensures the Next.js build succeeds without TypeScript or compilation errors.

## 3. Local Testing (if applicable)
```bash
npm run dev        # Quick check with Turbopack
npm run preview    # Full Cloudflare Workers preview
```

## 4. Type Generation (if Cloudflare bindings changed)
```bash
npm run cf-typegen
```
Regenerates `cloudflare-env.d.ts` with updated bindings.

## Notes
- There is no test suite configured (no `npm test` command)
- For Cloudflare-specific features, always verify with `npm run preview`
- The React Compiler is enabled and enforced - components must be compatible
