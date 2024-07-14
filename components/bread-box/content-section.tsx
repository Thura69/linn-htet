import React from "react";
import { ProjectTitle } from "../project-title";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

interface ContentSectionType {
  title: string;
  data: string;
  images: StaticImageData[];
  col: string;
  color?: any;
}

export const ContentSection: React.FC<ContentSectionType> = ({
  title,
  data,
  images,
  col,
  color = "yellow",
}) => {
  return (
    <div>
      <ProjectTitle color={color} title={title} />
      <p data-aos="fade-up" data-aos-duration="600" className="my-5">
        {data}
      </p>

      <div
        className={`grid justify-center  gap-[30px] mt-[40px]  items-center grid-cols-${col}`}
      >
        {images.map((e, index) => (
          <Image
            data-aos="fade-right"
            data-aos-duration="600"
            className={cn("mx-auto  w-[150px]", col === "1" && "w-auto")}
            alt="images"
            key={index}
            src={e}
          />
        ))}
      </div>
    </div>
  );
};
