import Head from "next/head";
import { League_Spartan } from "@next/font/google";

import { ThemeSwitcher } from "components";
import classNames from "classnames";

const spartan = League_Spartan({ subsets: ["latin"], weight: "700" });

export default function Home() {
  return (
    <>
      <Head>
        <title>Calculator</title>
        <meta
          name="description"
          content="Calculator app solution for frontendmentor challenge"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main
        className={classNames(
          "w-full h-screen flex justify-center items-center bg-skin-main transition-all duration-200 ease-in-out",
          spartan.className
        )}
      >
        <ThemeSwitcher />
      </main>
    </>
  );
}
