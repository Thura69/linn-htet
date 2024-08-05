"use client";
import React, { useEffect, useState } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import { HeroContantText } from "@/components/hero/hero-contant-text";
import Footer from "@/components/footer/footer";
import BlurryCursor from "@/components/cursor";
import { ProjectTitle } from "@/components/project-title";
import Image from "next/image";
import IMG_1 from "@/public/images/cartoon-illustration/1-2.jpg";
import IMG_2 from "@/public/images/cartoon-illustration/2.jpg";
import IMG_3 from "@/public/images/cartoon-illustration/3.jpg";
import IMG_4 from "@/public/images/cartoon-illustration/4-2.jpg";
import IMG_5 from "@/public/images/cartoon-illustration/6.jpg";
import IMG_6 from "@/public/images/cartoon-illustration/7.svg";
import IMG_7 from "@/public/images/cartoon-illustration/8.svg";
import IMG_8 from "@/public/images/cartoon-illustration/9.svg";
import IMG_9 from "@/public/images/cartoon-illustration/10.svg";
import IMG_10 from "@/public/images/cartoon-illustration/11.svg";
import IMG_11 from "@/public/images/cartoon-illustration/12.svg";
import IMG_12 from "@/public/images/cartoon-illustration/13.svg";
import IMG_13 from "@/public/images/cartoon-illustration/14.svg";

import { MobileMenu } from "@/components/mobile-menu";

function Page() {
  const [active, setActive] = useState(false);

  const handleHover = () => {
    setActive((prev) => !prev);
  };

  return (
    <>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
        <div className=" bg-[#00D2E5]">
          <div className="container">
            <HeroContantText
              handleHover={handleHover}
              indent={false}
              active={active}
              title="Portrait Illustrations"
            />
          </div>
        </div>
        <div className="bg-white overflow-hidden  container mx-auto">
          <div className="py-5  pb-[200px]  space-y-20">
            <div>
              <ProjectTitle color="black" title={"Portrait Illustrations"} />
              <div className=" space-y-10">
                <Image alt="i-house" src={IMG_1} />
                <div className=" grid grid-cols-2 gap-5 md:gap-10 justify-between">
                  <Image alt="i-house"  src={IMG_2} />
                  <Image alt="i-house"  src={IMG_3} />
                </div>
                <Image alt="i-house" className="w-auto" src={IMG_4} />
                <Image alt="i-house" className="w-auto" src={IMG_5} />
              </div>
            </div>
            <ProjectTitle color="black" title={"Cartoon Illustrations"} />

            <Image alt="i-house" className="w-auto" src={IMG_6} />
            <Image alt="i-house" className="w-auto" src={IMG_7} />
            <Image alt="i-house" className="w-auto" src={IMG_8} />
            <Image alt="i-house" className="w-auto" src={IMG_9} />

            <div className="grid grid-cols-2">
            <Image alt="i-house" className="w-auto" src={IMG_10} />
            <Image alt="i-house" className="w-auto" src={IMG_11} />
            <Image alt="i-house" className="w-auto" src={IMG_12} />
            <Image alt="i-house" className="w-auto" src={IMG_13} />
            </div>




          </div>
        </div>
        <Footer />
        <MobileMenu />
        <BlurryCursor isActive={active} />
      </ReactLenis>
    </>
  );
}

export default Page;
