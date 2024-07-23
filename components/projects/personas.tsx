import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface PersonasType {
  image: StaticImageData;
  name: string;
  age: number;
  occupation: string;
  location: string;
  listData: string[];
}

export const PersonasShow: React.FC<PersonasType> = ({
  image,
  name,
  age,
  occupation,
  location,
  listData,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <div
        className={cn(
          "md:w-[400px]  flex flex-col  items-center justify-center",
          age === 28 && "md:order-1"
        )}
      >
        <Image
          className="w-[200px] h-[200px]"
          src={image}
          alt="personas_data"
        />
        <div className="flex flex-col my-5 items-center justify-center">
          <h3>{name}</h3>
          <h3>Age - {age}</h3>
          <h3>Occupation - {occupation}</h3>
          <h3>Location - {location}</h3>
        </div>
      </div>
      <div
        className={cn(
          "bg-gradient-to-l  from-[#FFC529]/50 from-0% via-[#FF9029]/50 via-50% to-[#FFFFFF]/50 to-100% p-10 md:p-5 rounded-[30px] w-full flex items-center justify-center",
          age === 28 && "bg-gradient-to-r"
        )}
      >
        <ul className=" list-disc">
          {listData.map((e, index) => (
            <li key={index}>{e}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
