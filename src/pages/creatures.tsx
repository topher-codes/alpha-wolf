import type { NextPage } from "next";
import Link from "next/link";
import { api } from "../utils/api";

const Creatures: NextPage = () => {
  const query = api.creature.getAll.useQuery();

  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center p-10">
      <h1 className="text-6xl font-bold">Creatures</h1>
      {query.data?.map((creature) => (
        <div
          key={creature.id}
          className="flex w-80 flex-col flex-wrap items-center border"
        >
          <Link href="#">{creature.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Creatures;
