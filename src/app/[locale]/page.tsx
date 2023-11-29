import clsx from "clsx";
import { useTranslations } from "next-intl";
import { Crimson_Text } from "next/font/google";
import Image from "next/image";

import brush from "@/public/brush.png";
import Button from "@/src/components/Button";
import NavLink from "@/src/components/layout/Nav/NavLink";

const crimson = Crimson_Text({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const t = useTranslations("Index");

  return (
    <div
      className={clsx(
        "w-full relative h-[300px] flex justify-center",
        crimson.className
      )}
    >
      <div className="brightness-50">
        <div className="relative h-[300px] w-screen">
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
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-screen flex flex-col items-center gap-[10px]">
        <h1 className="text-3xl">Wiesław F. Bednarz</h1>
        <div className="w-[434px] h-1 bg-bright rounded-[2px]"></div>
        <p>Portfolio</p>
        <div className="flex gap-3">
          <NavLink href="/bio">
            <Button text="Biogram" />
          </NavLink>
          <NavLink href="/art">
            <Button text="Zbiory" outlined themeDisabled />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
