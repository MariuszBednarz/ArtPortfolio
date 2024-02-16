import NoResultIcon from "./icons/NoResultIcon";

import { useTranslations } from "next-intl";

const NoResult = () => {
  const t = useTranslations("Art");
  return (
    <div className="flex justify-center w-full my-8 px-4">
      <div className="flex justify-center items-center flex-col rounded-lg bg-bright dark:bg-dark p-4 w-full min-w-noResult max-w-noResult">
        <NoResultIcon />
        <h1 className="py-4 text-xl">{t("noResults")}</h1>
        <p className="text-center">{t("noResultsExtended")}</p>
      </div>
    </div>
  );
};

export default NoResult;
