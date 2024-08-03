"use client";

import React, { useState } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import Footer from "@/components/footer/footer";
import { SizeCircle } from "@/components/size-circle";
import { useMediaQuery } from "react-responsive";
import ViewBlurryCursor from "@/components/view-cursor";
import { MobileMenu } from "@/components/mobile-menu";




export default function Page() {
  const [active, setActive] = useState(false);
  const isDesktop = useMediaQuery({
    query: "(min-width: 624px)",
  });

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
     <div className="flex items-center justify-center h-[85svh]">
     <div className=" w-[700px] h-[600px]  flex items-center justify-center relative">
     <div className=" absolute left-0 top-0">
        <SizeCircle size={220} content="UI/UX ဆွဲသည်။" />
      </div>
       <h3 className=" text-[90px] ">I Do</h3>
       <div className=" absolute right-0 top-[20%]">
       <SizeCircle size={200} content="Animations လုပ်သည်။" />
      </div>
      <div className=" absolute bottom-[7%] left-[20%]">
      <SizeCircle size={180} invert content="ချစ်တက်သည်။" />
      </div>
     </div>
     </div>
     {   isDesktop && <ViewBlurryCursor isActive={active} />}
     <MobileMenu />
 
    </ReactLenis>
  );
}
