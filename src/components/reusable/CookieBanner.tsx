"use client";

import { getLocalStorage, setLocalStorage } from "@/utils/localStorageHelper";
import { useState, useEffect } from "react";

import { useTranslations } from "next-intl";
import { NavLink } from "@/components/reusable";

import Button from "./Button";

const CookieBanner = (): JSX.Element | null => {
  const [cookieConsent, setCookieConsent] = useState<null | boolean>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const t = useTranslations("Nav");

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);
    setCookieConsent(storedCookieConsent);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (cookieConsent !== null) {
      setLocalStorage("cookie_consent", cookieConsent);
    }
    const newValue = cookieConsent ? "granted" : "denied";
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: newValue,
      });
    }
  }, [cookieConsent]);

  if (isLoading || cookieConsent !== null) {
    return null;
  }

  return (
    <div
      className={`my-10 mx-auto max-w-max md:max-w-screen-sm fixed bottom-0 left-0 right-0 flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4 rounded-lg bg-bright dark:bg-dark border border-dark dark:border-bright shadow-2xl`}
    >
      <div className="text-center text-dark dark:text-bright">
        {t("info")}
        <NavLink href={"/policy"}>
          <span className="text-highlight">{t("policy")}</span>
        </NavLink>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row">
        <Button
          type="outlined"
          onClick={() => setCookieConsent(false)}
          text={t("decline")}
        />
        <Button
          type="cookie"
          onClick={() => setCookieConsent(true)}
          text={t("allow")}
        />
      </div>
    </div>
  );
};

export default CookieBanner;
