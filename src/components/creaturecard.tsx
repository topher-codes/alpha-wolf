/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react/no-unescaped-entities */
import type { Creature } from "@prisma/client";
import Image from "next/image";

interface CreatureCardProps {
  creature: Creature;
}

const CreatureCard: React.FC<CreatureCardProps> = ({ creature }) => {
  return (
    <div className="flex w-80 flex-col flex-wrap items-center border">
      <Image
        src={creature.image as string}
        alt="Nothing"
        width={400}
        height={200}
      />
      <div className="flex flex-col ">
        <div className="text-2xl font-bold">
          This is some placeholder text can't you see that?
        </div>
      </div>
    </div>
  );
};

export default CreatureCard;
