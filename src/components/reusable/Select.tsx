"use client";
import React, { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { clsx } from "clsx";

import { Chevron } from "./icons";

import { SelectProps, FilterState } from "@/types/components";

const Select = ({
  variant,
  options,
  selectedOption,
  setSelectedOption,
  defaultValue,
  defaultText,
  fixed,
}: SelectProps): JSX.Element => {
  const t = useTranslations("Arts");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: FilterState) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClearFilter = (defaultValue: null | undefined) => {
    setSelectedOption(defaultValue);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (event.target instanceof Node) {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
        ) {
          setIsOpen(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

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
        {variant === "colSelect"
          ? selectedOption === null
            ? defaultText
            : t(selectedOption)
          : selectedOption === undefined
          ? defaultText
          : selectedOption === null
          ? t("noYear")
          : selectedOption}
        <Chevron rotate={isOpen} selected={selectedOption !== defaultValue} />
      </button>
      {isOpen && (
        <div className="absolute shadow z-10 w-full max-h-80 overflow-auto bg-white dark:bg-darker border border-dark dark:border-white rounded">
          <div
            className="px-4 py-2 dark:hover:bg-dark hover:bg-bright cursor-pointer"
            onClick={() => handleClearFilter(defaultValue)}
          >
            {t("clean")}
          </div>
          {options?.map((option) => {
            return (
              <div
                className="px-4 py-2 dark:hover:bg-dark hover:bg-bright cursor-pointer"
                key={option}
                onClick={() => handleOptionClick(option)}
              >
                {option === null
                  ? t("noYear")
                  : typeof option === "number"
                  ? option
                  : t(option)}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Select;
