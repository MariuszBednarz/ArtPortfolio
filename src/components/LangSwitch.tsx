"use-client";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
// import { useLocale } from "next-intl";
// import useProperPath from "./useProperPath";

const LangSwitch = () => {
  const [mounted, setMounted] = useState(false);

  //   const locale = useLocale();
  const pathname = usePathname();
  //   const { handleSwitch } = useProperPath();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-row gap-2">
      EN
      <div
        // onClick={() => handleSwitch(pathname)}
        className="relative rounded-ten w-10 h-5 bg-dark dark:bg-bright"
      >
        <div
        //   className={clsx(
        //     "absolute rounded-ten w-3 h-3 transition ease-in-out bg-bright inset-1 dark:bg-dark",
        //     { "translate-x-5": locale === "pl" || "" },
        //     { "": locale === "en" }
        //   )}
        ></div>
      </div>
      PL
    </div>
  );
};

export default LangSwitch;
