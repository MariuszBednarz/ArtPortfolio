import React, { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { clsx } from "clsx";

import { Chevron } from "./icons";

const Select = ({
  options,
  selectedOption,
  setSelectedOption,
  defaultValue,
}: {
  options: any;
  selectedOption: any;
  setSelectedOption: any;
  defaultValue: any;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslations("Art");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const cleanFilter = (defaultValue) => {
    setSelectedOption(defaultValue);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div
      className="relative w-32 md:w-40 h-8 md:h-10 text-xs md:text-base"
      ref={dropdownRef}
    >
      <button
        className={clsx(
          "flex items-center justify-between px-4 w-full border border-dark dark:border-white h-full rounded",
          {
            "text-highlight border-highlight border-2":
              selectedOption !== defaultValue,
          }
        )}
        onClick={toggleDropdown}
      >
        {typeof selectedOption === "number"
          ? selectedOption
          : t(selectedOption)}
        <Chevron rotate={isOpen} selected={selectedOption !== defaultValue} />
      </button>
      {isOpen && (
        <div className="absolute shadow z-10 w-full max-h-80 overflow-auto bg-white dark:bg-darker border border-dark dark:border-white rounded-[4px]">
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
