"use client";
import clsx from "clsx";

import useLangLogic from "../hooks/useLangLogic";

import { ENIcon, PLIcon } from "./icons";

const LangSwitch = () => {
  const { mounted, handleSwitch, locale } = useLangLogic();

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-row gap-2 justify-center">
      <ENIcon />
      <div
        onClick={handleSwitch}
        className="relative rounded-ten w-10 h-5 bg-dark dark:bg-bright"
      >
        <div
          className={clsx(
            "absolute rounded-ten w-3 h-3 transition ease-in-out dark:bg-dark inset-1 bg-bright ",
            { "translate-x-5": locale === "pl" || "" },
            { "": locale === "en" }
          )}
        ></div>
      </div>
      <PLIcon />
    </div>
  );
};

export default LangSwitch;
