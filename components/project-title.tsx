import { cn } from "@/lib/utils";
import React from "react";

type ProjectTitleType = {
  title: string;
  size?: string;
  color: "blue" | "yellow" | "green" | "ligh-blue" | "black" | "sky-blue";
  amount?: "lg" | "xl" | "md";
};

export const ProjectTitle: React.FC<ProjectTitleType> = ({
  title,
  size = "35",
  color = "yellow",
  amount = "lg",
}) => {
  return (
    <h3
      className={cn(
        "text-[18px] mb-5 font-bold",
        size && ` text-[20px] md:text-[30px]`,
        `text-[#FFC529]`,
        color === "blue" && "text-[#4062FF]",
        color === "yellow" && "text-[#FFC529]",
        color === "green" && "text-[#25282B]",
        color === "ligh-blue" && "text-[#537FE7]",
        color === "sky-blue" && "text-[#00D2E5]",
        color === "black" && "text-black",
        amount === "xl" && "text-[30px] md:text-[40px]",
        amount === "md" && "text-[25px]"
      )}
    >
      {title}
    </h3>
  );
};
