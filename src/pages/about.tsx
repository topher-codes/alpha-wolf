import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <>
      <div className="flex w-screen flex-col">
        <h1 className="p-4 text-center text-6xl font-bold">
          About Alpha-Wolf!
        </h1>
        <p className="p-4 text-center text-2xl font-bold">
          A Next.js + TypeScript + TailwindCSS + TRPC + NextAuth.js + Prisma
          Project
        </p>
        <p className="py-4 text-center text-2xl font-bold">
          This is a game that combines the power of AI with the power of nature!
        </p>
      </div>
    </>
  );
};

export default About;
