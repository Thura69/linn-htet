import React from "react";
import { SizeCircle } from "@/components/size-circle";

type StateType = "animation" | "ui/ux" | "drawing" | "all";

export const AllState = ({
  handleState,
}: {
  handleState: (data: StateType) => void;
}) => {
  return (
    <div className=" w-[700px] h-[600px]   flex items-center justify-center relative">
      <div className=" absolute left-0 top-[10%] ">
        <SizeCircle
          handleClick={() => handleState("ui/ux")}
          size={210}
          content="Illustration"
        />
      </div>
      <h3 className="  text-[90px] ">I Do</h3>
      <div className=" absolute right-[10%] top-[20%]">
        <SizeCircle
          handleClick={() => handleState("drawing")}
          size={200}
          content="Mastcot Character Development"
        />
      </div>
      <div className=" absolute bottom-[7%] left-[20%]">
        <SizeCircle
          handleClick={() => handleState("animation")}
          size={180}
          invert
          content="Animation"
        />
      </div>
    </div>
  );
};
