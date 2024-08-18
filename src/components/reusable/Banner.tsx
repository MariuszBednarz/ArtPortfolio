import clsx from "clsx";
import Image from "next/image";
import NavLink from "./NavLink";
import brush from "../../../public/brush.png";

export default function Banner() {
  return (
    <div className="w-full relative h-banner flex justify-center flex-col">
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
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full flex flex-col items-center gap-banner px-8">
        <h1 className="text-3xl mb-3">Wiesław F. Bednarz – Portfolio</h1>
        <div className="flex flex-col gap-4 sm:flex-row">
          {/* <NavLink href="/bio">
          <Button type="filled" text={t("bio")} />
        </NavLink>
        <NavLink href="/art">
          <Button text={t("art")} type="outlined" themeDisabled />
        </NavLink> */}
        </div>
      </div>
    </div>
  );
}
