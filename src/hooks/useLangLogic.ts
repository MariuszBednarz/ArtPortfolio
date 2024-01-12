import { useEffect, useState } from "react";
import { useLocale } from "next-intl";

import { useRouter, usePathname } from "@/src/navigation";

const useLangLogic = () => {
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

  return { handleSwitch, mounted, locale };
};

export default useLangLogic;
