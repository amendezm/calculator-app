import classNames from "classnames";

import { useThemeContext } from "theme";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useThemeContext();

  const handleThemeChange = () => {
    if (!theme) {
      setTheme("light-theme");
      return;
    }

    if (theme === "light-theme") {
      setTheme("neon-theme");
      return;
    }

    setTheme(undefined);
  };

  return (
    <div className="flex flex-col items-end">
      <div className="w-16 text-skin-switcher flex justify-around text-xs mb-1 px-1">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
      <div className="flex items-center">
        <span className="uppercase text-skin-switcher mr-6 text-xs tracking-widest mt-1">
          theme
        </span>
        <div
          className="relative bg-skin-keypad w-16 h-6 rounded-2xl px-1 cursor-pointer"
          role="button"
          onClick={handleThemeChange}
        >
          <span
            className={classNames(
              "absolute w-4 h-4 bg-skin-key-secondary rounded-full top-1/2 -translate-y-1/2 transition-all duration-500",
              {
                "left-1": !theme,
                "left-1/2 -translate-x-1/2": theme === "light-theme",
                "right-1": theme === "neon-theme",
              }
            )}
          />
        </div>
      </div>
    </div>
  );
};

export { ThemeSwitcher };
