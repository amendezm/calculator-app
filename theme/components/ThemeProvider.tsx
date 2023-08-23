import { createContext, FC, ReactNode, useContext, useState } from "react";

interface ITheme {
  theme?: ThemeType;
  setTheme: (_theme: ThemeType) => void;
}

type ThemeType = "light-theme" | "neon-theme" | undefined;

const ThemeContext = createContext<ITheme | undefined>(undefined);

interface IThemeProvider {
  children: ReactNode;
}

const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType | undefined>(undefined);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error(
      "useThemeContext hook should be used whithin a ThemeProvider"
    );

  return context;
};

export { ThemeProvider, useThemeContext };
