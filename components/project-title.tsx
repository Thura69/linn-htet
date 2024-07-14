import { cn } from "@/lib/utils";
import React from "react";

type ProjectTitleType = {
  title: string;
  size?: string;
  color: "blue" | "yellow";
  amount?: "lg" | "xl";
};

export const ProjectTitle: React.FC<ProjectTitleType> = ({
  title,
  size = "30",
  color = "yellow",
  amount = "lg",
}) => {
  return (
    <h3
      data-aos="fade-up"
      data-aos-duration="600"
      className={cn(
        "text-[30px] mb-5 font-bold",
        size && `text-[${size}px]`,
        `text-[#FFC529]`,
        color === "blue" && "text-[#4062FF]",
        color === "yellow" && "text-[#FFC529]",
        amount === "xl" && "text-[40px]"
      )}
    >
      {title}
    </h3>
  );
};
