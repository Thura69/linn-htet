import { Menu } from "lucide-react";
import React from "react";


export const MobileMenu = () => {
  return (
    <div className="w-[35px] h-[35px] flex items-center justify-center fixed top-[30px] right-[20px] bg-textPrimary rounded-[50%]">
      <Menu fill='white' className="w-5 h-5 text-white"/>
    </div>
  );
};
