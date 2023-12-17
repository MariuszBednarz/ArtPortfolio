"use client";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { MoonIcon, SunIcon } from "./icons";

const Switch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleSwitch = (theme: string | undefined) => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-row gap-2 justify-center">
      <MoonIcon />
      <div
        onClick={() => handleSwitch(theme)}
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

export default Switch;
