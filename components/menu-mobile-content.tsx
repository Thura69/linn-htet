import React from "react";
import { Circle } from "./circle";
import { MenuList } from "./menulist";
import { Logo } from "./header/logo";
import { SocialLinks } from "./social-links";

export const MenuMobileContent = () => {
  return (
    <div className=" fixed top-0 bottom-0 animate-menu-fade flex items-center justify-center  right-0 left-0 bg-[#e8e8e3]">
     <div className="container relative flex items-center justify-center h-[100svh] mx-auto ">
     <div className="absolute border-2  top-[20px] left-[60px]">
        <Logo/>
      </div>
      <Circle />
      <MenuList/>
      <div className="absolute left-[60px] w-[300px] bottom-[150px] ">
        <SocialLinks/>
      </div>

     </div>
    </div>
  );
};
