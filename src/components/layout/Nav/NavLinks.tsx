import clsx from "clsx";
import { useTranslations } from "next-intl";

import NavLink from "./NavLink";

const NavLinks = ({
  mobile,
  toggleMenu,
}: {
  mobile?: boolean | undefined;
  toggleMenu?: () => void;
}) => {
  const t = useTranslations("Nav");

  return (
    <ul
      className={clsx(
        "flex flex-row center gap-8 items-start dark:text-bright text-dark",
        { "flex-col": mobile === true }
      )}
    >
      <li className="text-lg" onClick={toggleMenu}>
        <NavLink href="/">{t("home")}</NavLink>
      </li>
      <li className="text-lg" onClick={toggleMenu}>
        <NavLink href="/art">{t("art")}</NavLink>
      </li>
      <li className="text-lg" onClick={toggleMenu}>
        <NavLink href="/bio">{t("bio")}</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
