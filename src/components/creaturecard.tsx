import Image from "next/image";
import React from "react";

// A card that is placed on a grid, which contains an image and a body of text below the image. It uses flexbox.

const CreatureCard: React.FC = () => {
  return (
    <div className="flex flex-col items-center border">
      <Image src={"/img/a_badger.png"} alt="Nothing" width={400} height={200} />
      <div className="text-2xl font-bold">This is some placeholder text</div>
    </div>
  );
};

export default CreatureCard;
