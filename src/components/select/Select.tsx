import React, { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";

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

  const t = useTranslations("Select");
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
    <div className="relative w-full max-w-xs mx-auto" ref={dropdownRef}>
      <button
        className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        onClick={toggleDropdown}
      >
        {selectedOption}
      </button>
      {isOpen && (
        <div className="absolute bg-white border border-gray-400 rounded shadow mt-1 w-full z-10 max-h-80 overflow-auto">
          <div
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => cleanFilter(defaultValue)}
          >
            {t("clean")}
          </div>
          {options.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
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
