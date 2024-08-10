import React, { useEffect } from "react";
import { SizeCircle } from "@/components/size-circle";
import Aos from "aos";
import "aos/dist/aos.css";
import { ArrowDownCircle } from "lucide-react";

type StateType = "animation" | "ui/ux" | "drawing" | "all";

export const DrawingState = ({
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
            Mastcot
          </div>
        </h3>
        <p data-aos="fade-up" className="w-[400px]  mx-auto">
          I specialize in developing mascots that capture brand essence through
          a refined design process. Starting with research and sketches, I
          iterate and refine to create distinctive, engaging characters that
          resonate with audiences and embody brand identity.
        </p>
        <ArrowDownCircle  data-aos="fade-right" className="w-5 h-5 md:w-6 md:h-6" />
      </div>
      <div className=" absolute right-[0%] top-[10%]">
        <SizeCircle
          handleClick={() => handleState("animation")}
          size={200}
          content="Animations"
        />
      </div>
      <div className=" absolute bottom-[7%] left-[0%]">
        <SizeCircle
          handleClick={() => handleState("ui/ux")}
          size={180}
          invert
          content="Illustration"
        />
      </div>
    </div>
  );
};
