import clsx from "clsx";
import { useTranslations } from "next-intl";

import NavigationLink from "./NavLink";

export default function NavLinks({
  mobile,
  toggleMenu,
}: {
  mobile?: boolean | undefined;
  toggleMenu?: () => void;
}) {
  const t = useTranslations("Nav");

  return (
    <ul
      className={clsx(
        "flex flex-row center gap-8 items-start dark:text-bright text-dark",
        { "flex-col": mobile === true }
      )}
    >
      <li className="text-lg" onClick={toggleMenu}>
        <NavigationLink href="/">{t("home")}</NavigationLink>
      </li>
      <li className="text-lg" onClick={toggleMenu}>
        <NavigationLink href="/art">{t("art")}</NavigationLink>
      </li>
      <li className="text-lg" onClick={toggleMenu}>
        <NavigationLink href="/bio">{t("bio")}</NavigationLink>
      </li>
    </ul>
  );
}
