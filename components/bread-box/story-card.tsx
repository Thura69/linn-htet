import Image, { StaticImageData } from "next/image";
import React from "react";

type StoryCardType = {
  name: string;
  image: StaticImageData;
};

export const StoryCard: React.FC<StoryCardType> = ({ name, image }) => {
  return (
    <div className=" w-[30%] space-y-4">
      <Image
        src={image}
        width={400}
        height={400}
        className=" mx-auto  h-auto"
        alt="story_card"
      />
      <p className="">{name}</p>
    </div>
  );
};
