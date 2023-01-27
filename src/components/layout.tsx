/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Head from "next/head";
import type { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Head>
        <title>Next.js + TypeScript Example</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav className="flex h-20 items-center justify-center bg-emerald-300 ">
          <div className="mx-4 flex w-20 items-center justify-center text-2xl font-bold text-white">
            <Link href="/">Home</Link>
          </div>
          {" | "}
          <div className="mx-4 flex w-20 items-center justify-center text-2xl font-bold text-white">
            <Link href="/about">About</Link>
          </div>
          {" | "}
          <div className="mx-4 flex w-auto items-center justify-center text-2xl font-bold text-white">
            <Link href="/profile">User Profile</Link>
          </div>
          {" | "}
        </nav>
      </header>
      <div className="container min-h-screen">{children}</div>
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  );
};
