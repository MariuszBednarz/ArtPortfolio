"use client";
import clsx from "clsx";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { ContentWrapper, Button, CustomImage } from "@/components/reusable";

import { ArtProps } from "@/types/components";

const Art = ({ data }: ArtProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  const t = useTranslations("Details");

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <ContentWrapper>
      <div className="relative z-10 flex justify-center w-full px-8 py-4 ">
        <Button
          type="outlined"
          fill
          onClick={handleOpen}
          text={open ? t("hide") : t("reveal")}
        />
      </div>
      <div
        className={clsx(
          " top-sidebar md:top-20 transition-all absolute opacity-80 w-full min-h-auto sm:min-h-page md:min-h-sidebar md:w-third min-w-sidebar px-8 py-4 dark:bg-darker bg-bright",
          { "left-0": open },
          { "left-[-100%]": !open }
        )}
      >
        <h1 className="text-2xl my-8">{data && data?.artTitle}</h1>
        {data && <div className="text-lg">{data.artDescription.text}</div>}
      </div>
      <div className="flex justify-center flex-col ">
        <CustomImage
          src={data.artImage.url}
          alt={data.artTitle}
          width={data.artImage.width}
          height={data.artImage.height}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-full max-h-page object-contain"
        />
      </div>
    </ContentWrapper>
  );
};

export default Art;
