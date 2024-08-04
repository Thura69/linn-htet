import React, { useEffect } from "react";
import { SizeCircle } from "@/components/size-circle";
import Aos from "aos";
import "aos/dist/aos.css";

type StateType = "animation" | "ui/ux" | "drawing" | "all";

export const Uiuxstate = ({
  handleState,
}: {
  handleState: (data: StateType) => void;
}) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className=" w-[70%] max-auto h-[600px]  flex items-center justify-center relative">
      <div className="text-center ">
        <h3 className=" flex gap-3 text-[70px] mb-3 ">
          I Do{" "}
          <div data-aos="fade-up" className=" font-bold">
            {" "}
            Brand Identity
          </div>
        </h3>
        <p data-aos="fade-up" className="w-[400px]  mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
          impedit iste dolorem repellendus dolores tempora ea unde, architecto
          laborum quos minima vel ipsam numquam magnam obcaecati, assumenda amet
          expedita eius?
        </p>
      </div>
      <div className=" absolute right-[0%] top-[10%]">
        <SizeCircle
          handleClick={() => handleState("drawing")}
          size={180}
          invert
          content="ချစ်တက်သည်။"
        />
      </div>
      <div className=" absolute bottom-[7%] left-[0%]">
        <SizeCircle
          handleClick={() => handleState("animation")}
          size={200}
          content="Animations လုပ်သည်။"
        />
      </div>
    </div>
  );
};
