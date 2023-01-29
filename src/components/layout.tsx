/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Head from "next/head";
import type { PropsWithChildren } from "react";
import { useSession } from "next-auth/react";

export const Layout = ({ children }: PropsWithChildren) => {
  const session = useSession();
  const id = session?.data?.user?.id || "0";
  return (
    <div>
      <Head>
        <title>Alpha Wolf</title>
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
            <Link href={`/profile/${id}`}>User Profile</Link>
          </div>
          {" | "}
          <div className="mx-4 flex w-auto items-center justify-center text-2xl font-bold text-white">
            <Link href="/creature">Creature</Link>
          </div>
        </nav>
      </header>
      <main className="container min-h-screen">{children}</main>
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  );
};
