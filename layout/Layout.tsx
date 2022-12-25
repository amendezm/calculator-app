import { FC, ReactNode } from "react";

import { useThemeContext } from "theme";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  const { theme } = useThemeContext();

  return <div className={theme}>{children}</div>;
};

export { Layout };
