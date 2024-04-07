"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useTranslations } from "next-intl";

import { ContentWrapper, Button } from "@/src/components";

import useDataLogic from "@/src/hooks/useDataLogic";

//TODO:

//font opacity (desc)
//button borders soften

export type ArtParams = {
  locale: string;
  id: string;
};

const Art = ({ params }: { params: ArtParams }) => {
  const { art } = useDataLogic(false, params);
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
        <h1 className="text-2xl my-8">{art && art?.art.artTitle}</h1>
        {art && (
          <div
            className="text-lg"
            dangerouslySetInnerHTML={{
              __html: art.art.artDescription.html,
            }}
          ></div>
        )}
      </div>
      {art && (
        <div className="flex items-start justify-center flex-col md:flex-row">
          <Image
            src={art?.art.artImage.url}
            width={art?.art.artImage.width}
            height={art?.art.artImage.height}
            alt=""
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-full max-h-page object-contain"
          />
        </div>
      )}
    </ContentWrapper>
  );
};

export default Art;
