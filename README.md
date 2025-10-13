# Artist Portfolio

Modern, bilingual art portfolio showcasing paintings, sculptures, and performance art with a headless CMS.

## Tech Stack

- **Next.js 15.5** (App Router) + **React 19**
- **TypeScript** (strict mode)
- **Tailwind CSS 4** + **next-themes** (dark/light mode)
- **Apollo Client** + **GraphQL** (Hygraph CMS)
- **next-intl** (i18n: English/Polish)

## Features

✨ Bilingual interface (EN/PL) with route-based switching  
🎨 Masonry grid layout for artwork gallery  
🖼️ Image carousel for artwork details  
🌓 Dark/light theme toggle with system preference detection  
🔍 Category and year filtering for artworks  
📱 Fully responsive design  
🍪 Cookie consent banner with localStorage persistence  
📊 Google Analytics integration  
🎯 SEO optimized with Next.js metadata

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- Hygraph account (for CMS)

### Installation

```powershell
# Clone the repository
git clone <repo-url>
cd art_portfolio

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env.local
# Add your Hygraph endpoint and Google Analytics ID
```

### Environment Variables

Create `.env.local` with:

```env
NEXT_PUBLIC_ENDPOINT=https://your-hygraph-endpoint.com
NEXT_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Development

```powershell
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
src/
├── app/[locale]/         # Internationalized routes (en/pl)
│   ├── page.tsx         # Homepage
│   ├── art/             # Gallery & artwork details
│   ├── bio/             # Artist biography
│   ├── policy/          # Privacy policy
│   └── layout.tsx       # Root layout
├── components/
│   ├── pages/           # Page-level components
│   ├── reusable/        # Shared UI components
│   └── sections/        # Layout sections (NavBar, Footer, etc)
├── lib/
│   └── apollo-client.ts # GraphQL client setup
├── types/               # TypeScript definitions
├── utils/               # Helper functions
├── i18n/                # Internationalization setup
├── config.ts            # Locale configuration
├── middleware.ts        # Locale routing
└── navigation.ts        # Typed navigation helpers

messages/                # Translation files
├── en.json
└── pl.json

docs/                    # Documentation
├── ARCHITECTURE.md      # System architecture
└── DEVELOPMENT.md       # Development guide
```

## Documentation

- **[ARCHITECTURE.md](docs/ARCHITECTURE.md)** - Tech stack, data flow, and system design
- **[DEVELOPMENT.md](docs/DEVELOPMENT.md)** - Setup, workflow, and common issues
- **[DEPLOYMENT.md](docs/DEPLOYMENT.md)** - Deployment checklist and procedures
- **[TECHNICAL_DEBT.md](docs/TECHNICAL_DEBT.md)** - Known optimizations for future work

## Deployment

Optimized for **Vercel**:

1. Push to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy automatically on push

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ features
- CSS Grid & Flexbox

## License

Private project

## Credits

Built with [Next.js](https://nextjs.org/) by Vercel
