"use client";
import { motion } from "framer-motion";
import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Circle } from "../circle";
import { ArrowDownCircle } from "lucide-react";
import { useMediaQuery } from "react-responsive";


const inter = Poppins({ subsets: ["latin"], weight: "600" });

type HeroContantTextType = {
  title: string;
  indent?: boolean;
  handleHover?: any;
  active?: boolean;
};

export const HeroContantText: React.FC<HeroContantTextType> = ({
  title,
  indent = true,
  handleHover,
  active = false,
}) => {

  const isDesktop = useMediaQuery({
    query: "(min-width: 1000px)",
  });

  return (
    <div className=" h-[400px] relative lg:h-[650px] flex items-center justify-center" >
      <div className=" absolute">
        {
      
        isDesktop ?   <Circle leave={active} /> :   <div className="w-[250px] h-[250px] bg-[#f2f2f0] rounded-full"></div>
        }

      </div>
      <motion.h1
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className={cn(
          inter.className,
          "relative tracking-wide",
          "text-[40px]  sm:text-[50px] text-center  md:text-[70px] lg:text-[75px] xl:text-[80px]",
          indent &&
            "indent-10 md:indent-[18vw] text-center lg:indent-[5vw] xl:indent-[10vw]",
          "leading-[54px] md:leading-[70px] lg:leading-[110px] "
        )}
      >
        {title}
      </motion.h1>
      <ArrowDownCircle className=" w-7 h-7 absolute animate-bounce bottom-[20px]" />
    </div>
  );
};
