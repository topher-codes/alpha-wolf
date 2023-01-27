import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex w-screen items-center justify-center p-4">
      <Image
        src="/img/rainbow_background.png"
        alt="Rainbow Background"
        width={1920}
        height={300}
        className="absolute -z-10 opacity-75"
      />
    </div>
  );
};

export default Home;
