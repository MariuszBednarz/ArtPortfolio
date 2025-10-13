# Architecture

## Overview

Next.js App Router portfolio showcasing artist's paintings, sculptures, and performance art. Content managed via Hygraph CMS.

## Tech Stack

- **Framework**: Next.js 15.5 (App Router)
- **Runtime**: React 19
- **Language**: TypeScript 5.9 (strict mode)
- **Styling**: Tailwind CSS 4.1
- **Data**: Apollo Client 4.0 + GraphQL 16
- **CMS**: Hygraph (GraphCMS)
- **i18n**: next-intl 4.3 (Polish/English)
- **Theme**: next-themes 0.4 (dark/light mode)
- **Image Processing**: Sharp 0.34

## Directory Structure

### `/src/app/[locale]`

Internationalized routes using Next.js dynamic segments:

- `page.tsx` - Homepage with hero and featured works
- `art/` - Gallery grid + individual artwork details
- `bio/` - Artist biography with awards
- `policy/` - Privacy policy
- `layout.tsx` - Root layout with NavBar, Footer, theme provider

### `/src/components`

**pages/** - Full page components (Art, Arts, Bio, Home, Policy, NotFound)
**reusable/** - Shared UI (Button, Checkbox, CustomImage, LangSwitch, ThemeSwitch, NavLinks, etc)
**sections/** - Layout sections (NavBar, Footer, Filters, Masonry, Hero, GoogleAnalytics)

### `/src/lib`

**apollo-client.ts** - GraphQL client config with Hygraph endpoint

### `/src/types`

**components.ts** - TypeScript definitions for component props

### `/src/utils`

Helper functions and utilities

### `/src/i18n`

**request.ts** - Internationalization request configuration

### Other

- **config.ts** - Locale and routing configuration
- **middleware.ts** - Locale detection and routing
- **navigation.ts** - Typed navigation helpers from next-intl

## Data Flow

1. Server Components fetch data via `getClient()` from Apollo
2. GraphQL queries hit Hygraph CMS API
3. Data passed to page/section components as props
4. Client Components handle interactivity (filters, theme toggle, etc)

## Routing

- Locale prefix always present: `/en/*`, `/pl/*`
- Middleware detects locale from URL or browser settings
- `next-intl` provides translations via `useTranslations()` (client) or `getTranslations()` (server)

## Styling

- Tailwind utility classes throughout
- Custom theme colors: `dark`, `darker`, `highlight`, `bright`
- Dark mode via class-based toggling (`dark:` prefix)
- Responsive: mobile-first with `sm:` breakpoint

## Image Handling

- Next.js `Image` component with Hygraph CDN
- `remotePatterns` configured in `next.config.mjs` for media.graphassets.com
- Sharp for automatic image optimization and WebP conversion
- Lazy loading with blur placeholders

## Key Features

- **Bilingual Support**: English/Polish with route-based locale switching (`/en/*`, `/pl/*`)
- **Theme Management**: Dark/light mode toggle with system preference detection via next-themes
- **Masonry Layout**: Responsive grid layout for artwork gallery using react-responsive-masonry
- **Image Carousel**: Full-screen image viewer with navigation (react-slideshow-image)
- **Advanced Filtering**: Category, technique, and year filters with localStorage persistence
- **Cookie Consent**: GDPR-compliant banner with localStorage tracking
- **Analytics**: Google Analytics 4 integration with Suspense boundary
- **SEO Optimized**: Next.js metadata API with locale-specific meta tags
- **Type Safety**: Full TypeScript coverage with strict mode
- **Performance**: Server Components by default, minimal client-side JavaScript
