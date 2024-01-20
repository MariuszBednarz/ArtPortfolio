"use client";

import Link from "next/link";
import { getLocalStorage, setLocalStorage } from "@/src/utils/storageHelper";
import { useState, useEffect } from "react";

import { useTranslations } from "next-intl";
import NavLink from "./layout/Nav/NavLink";

import Button from "./Button";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  const t = useTranslations("Nav");

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);

    //For Testing
    console.log("Cookie Consent: ", cookieConsent);
  }, [cookieConsent]);
  return (
    <div
      className={`my-10 mx-auto max-w-max md:max-w-screen-sm ${
        cookieConsent != null ? "hidden" : "flex"
      } 
                        fixed bottom-0 left-0 right-0 
                        flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                         bg-bright dark:bg-dark rounded-lg shadow `}
    >
      <div className="text-center text-dark dark:text-bright">
        {t("info")}
        <NavLink href={"/policy"}>
          <span className="text-highlight">{t("policy")}</span>
        </NavLink>
      </div>

      <div className="flex gap-2">
        <Button
          outlined
          onClick={() => setCookieConsent(false)}
          text={t("decline")}
        ></Button>
        <Button
          outlined
          onClick={() => setCookieConsent(true)}
          text={t("allow")}
        ></Button>
      </div>
    </div>
  );
}
