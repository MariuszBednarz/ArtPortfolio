"use client";
import Image from "next/image";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { Tenor_Sans } from "next/font/google";

import Divider from "@/src/components/Divider";
import ContentWrapper from "@/src/components/ContentWrapper";
import portrait from "@/public/Bednarz-Wieslaw.jpg";
import Award from "@/src/components/Award";

import useBioLogic from "@/src/hooks/useBioLogic";
import { Loading } from "@/src/components";

const crimson = Tenor_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Bio = () => {
  const t = useTranslations("Bio");

  const { bio, loading } = useBioLogic();

  const data = {
    title: t("bioTitle"),
    description: t("bioDescription"),
  };

  console.log(bio, loading);

  return (
    <>
      <ContentWrapper>
        <div className="flex flex-col-reverse md:flex-row">
          <div className={clsx("w-full md:w-1/2 p-8", crimson.className)}>
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
        {/* {loading ? "loading" : JSON.stringify(bio.expos[0].expo)} */}
        <Award data={data} lastItem />
        {loading ? (
          <Loading />
        ) : (
          <Award data={{ title: "Wystawy", description: bio.expos }} lastItem />
        )}
      </div>
    </>
  );
};

export default Bio;
