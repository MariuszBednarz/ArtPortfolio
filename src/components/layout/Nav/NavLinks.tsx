import clsx from "clsx";
import NavLink from "./NavLink";
import { useTranslations } from "next-intl";

const NavLinks = ({ mobile }: { mobile?: boolean | undefined }) => {
  const t = useTranslations("Nav");

  return (
    <ul
      className={clsx(
        "flex flex-row center gap-8 items-start dark:text-bright text-dark",
        { "flex-col": mobile === true }
      )}
    >
      <li className="text-lg">
        <NavLink href="/">{t("home")}</NavLink>
      </li>
      <li className="text-lg">
        <NavLink href="/art">{t("art")}</NavLink>
      </li>
      <li className="text-lg">
        <NavLink href="/bio">{t("bio")}</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
