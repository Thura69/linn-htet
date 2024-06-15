import React from "react";
import { Circle } from "./circle";
import { MenuList } from "./menulist";

export const MenuMobileContent = () => {
  return (
    <div className=" fixed top-0 bottom-0 animate-menu-fade flex items-center justify-center right-0 left-0 bg-[#e8e8e3]">
      <Circle />
      <MenuList/>
    </div>
  );
};
