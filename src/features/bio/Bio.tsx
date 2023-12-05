import Image from "next/image";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { Crimson_Text } from "next/font/google";

import Divider from "@/src/components/Divider";
import ContentWrapper from "@/src/components/ContentWrapper";
import placeholder from "@/public/placeholder.jpg";
import Award from "./Award";

const crimson = Crimson_Text({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Bio = () => {
  const t = useTranslations("Bio");

  const content = [
    {
      nr: 1,
      title: t("awardTitle"),
      description: t("awardDescription"),
    },
    {
      nr: 2,
      title: t("awardTitle"),
      description: t("awardDescription"),
    },
    {
      nr: 3,
      title: t("awardTitle"),
      description: t("awardDescription"),
    },
  ];
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
            <Image src={placeholder} alt="portret" />
          </div>
        </div>
      </ContentWrapper>
      <div className="py-8 bg-bright dark:bg-dark">
        {content.map((item) => {
          return <Award key={item.nr} data={item} />;
        })}
      </div>
    </>
  );
};

export default Bio;
