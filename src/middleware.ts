import createMiddleware from "next-intl/middleware";
import { pathnames, locales } from "./config";

export default createMiddleware({
  defaultLocale: "pl",
  locales,
  pathnames,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(pl|en)/:path*"],
};
