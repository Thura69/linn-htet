import React, { useEffect } from "react";
import { SizeCircle } from "@/components/size-circle";
import Aos from "aos";
import "aos/dist/aos.css";
import { ArrowDownCircle } from "lucide-react";

type StateType = "animation" | "ui/ux" | "drawing" | "all";

export const AnimationState = ({
  handleState,
}: {
  handleState: (data: StateType) => void;
}) => {
  useEffect(() => {
    Aos.init();
  }, []);

return (
    <div className=" w-[70%] max-auto h-[600px]  flex items-center justify-center relative">
    <div className="text-center  flex flex-col gap-3 items-center justify-center">
        <h3 className=" flex gap-3 text-[70px] mb-3 ">
          I Do{" "}
          <div data-aos="fade-up" className=" font-bold">
            {" "}
            Animations
          </div>
        </h3>
        <p data-aos="fade-up" className="w-[400px]  mx-auto">
        I design compelling animations that turn concepts into dynamic visuals. My focus is on creating smooth, eye-catching sequences that effectively convey messages and enhance user engagement.
        </p>
        <ArrowDownCircle  data-aos="fade-right" className="w-5 h-5 md:w-6 md:h-6" />
      </div>
      <div className=" absolute right-[0%] top-[10%]">
        <SizeCircle
          handleClick={() => handleState("ui/ux")}
          size={200}
          content="Illustration"
        />
      </div>
      <div className=" absolute bottom-[7%] left-[0%]">
        <SizeCircle
          handleClick={() => handleState("drawing")}
          size={180}
          invert
          content="Mastcot Character Development"
        />
      </div>
    </div>
  );
};
