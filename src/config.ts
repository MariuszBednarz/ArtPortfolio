import { Pathnames } from "next-intl/navigation";

export const locales = ["en", "pl"] as const;

type pathnamesTypes = {
  "/": string;
  "/bio": {
    en: "/bio";
    pl: "/bio";
  };
  "/art": {
    en: "/art";
    pl: "/art";
  };
  "/art/": {
    en: "/art/" | string;
    pl: "/art/" | string;
  };
};
//types to fix

export const pathnames = {
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
} satisfies Pathnames<typeof locales>;

export type AppPathnames = keyof typeof pathnames;
