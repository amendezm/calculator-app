import { FC, ReactNode } from "react";
import { League_Spartan } from "@next/font/google";
import classNames from "classnames";

import { useThemeContext } from "theme";
import { useWindowHeight } from "hooks";

const spartan = League_Spartan({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-spartan",
});

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  const { theme } = useThemeContext();
  const { height } = useWindowHeight();

  return (
    <div
      className={classNames(theme, spartan.variable)}
      style={{ minHeight: height }}
    >
      {children}
    </div>
  );
};

export { Layout };
