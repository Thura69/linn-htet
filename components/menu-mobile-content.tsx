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
      <div className=" h-[100svh] ml-[-85px] relative flex items-center justify-center  ">
        <div className="fixed container flex items-center justify-start top-[20px] px-[57px]  ">
          <Logo />
        </div>
        {isDesktop ? <Circle /> : <NoMotionCircle />}
      </div>
      <div>
        <MenuList className=" left-[50px] md:left-[80px] top-[25%]" />
        <div className="absolute left-[60px] md:w-[300px] bottom-[150px] "></div>
      </div>
    </>
    // <div className=" fixed top-0 bottom-0 animate-menu-fade md:flex items-center justify-center  right-0 left-0 bg-[#e8e8e3] ">
    //
    //   <div className="h-[100svh] bg-yellow-300 flex items-center justify-center">
    //   <div className="border-2 bg-blue-400">
    //   <Circle />
    //
    //   </div>
    //   </div>
    //   {/* <div className="container relative flex bg-yellow-400 items-center justify-center  mx-auto ">

    //
    //   </div> */}
    // </div>
  );
};
