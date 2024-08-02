"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { HeroContantText } from "@/components/hero/hero-contant-text";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import BlurryCursor from "@/components/cursor";
import Footer from "@/components/footer/footer";
import { MobileMenu } from "@/components/mobile-menu";
import Image from "next/image";
import { ProjectTitle } from "@/components/project-title";
import IMG_1 from "@/public/images/northern_light/northern_pic.svg";
import FIGMA from "@/public/images/northern_light/figma.svg";
import GOOGLE from "@/public/images/northern_light/google.svg";
import PHOTO from "@/public/images/northern_light/photo.svg";
import FONT_ONE from "@/public/images/northern_light/font_1.svg";
import FONT_TWO from "@/public/images/northern_light/font_2.svg";
import FONT_PAGE from "@/public/images/northern_light/font.svg";
import WIREFRAME from "@/public/images/northern_light/wire-frame.svg";
import UI from "@/public/images/northern_light/UI.svg";
import SUMMARY from "@/public/images/northern_light/summary.svg";

import { Colors } from "@/components/northern-lights/colors";

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
        <div className="bg-[#EADBBA]">
          <div className="container">
            <HeroContantText
              handleHover={handleHover}
              indent={false}
              active={active}
              title="Northern Lights Exam Centre Information Website"
            />
          </div>
        </div>
        <div className="bg-white overflow-hidden  container mx-auto">
          <div className="py-5  pb-[200px] pt-[100px]  space-y-10 lg:space-y-16">
            {/* part one */}
            <div className=" space-y-5">
              <div className="flex flex-col md:flex-row  items-start">
                <div>
                  <div>
                    <ProjectTitle color="black" title={"About Project"} />
                    <p>
                      The Exam Centre Information website offers essential
                      details about exam schedules and locations for students.
                      Its user-friendly design ensures easy access to all
                      necessary information for a smooth examination experience.
                    </p>
                  </div>
                  <div className="flex  flex-col md:flex-row my-5 justify-between">
                    <div>
                      <h3 className=" font-bold text-[20px] my-3">
                        Target Audiences
                      </h3>
                      <ul className="">
                        <li>Students</li>
                        <li>Teachers and Instructors</li>
                        <li>Parents and Guardians</li>
                      </ul>
                    </div>
                    <div className="border border-dashed my-3 md:m-0 border-black"></div>
                    <div className=" md:space-y-5">
                      <div className="">
                        <h3 className=" font-bold mb-3 text-[20px]">My Role</h3>
                        <p>UI/UX Designer</p>
                      </div>
                      <div className="">
                        <h3 className=" font-bold my-3 text-[20px]">
                          Used Tools
                        </h3>
                        <div className="flex gap-5 md:justify-between ">
                          <Image
                            alt="bread-logo"
                            className="w-[30px]"
                            src={FIGMA}
                          />
                          <Image
                            alt="bread-logo"
                            className="w-[30px]"
                            src={GOOGLE}
                          />
                          <Image
                            alt="bread-logo"
                            className="w-[41px]"
                            src={PHOTO}
                          />
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>

                <Image alt="northren" src={IMG_1} />
              </div>
            </div>
            {/* part one */}

            {/* part two */}
            <div>
              <h3 className=" font-bold my-3 text-[20px]">Colors</h3>

              <div className="my-5  flex flex-wrap gap-5 items-start justify-start">
                <Colors color="bg-[#18264B]" />
                <Colors color="bg-[#B89464]" />
                <Colors color="bg-[#EADBBA]" />
                <Colors color="bg-[#36445A]" />
                <Colors color="bg-[#A3A3A3]" />
                <Colors color="bg-[#F3BC34]" />
                <Colors color="bg-[#FFF9EE]" />
              </div>
            </div>
            {/* part two */}
            {/* part three */}
            <div>
              <h3 className=" font-bold my-3 text-[20px]">Typography</h3>

              <div className="flex flex-col md:flex-row gap-7 md:gap-20 my-5">
                <FontContainer />
                <FontContainer />
              </div>
              <Image alt="font-page" className="mt-[50px]" src={FONT_PAGE} />
            </div>
            {/* part three */}
            {/* part four */}
            <div>
              <h3 className=" font-bold my-3 text-[20px]">Wireframe</h3>

              <Image alt="font-page" className="mt-[50px]" src={WIREFRAME} />
            </div>
            {/* part four */}
            {/* part five */}
            <div>
              <h3 className=" font-bold my-3 text-[20px]">
                High-Fidelity Design
              </h3>

              <Image alt="font-page" className="mt-[50px]" src={UI} />
            </div>
            {/* part five */}
            {/* part six */}
            <div>
              <h3 className=" font-bold my-3 text-[20px]">Project Summary</h3>
              <p>
                In just 5 days, the Northern Lights project delivered an
                efficient and user-friendly UI/UX design for premium exam
                centers. Despite the tight timeline, the team successfully
                created intuitive wireframes and final designs to ensure a
                seamless user experience.
              </p>
              <Image alt="font-page" className="mt-[50px]" src={SUMMARY} />
            </div>
            {/* part six */}
          </div>
        </div>
        <Footer />
        <MobileMenu />
        {isDesktop && <BlurryCursor isActive={active} />}
      </ReactLenis>
    </>
  );
}

const FontContainer = () => {
  return (
    <div className="flex justify-start items-center gap-5">
      <Image className="w-[80px] md:w-auto" alt="northren" src={FONT_ONE} />
      <div className=" h-full flex gap-2 md:gap-6 flex-col justify-between">
        <h3>Spectral</h3>
        <h3>Heading</h3>
      </div>
    </div>
  );
};

export default Page;
