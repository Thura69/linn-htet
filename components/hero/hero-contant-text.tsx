"use client";
import { motion } from "framer-motion";
import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Poppins({ subsets: ["latin"], weight: "600" });

type HeroContantTextType = {
  title: string;
};

export const HeroContantText: React.FC<HeroContantTextType> = ({ title }) => {
  return (
    <div className=" h-[400px] lg:h-[600px] flex items-center justify-center">
      <motion.h1
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className={cn(
          inter.className,
          " indent-10 md:indent-[18vw] lg:indent-[5vw] xl:indent-[10vw] relative tracking-wide text-[40px] sm:text-[50px] md:text-[70px] lg:text-[75px] xl:text-[80px]  leading-[54px] md:leading-[70px] lg:leading-[110px]"
        )}
      >
        {title}
      </motion.h1>
    </div>
  );
};
