"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useTranslations } from "next-intl";

import { ContentWrapper, Button } from "@/src/components";

import useDataLogic from "@/src/hooks/useDataLogic";

//DONE:
//1. Move art/id to features - DONE
//2. Closing mobile nav on redirect - DONE
//4. Add no results - DONE
//5. Add Loading - DONE
//6. SEO - DONE
//8. Filter styles & responsivity - DONE
//11. fetch logic moved to hooks - DONE
// "any" types fix - DONE
// mobile page-width (scrollbar bug) - DONE
// Small components logic - move to custom hooks - DONE
// Analytics - DONE
// Cookie Policy subpage - DONE
// Add art/id page design

//TODO:
// Analitics - button design
// Favicon

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
          " top-[152px] md:top-[80px] transition-all absolute opacity-70 w-full min-h-auto sm:min-h-[calc(100vh-160px)] md:min-h-[calc(100vh-88px)] md:w-[30%] min-w-[200px] p-4 pl-8 dark:bg-darker bg-bright",
          { "left-0": open },
          { "left-[-100%] ": !open }
        )}
      >
        <h1 className="text-xxl my-4">{art && art?.art.artTitle}</h1>
        {art && (
          <div
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
            className="w-full h-full max-h-[calc(100vh-160px)] object-contain"
          />
        </div>
      )}
    </ContentWrapper>
  );
};

export default Art;
