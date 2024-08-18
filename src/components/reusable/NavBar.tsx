"use client";
import { useState } from "react";
import clsx from "clsx";

import NavLinks from "./NavLinks";
import LangSwitch from "./LangSwitch";
import ThemeSwitch from "./ThemeSwitch";
import Burger from "./Burger";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex w-full justify-center bg-bright dark:bg-dark">
      <nav className="flex w-full max-w-page flex-row justify-between h-20 items-center px-8 relative">
        <div className="hidden md:block">
          <NavLinks />
        </div>
        <div className="block md:hidden">
          <Burger toggleMenu={toggleMenu} isOpen={isOpen} />
        </div>
        <div className="flex gap-4 md:gap-8 flex-col justify-center md:flex-row">
          <LangSwitch />
          <ThemeSwitch />
        </div>
        <div
          className={clsx(
            "bg-white dark:bg-dark shadow-md absolute mt-20 px-4 py-8 w-full top-0 left-0 block md:hidden transform transition duration-300 ease-in-out z-20",
            {
              "": isOpen,
              "opacity-0 -translate-x-full": !isOpen,
            }
          )}
        >
          <NavLinks mobile toggleMenu={toggleMenu} />
        </div>
      </nav>
    </header>
  );
}
