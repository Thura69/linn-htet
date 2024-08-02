'use client'
import React from "react";
import { Logo } from "./logo";
import { Text } from "../text";
import { Lexend, Source_Sans_3, Lato } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { MENULINK } from "@/utils/menu-data";
import { MenuLinkType } from "@/utils/types";
import { usePathname } from 'next/navigation';


const lato = Lato({ subsets: ["latin"], weight: ["400"] });

const menuCss =
  "flex flex-col gap-1 text-gray-500 hidden md:flex font-light text-[#a2a2a2] text-[16px]";

export const WideNav = () => {

  const menuLinks = MENULINK[0];
  const pathname = usePathname();

  console.log("Pathname",pathname)


  return (
    <header className={cn(lato.className, " px-[20px]   container mx-auto")}>
      <ul className="  grid grid-cols-1 md:grid-cols-4  pt-[20px] lg:pt-[40px] pb-[20px]">
        <li className="font-bold text-[25px] flex-col flex items-start justify-start">
          <Logo />
        </li>
        {Object.keys(menuLinks).map((section, index) => (
          <li key={index} className={cn(menuCss)}>
            {menuLinks[section as keyof MenuLinkType].map((link, idx) => {

              return  <Text
              active={link.active}
              url={link.link}
              key={idx}
              varient={pathname === link.link ? "primary" : "secondary"}
            >
              {link.name}
            </Text>
            })}
          </li>
        ))}
      </ul>
    </header>
  );
};
