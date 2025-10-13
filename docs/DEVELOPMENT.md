# Development Guide

## Setup

```powershell
# Clone and install
git clone <repo-url>
cd art_portfolio
npm install

# Configure environment
cp .env.example .env.local
# Add your Hygraph endpoint and GA ID
```

## Environment Variables

```
NEXT_PUBLIC_ENDPOINT       # Hygraph GraphQL API endpoint
NEXT_GA_MEASUREMENT_ID     # Google Analytics measurement ID
```

## Commands

```powershell
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Development Workflow

### Creating Components

1. Add to appropriate folder (`pages/`, `reusable/`, `sections/`)
2. Define TypeScript props using `type` (not `interface`) in `src/types/components.ts`
3. Export from `index.ts` if reusable
4. Use Server Components by default, add `"use client"` only when needed (state, effects, browser APIs)
5. Use functional components with TypeScript types

### Adding Routes

1. Create folder in `src/app/[locale]/`
2. Add `page.tsx` for route content
3. Update `src/config.ts` pathnames if needed
4. Add translations to `messages/en.json` and `messages/pl.json`

### GraphQL Queries

1. Write query inline using `gql` template literal
2. Use `getClient().query()` in Server Components (from `@/lib/apollo-client`)
3. Pass data to Client Components via props (no client-side fetching)
4. Type your query responses with TypeScript interfaces

### Styling

- Use Tailwind utility classes (Tailwind CSS 4)
- Custom colors from `tailwind.config.ts`:
  - `dark` - Main dark background (#0a0a0a)
  - `darker` - Deeper dark (#050505)
  - `bright` - Light text/background (#f0f0f0)
  - `highlight` - Accent color (#d4af37 gold)
- Dark mode: Use `dark:` prefix (e.g., `dark:bg-darker`, `dark:text-bright`)
- Responsive: Mobile-first with `sm:` breakpoint (640px)

## Testing Checklist

- [ ] Test both locales (`/en/*`, `/pl/*`)
- [ ] Verify dark/light theme switching
- [ ] Check responsive on mobile/desktop
- [ ] Validate GraphQL queries return data
- [ ] Run `npm run build` before committing

## Common Issues

**PowerShell Commands**: This project is developed on Windows. If bash commands fail, use npm scripts or PowerShell equivalents.

**Image Loading**: Ensure Hygraph domain is configured in `next.config.mjs` using `remotePatterns` (not deprecated `domains`):

```js
images: {
  remotePatterns: [{ protocol: "https", hostname: "media.graphassets.com" }];
}
```

**Locale Routing**: Middleware handles locale detection automatically. Always use locale prefix in URLs (`/en/*`, `/pl/*`). Use `Link` from `@/navigation` for type-safe routing.

**TypeScript Errors**: Strict mode is enabled. No implicit `any` types allowed. Restart TS server if types are stale.

**Build Errors**: Clear cache and reinstall if you see module resolution issues:

```powershell
Remove-Item -Recurse -Force .next, node_modules
npm install
```

## Deployment

- Platform: Vercel (recommended)
- Set environment variables in platform settings
- Automatic deployments on git push
- Build output: `.next/` directory

## Dependencies

Current major versions (as of October 2024):

- Next.js: 15.5.5
- React: 19.2.0
- Tailwind CSS: 4.1.14
- Apollo Client: 4.0.7
- next-intl: 4.3.12
- TypeScript: 5.9.3

Run `npm outdated` periodically to check for updates.

### Update Strategy

```powershell
# Check outdated packages
npm outdated

# Update all non-major versions
npm update

# Update major versions (test thoroughly)
npm install package@latest
npm run build
npm run dev
```
