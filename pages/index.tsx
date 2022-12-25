import Head from "next/head";

import { ThemeSwitcher } from "components";

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
      <main className="w-full h-screen flex justify-center items-center font-spartan bg-skin-main transition-all duration-200 ease-in-out">
        <CalculatorHeader />
      </main>
    </>
  );
}

const CalculatorHeader = () => (
  <div className="flex justify-between items-center w-10/12">
    <h1 className="text-4xl text-skin-switcher font-spartan">calc</h1>
    <ThemeSwitcher />
  </div>
);
