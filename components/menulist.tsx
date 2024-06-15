import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import React from "react";

const poppins = Poppins({ subsets: ["latin"],weight:'600' });


const MENULISTS = [
  {
    name: "Home",
    link: "/home",
    x: 20,
  },
  {
    name: "Projects",
    link: "/workf",
    x: 30,
  },
  {
    name: "Case Studies",
    link: "/proccess",
    x: 40,
  },
  {
    name: "Design Diversions",
    link: "/play",
    x: 50,
  },
  {
    name: "Contact",
    link: "/about",
    x: 60,
  }
];

export const MenuList = () => {
  return (
    <div className={cn(poppins.className,'leading-[85px] absolute top-[25%] left-[53%]')}>
      {MENULISTS.map((e, index) => (
        <motion.h3
          key={index}
          initial={{ x: e.x, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.7 }}
          className="text-[60px] font-[700]"
        >
          {e.name}
        </motion.h3>
      ))}
    </div>
  );
};
