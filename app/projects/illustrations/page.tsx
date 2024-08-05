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
                <div className="flex  gap-10 justify-between">
                  <Image alt="i-house" className="w-1/2" src={IMG_2} />
                  <Image alt="i-house" className="w-1/2" src={IMG_3} />
                </div>
                  <Image alt="i-house" className="w-auto" src={IMG_4} />
                  <Image alt="i-house" className="w-auto" src={IMG_5} />
              </div>
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
