"use-client";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { useLocale } from "next-intl";

import { useRouter, usePathname } from "../navigation";
import { ENIcon, PLIcon } from "./icons";

const LangSwitch = () => {
  const [mounted, setMounted] = useState(false);

  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleSwitch = () => {
    if (locale === "pl") router.replace(pathname, { locale: "en" });
    if (locale === "en") router.replace(pathname, { locale: "pl" });
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-row gap-2 justify-center">
      <ENIcon />
      <div
        onClick={handleSwitch}
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
};

export default LangSwitch;
