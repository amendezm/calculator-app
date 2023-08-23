"use client";

import classNames from "classnames";

import { useThemeContext } from "theme";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useThemeContext();

  const handleDefaultTheme = () => {
    setTheme(undefined);
  };

  const handleLightTheme = () => {
    setTheme("light-theme");
  };

  const handleNeonTheme = () => {
    setTheme("neon-theme");
  };

  return (
    <div className="flex flex-col items-end">
      <div className="w-16 text-skin-switcher flex justify-around text-xs sm:text-sm mb-1 px-1">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
      <div className="flex items-center">
        <span className="uppercase text-skin-switcher mr-6 text-xs tracking-widest mt-1">
          theme
        </span>
        <div className="relative flex bg-skin-keypad w-16 h-6 rounded-2xl cursor-pointer">
          <div
            className="grow h-6 bg-skin-keypad rounded-l-2xl"
            role="button"
            onClick={handleDefaultTheme}
          />
          <div
            className="grow h-6 bg-skin-keypad"
            role="button"
            onClick={handleLightTheme}
          />
          <div
            className="grow h-6 bg-skin-keypad rounded-r-2xl"
            role="button"
            onClick={handleNeonTheme}
          />
          <span
            className={classNames(
              "absolute w-4 h-4 bg-skin-key-secondary rounded-full top-1/2 -translate-y-1/2 transition-all duration-500",
              {
                "left-1": !theme,
                "left-1/2 -translate-x-1/2": theme === "light-theme",
                "left-[94%] -translate-x-full": theme === "neon-theme",
              }
            )}
          />
        </div>
      </div>
    </div>
  );
};

export { ThemeSwitcher };
