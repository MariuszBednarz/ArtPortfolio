import { useTranslations } from "next-intl";
import NavLink from "./Nav/NavLink";

const Footer = () => {
  const t = useTranslations("Nav");

  return (
    <footer className="flex w-full justify-center bg-bright dark:bg-dark shadow-md">
      <div className="flex w-full max-w-page flex-row justify-center sm:justify-end h-48 sm:h-20 items-center px-8">
        <ul className="flex gap-8 flex-col items-center sm:items-start sm:flex-row">
          <li>
            <a
              href={"https://www.linkedin.com/in/mariusz-bednarz-89a092123/"}
              target="_blank"
            >
              &copy; 2023 Mariusz Bednarz
            </a>
          </li>
          <li>
            <a href="mailto:mmbednarz90@gmail.com">{t("contact")}</a>
          </li>
          <li>
            <NavLink href={"/"}>{t("policy")}</NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
