"use client";

import clsx from "clsx";
import { useTheme } from "next-themes";

import { MoonIcon, SunIcon } from "./icons";

const ThemeSwitch = (): JSX.Element => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    }
  };
  return (
    <div className="flex flex-row gap-2 justify-center">
      <MoonIcon />
      <div
        onClick={handleTheme}
        className="relative rounded-ten w-10 h-5 bg-dark dark:bg-bright"
      >
        <div
          className={clsx(
            "absolute rounded-ten w-3 h-3 transition translate-x-5 ease-in-out bg-bright inset-1 dark:bg-dark dark:translate-x-0"
          )}
        ></div>
      </div>
      <SunIcon />
    </div>
  );
};

export default ThemeSwitch;
