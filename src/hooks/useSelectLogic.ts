import { useState, useRef, useEffect } from "react";

const useSelectLogic = (
  setSelectedOption: React.Dispatch<React.SetStateAction<string | number>>
) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string | number) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const cleanFilter = (defaultValue: string) => {
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

  return {
    handleDropdown,
    handleOptionClick,
    cleanFilter,
    dropdownRef,
    isOpen,
  };
};

export default useSelectLogic;
