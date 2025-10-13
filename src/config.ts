import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "pl"],
  defaultLocale: "en",
  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/bio": {
      en: "/bio",
      pl: "/bio",
    },
    "/art": {
      en: "/art",
      pl: "/art",
    },
    "/art/": {
      en: "/art/",
      pl: "/art/",
    },
    "/policy": {
      en: "/policy",
      pl: "/policy",
    },
  },
});

// Re-export for backward compatibility
export const defaultLocale = routing.defaultLocale;
export const locales = routing.locales;
export const pathnames = routing.pathnames;
export const localePrefix = routing.localePrefix;

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;
