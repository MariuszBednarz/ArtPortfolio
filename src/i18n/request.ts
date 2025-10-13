import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "../config";

export default getRequestConfig(async ({ requestLocale }) => {
  // Validate that the incoming `locale` parameter is valid
  let locale = await requestLocale;

  if (!locale || !locales.includes(locale as any)) notFound();

  return {
    locale,
    messages: (
      await (locale === "en"
        ? import("../../messages/en.json")
        : import(`../../messages/${locale}.json`))
    ).default,
  };
});
