import Image, { StaticImageData } from "next/image";
import React from "react";

type StoryCardType = {
  name: string;
  image: StaticImageData;
};

export const StoryCard: React.FC<StoryCardType> = ({ name, image }) => {
  return (
    <div className=" max-w-[500px] md:w-[30%] space-y-4">
      <Image
        src={image}
        className=" mx-auto  h-auto"
        alt="story_card"
      />
      <p  className="">
        {name}
      </p>
    </div>
  );
};
