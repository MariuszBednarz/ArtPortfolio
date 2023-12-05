import clsx from "clsx";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Crimson_Text } from "next/font/google";

import brush from "@/public/brush.png";
import Button from "@/src/components/Button";
import NavLink from "@/src/components/layout/Nav/NavLink";

const crimson = Crimson_Text({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Banner = () => {
  const t = useTranslations("Index");

  return (
    <div
      className={clsx(
        "w-full relative h-banner flex justify-center flex-col",
        crimson.className
      )}
    >
      <div className="brightness-50">
        <div className="relative h-banner w-full">
          <Image
            src={brush}
            alt=""
            fetchPriority="high"
            sizes="100%"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full flex flex-col items-center gap-[10px] px-8">
        <h1 className="text-3xl">Wiesław F. Bednarz</h1>
        <div className="w-full max-w-[434px] h-1 bg-bright rounded-[2px]"></div>
        <p>Portfolio</p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <NavLink href="/bio">
            <Button text={t("bio")} />
          </NavLink>
          <NavLink href="/art">
            <Button text={t("art")} outlined themeDisabled />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
