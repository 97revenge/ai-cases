"use client";

import { useTheme } from "next-themes";
import { SwitchButton } from "./switch-button";
import { useState, useEffect } from "react";

export const SwitchTheme = () => {
  const { theme, setTheme } = useTheme();
  const [isLightMode, setIsLightMode] = useState(theme === "light");

  useEffect(() => {
    setTheme(isLightMode ? "light" : "dark");
  }, [isLightMode, setTheme]);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div className=" h-full flex items-center  p-4 bg-opacity-50 ">
      <div className="p-4 ">
        <button onClick={() => setTheme("light")}>🕯️</button>
        <button onClick={() => setTheme("dark")}>🌑</button>
      </div>
    </div>
  );
};
