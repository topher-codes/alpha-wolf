import Image from "next/image";
import React from "react";

// A card that is placed on a grid, which contains an image and a body of text below the image. It uses flexbox.

const CreatureCard: React.FC = () => {
  return (
    <div className="flex w-80 flex-col flex-wrap items-center border">
      <Image src={"/img/00.png"} alt="Nothing" width={400} height={200} />
      <div className="flex flex-col ">
        <div className="text-2xl font-bold">
          This is some placeholder text can't you see that?
        </div>
      </div>
    </div>
  );
};

export default CreatureCard;
