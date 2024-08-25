"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { ContentWrapper, Divider, Award } from "@/components/reusable";

import { BioProps } from "@/types/components";

import portrait from "../../../public/Bednarz-Wieslaw.jpg";

const Bio = ({ bio }: BioProps): JSX.Element => {
  const t = useTranslations("Bio");
  const data = {
    title: t("bioTitle"),
    description: t("bioDescription"),
  };
  return (
    <>
      <ContentWrapper>
        <div className="flex flex-col-reverse md:flex-row">
          <div className={"w-full md:w-1/2 p-8"}>
            <h1 className="text-3xl">Wiesław Bednarz</h1>
            <Divider />
            <p>1958 - 2022</p>
            <p>{t("profession")}</p>
          </div>
          <div className="w-full md:w-1/2">
            <Image src={portrait} alt="portret" />
          </div>
        </div>
      </ContentWrapper>
      <div className="py-8 bg-bright dark:bg-dark">
        <Award data={data} lastItem />
        <Award data={{ title: t("exhibitions"), description: bio }} />
      </div>
    </>
  );
};

export default Bio;
