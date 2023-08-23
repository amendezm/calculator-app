"use client";

import { FC, PropsWithChildren } from "react";

import { CalculatorProvider } from "context";
import { ThemeProvider } from "theme";
import { Layout } from "layout";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      <CalculatorProvider>
        <Layout>{children}</Layout>
      </CalculatorProvider>
    </ThemeProvider>
  );
};
