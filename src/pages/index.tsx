import Image from "next/image";
import CreatureCard from "../components/creaturecard";
import { api } from "../utils/api";

const Home: React.FC = () => {
  const query = api.creature.getAll.useQuery();
  return (
    <>
      <div className="flex w-screen items-center justify-center p-4">
        <Image
          src="/img/rainbow_background.png"
          alt="Rainbow Background"
          width={1920}
          height={300}
          className="absolute -z-10 opacity-75"
        />
        <div className="flex min-h-screen flex-col items-center justify-center">
          <h1 className="p-4 text-center text-6xl font-bold">
            Welcome to Alpha-Wolf!
          </h1>
          <p className="p-4 text-center text-2xl font-bold">
            A Next.js + TypeScript + TailwindCSS + TRPC + NextAuth.js + Prisma
            Project
          </p>
          <p className="py-4 text-center text-2xl font-bold">
            This is a game that combines the power of AI with the power of
            nature!
          </p>
        </div>
      </div>
      <div className="flex min-h-screen w-screen flex-col items-center justify-center p-10">
        {query.data?.map((creature) => (
          <CreatureCard key={creature.id} creature={creature} />
        ))}
      </div>
    </>
  );
};

export default Home;
