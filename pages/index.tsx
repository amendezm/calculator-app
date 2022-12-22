import Head from "next/head";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

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
      <main className="w-full h-screen bg-skin-main"></main>
    </>
  );
}
