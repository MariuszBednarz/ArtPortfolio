import { Pathnames, LocalePrefix } from "next-intl/routing";

export const defaultLocale = "en" as const;
export const locales = ["en", "pl"] as const;

export const pathnames: Pathnames<typeof locales> = {
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
};

export const localePrefix: LocalePrefix<typeof locales> = "always";

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;
