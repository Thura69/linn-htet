import React from "react";
import { Circle } from "./circle";
import { MenuList } from "./menulist";
import { Logo } from "./header/logo";
import { SocialLinks } from "./social-links";
import { NoMotionCircle } from "./no-motion-circle";
import { useMediaQuery } from "react-responsive";

export const MenuMobileContent = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 624px)",
  });

  return (
    <>
      <div className=" h-[100svh] ml-[1px] relative flex items-center justify-center  ">
        <div className="fixed container  flex items-center justify-start top-[20px]   px-[70px]  ">
          <Logo />
        </div>
        {isDesktop ? <Circle /> : <NoMotionCircle />}
      </div>
      <div>
     
        <MenuList className=" left-[30px] md:left-[80px] md:top-[20%] top-[25%]" />
   
        <div className="absolute left-[60px] md:w-[300px] bottom-[150px] "></div>
        <div className=" absolute  w-full md:w-[300px] md:left-[80%] left-[30px] bottom-[40px]  md:bottom-[60px] right-0">
        <SocialLinks/>
        </div>
       
      </div>
    </>
  );
};
