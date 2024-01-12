"use client";
import React, { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { clsx } from "clsx";

import useSelectLogic from "../hooks/useSelectLogic";

import { Chevron } from "./icons";

const Select = ({
  options,
  selectedOption,
  setSelectedOption,
  defaultValue,
  fixed,
}: {
  options: string[] | number[];
  selectedOption: string | number;
  setSelectedOption: React.Dispatch<React.SetStateAction<string | number>>;
  defaultValue: string;
  fixed?: boolean;
}) => {
  const t = useTranslations("Art");

  const {
    dropdownRef,
    isOpen,
    handleDropdown,
    cleanFilter,
    handleOptionClick,
  } = useSelectLogic(setSelectedOption);

  return (
    <div
      className={clsx(
        "relative  h-8 md:h-10 text-xs md:text-base",
        { "md:w-52": fixed },
        { "w-full": !fixed }
      )}
      ref={dropdownRef}
    >
      <button
        className={clsx(
          "flex items-center justify-between px-4 w-full h-full rounded",
          {
            "text-highlight border-highlight dark:border-highlight border-2":
              selectedOption !== defaultValue,
          },
          {
            "border border-dark dark:border-white":
              selectedOption === defaultValue,
          }
        )}
        onClick={handleDropdown}
      >
        {typeof selectedOption === "number"
          ? selectedOption
          : t(selectedOption)}
        <Chevron rotate={isOpen} selected={selectedOption !== defaultValue} />
      </button>
      {isOpen && (
        <div className="absolute shadow z-10 w-full max-h-80 overflow-auto bg-white dark:bg-darker border border-dark dark:border-white rounded">
          <div
            className="px-4 py-2 dark:hover:bg-dark hover:bg-bright cursor-pointer"
            onClick={() => cleanFilter(defaultValue)}
          >
            {t("clean")}
          </div>
          {options.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 dark:hover:bg-dark hover:bg-bright cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {typeof option === "number" ? option : t(option)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
