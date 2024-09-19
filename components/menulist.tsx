import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import Link from "next/link";
import React from "react";

const poppins = Poppins({ subsets: ["latin"], weight: "600" });

const MENULISTS = [
  {
    name: "Home",
    link: "/",
    x: 20,
  },
  {
    name: "Projects",
    link: "/projects",
    x: 30,
  },
  {
    name: "Case Studies",
    link: "/case-studies",
    x: 40,
  },
  {
    name: "Design Diversions",
    link: "/design-diversions",
    x: 50,
  },
  // {
  //   name: "Contact",
  //   link: "/contact",
  //   x: 60,
  // },
];

export const MenuList = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        poppins.className,
        " leading-[50px] md:leading-[100px] absolute top-[60%] left-[53%]",
        className
      )}
    >
      {MENULISTS.map((e, index) => (
        <motion.h3
          key={index}
          initial={{ x: e.x, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: e.x, opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.7 }}
          className=" text-[25px]    md:text-[65px] font-[800]"
        >
          <Link href={e.link}> {e.name}</Link>
        </motion.h3>
      ))}
    </div>
  );
};
