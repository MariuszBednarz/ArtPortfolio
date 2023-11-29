import clsx from "clsx";
import { useState } from "react";
import ThemeSwitch from "../../ThemeSwitch";
import LangSwitch from "../../LangSwitch";
import NavLinks from "./NavLinks";
import Burger from "./Burger";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex w-screen justify-center bg-bright dark:bg-dark px-4 md:px-8 shadow-md">
      <nav className="flex w-full max-w-page flex-row justify-between h-20 items-center">
        <div className="hidden md:block">
          <NavLinks />
        </div>
        <div className="block md:hidden">
          <Burger isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
        <div className="flex gap-4 flex-col justify-center md:flex-row">
          <LangSwitch />
          <ThemeSwitch />
        </div>
        <div
          className={clsx(
            "bg-white dark:bg-dark shadow-md absolute mt-20 px-4 py-8 w-screen top-0 left-0 block md:hidden transform transition duration-300 ease-in-out",
            {
              "": isOpen,
              "opacity-0 -translate-x-full": !isOpen,
            }
          )}
        >
          <NavLinks mobile />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
