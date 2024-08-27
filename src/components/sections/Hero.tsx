import { Button, NavLink } from "@/components/reusable";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Index");
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full flex flex-col items-center gap-banner px-8">
      <h1 className="text-3xl mb-3">Wiesław F. Bednarz – Portfolio</h1>
      <div className="flex flex-col gap-4 sm:flex-row">
        <NavLink href="/bio">
          <Button type="filled" text={t("bio")} />
        </NavLink>
        <NavLink href="/art">
          <Button text={t("art")} type="outlined" themeDisabled />
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;
