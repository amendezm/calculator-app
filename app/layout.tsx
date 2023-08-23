import { Providers } from "./providers";

import "../styles/globals.scss";

export const metadata = {
  title: "Calculator App",
  description: "Calculator App created using NextJS framework",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
