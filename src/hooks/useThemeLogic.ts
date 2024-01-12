import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const useThemeLogic = () => {
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

  return {
    handleSwitch,
    mounted,
    theme,
  };
};

export default useThemeLogic;
