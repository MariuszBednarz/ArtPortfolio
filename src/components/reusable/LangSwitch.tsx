"use client";

import React from "react";
import { usePathname, useRouter } from "../../navigation";
import { useLocale } from "next-intl";

const LangSwitch: React.FC = ({ params }: any) => {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const changeLanguage = (newLocale: string) => {
    if (locale === "pl") router.replace(pathname, { locale: "en" });
    if (locale === "en") router.replace(pathname, { locale: "pl" });
  };

  return (
    <div>
      <button onClick={() => changeLanguage("pl")} disabled={locale === "pl"}>
        PL
      </button>
      <button onClick={() => changeLanguage("en")} disabled={locale === "en"}>
        EN
      </button>
    </div>
  );
};

export default LangSwitch;
