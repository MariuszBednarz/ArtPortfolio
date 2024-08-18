"use client";

import clsx from "clsx";
import React from "react";
import { useLocale } from "next-intl";

import { usePathname, useRouter } from "../../navigation";

import { ENIcon, PLIcon } from "./icons";

export default function LangSwitch() {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const changeLanguage = () => {
    if (locale === "pl") router.replace(pathname, { locale: "en" });
    if (locale === "en") router.replace(pathname, { locale: "pl" });
  };

  return (
    <div className="flex flex-row gap-2 justify-center">
      <ENIcon />
      <div
        onClick={() => changeLanguage()}
        className="relative rounded-ten w-10 h-5 bg-dark dark:bg-bright"
      >
        <div
          className={clsx(
            "absolute rounded-ten w-3 h-3 transition ease-in-out dark:bg-dark inset-1 bg-bright ",
            { "translate-x-5": locale === "pl" || "" },
            { "": locale === "en" }
          )}
        ></div>
      </div>
      <PLIcon />
    </div>
  );
}
