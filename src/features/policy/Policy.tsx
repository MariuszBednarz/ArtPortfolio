"use client";

import clsx from "clsx";
import { useTranslations } from "use-intl";
import { Crimson_Text } from "next/font/google";

import ContentWrapper from "@/src/components/ContentWrapper";
import Award from "@/src/components/Award";

import { ANALYTICS, OPT_OUT } from "@/src/utils/constants";

const crimson = Crimson_Text({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Policy = () => {
  const t = useTranslations("Policy");

  const translatedData = [
    {
      nr: 1,
      title: t("cookie"),
      description: t("cookieDescription"),
    },
    {
      nr: 2,
      title: t("usage"),
      description: t("usageDescription"),
    },
    {
      nr: 3,
      title: t("consent"),
      description: t("consentDescription"),
    },
    {
      nr: 4,
      title: t("tools"),
      description: t("toolsDescription"),
    },
  ];

  return (
    <ContentWrapper>
      <div className="w-full flex flex-col items-center py-8">
        {translatedData.map((item, index) => (
          <Award data={item} lastItem={index !== translatedData.length - 1} />
        ))}
        <ul
          className={clsx(
            "pl-16 pr-8 w-full max-w-award list-disc",
            crimson.className
          )}
        >
          <li className="break-words">
            {t("more")}
            <a className="text-highlight underline " href={ANALYTICS}>
              {ANALYTICS}
            </a>
          </li>
          <li className="break-words">
            {t("optout")}

            <a className="text-highlight underline" href={OPT_OUT}>
              {OPT_OUT}
            </a>
          </li>
        </ul>
      </div>
    </ContentWrapper>
  );
};

export default Policy;
