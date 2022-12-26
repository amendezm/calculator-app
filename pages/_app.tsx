import { Layout } from "layout";
import { ThemeProvider } from "theme";

import "../styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
