"use client";

import { useState } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import { HeroContantText } from "@/components/hero/hero-contant-text";
import BlurryCursor from "@/components/cursor";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import IMGONE from "@/public/images/sshr/sshr.png";
import IMGTWO from "@/public/images/sshr/7.png";
import IMGTHREE from "@/public/images/sshr/6-2.png";
import IMGFOUR from "@/public/images/sshr/10-2.png";
import IMGFIVE from "@/public/images/sshr/9-2.png";
import IMGSIX from "@/public/images/sshr/1.png";
import IMGSEVEN from "@/public/images/sshr/5-2.png";
import IMGEIGHT from "@/public/images/sshr/4.png";
import IMGNINE from "@/public/images/sshr/14-2.png";
import IMGTEN from "@/public/images/sshr/12.png";
import IMGELEVEN from "@/public/images/sshr/11.png";
import IMGTWELVE from "@/public/images/sshr/13.png";
import Footer from "@/components/footer/footer";
import { MobileMenu } from "@/components/mobile-menu";


function Page() {
  const [active, setActive] = useState(false);
  const isDesktop = useMediaQuery({
    query: "(min-width: 624px)",
  });

  const handleHover = () => {
    setActive((prev) => !prev);
  };

  return (
    <>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
        <div className="bg-[#1B5B98]">
          <div className="container">
            <HeroContantText
              handleHover={handleHover}
              indent={false}
              active={active}
              title="SSHR"
            />
          </div>
        </div>
        <div className="bg-white overflow-hidden  container mx-auto">
          <div className="py-5  pb-[200px] pt-[100px]  space-y-10 lg:space-y-16">
            {/* part one */}
            <div className=" space-y-5">
              <p className=" px-5">
                Smilax Global Co., Ltd specializes in innovative High Level
                Security Solutions and bespoke in-house developments for
                businesses of all sizes. Our mission is to deliver creative,
                effective, and cost-efficient solutions that resonate with our
                clients, leveraging extensive technical expertise in both
                technical and business realms. We aim to optimize IT and
                Security investments for our customers in Myanmar by
                comprehensively addressing their business needs from design
                through to ongoing support and management.
              </p>
              <Image src={IMGONE} className=" drop-shadow" alt="sshr" />
              <p className=" max-w-[800px] mx-auto text-center px-5">
                The main dashboard consolidates key sectors such as total
                employees, gender distribution, new and resigned members,
                complemented by charts displaying manpower and employee status
                information.
              </p>
            </div>
            {/* part one */}

            {/* part two */}
            <div className=" space-y-5">
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                <Image src={IMGTWO} className=" drop-shadow" alt="sshr_1" />
                <Image src={IMGTHREE} className=" drop-shadow" alt="sshr_2" />
                <Image src={IMGFOUR} className=" drop-shadow" alt="sshr_3" />
                <Image src={IMGFIVE} className=" drop-shadow" alt="sshr_4" />
              </div>
              <p className=" max-w-[800px] mx-auto text-center px-5">
                Screens are designed to be clear, user-friendly, and visually
                appealing, prioritizing ease of use and daily application. The
                UI/UX emphasizes presenting features in the simplest way
                possible, ensuring clean design and the presentation of useful
                data.
              </p>
            </div>
            {/* part two */}

            {/* part three */}
            <div className=" space-y-5">
              <Image src={IMGSIX} className=" drop-shadow" alt="sshr" />
              <p className=" max-w-[800px] mx-auto text-center px-5">
                Tables are designed for clarity, displaying essential
                information without requiring extensive scrolling. Each table
                presents key data categories for quick scanning, ensuring
                usability. Action buttons at the end of every table offer
                options for viewing details, editing, and deleting entries for
                further exploration.
              </p>
            </div>
            {/* part three */}

            {/* part four */}
            <div className=" space-y-5">
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                <Image src={IMGSEVEN} className=" drop-shadow" alt="sshr_1" />
                <Image src={IMGEIGHT} className=" drop-shadow" alt="sshr_2" />
                <Image src={IMGNINE} className=" drop-shadow" alt="sshr_3" />
                <Image src={IMGTEN} className=" drop-shadow" alt="sshr_4" />
              </div>
              <p className=" max-w-[800px] mx-auto text-center px-5">
                Table entries display data seamlessly within overlay UIs,
                eliminating the need for navigating to new pages. This design
                prevents user frustration from excessive back-and-forth clicking
                and enhances interface attractiveness with model boxes for a
                smoother user experience.ensuring clean design and the
                presentation of useful data.
              </p>
            </div>
            {/* part four */}
            {/* part five */}
            <div className=" space-y-5">
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                <Image src={IMGELEVEN} className=" drop-shadow" alt="sshr_1" />
                <Image src={IMGTWELVE} className=" drop-shadow" alt="sshr_2" />
              </div>
              <p className=" max-w-[800px] mx-auto text-center px-5">
                For the sorting table, icons are used for quick access to
                information, and table borders are designed for easy data
                searching. This reduces steps and allows users to find what they
                need quickly and efficiently.
              </p>
            </div>
            {/* part five */}
          </div>
        </div>
        <Footer />
        <MobileMenu/>
        {isDesktop && <BlurryCursor isActive={active} />}
      </ReactLenis>
    </>
  );
}

export default Page;
