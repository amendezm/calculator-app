import { CalculatorProvider } from "context";
import { Layout } from "layout";
import { ThemeProvider } from "theme";

import "../styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <CalculatorProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CalculatorProvider>
    </ThemeProvider>
  );
}
