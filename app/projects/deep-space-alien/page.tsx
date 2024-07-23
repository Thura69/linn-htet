"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { HeroContantText } from "@/components/hero/hero-contant-text";
import { useState } from "react";
import BlurryCursor from "@/components/cursor";
import { ProjectTitle } from "@/components/project-title";
import ALIEAN from "@/public/images/DSA/20.png";
import IMG_1 from "@/public/images/DSA/1.png";
import IMG_2 from "@/public/images/DSA/2 About to land on Mars.png";
import IMG_3 from "@/public/images/DSA/3-2.png";
import IMG_4 from "@/public/images/DSA/4.png";
import IMG_5 from "@/public/images/DSA/5.png";
import IMG_6 from "@/public/images/DSA/6.png";
import Image from "next/image";
import { MobileMenu } from "@/components/mobile-menu";

function Page() {
  const [active, setActive] = useState(false);

  const handleHover = () => {
    setActive((prev) => !prev);
  };
  return (
    <>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
        <div className=" bg-[#AEDA96]">
          <div className="container">
            <HeroContantText
              handleHover={handleHover}
              indent={false}
              active={active}
              title="Deep Space Aliens"
            />
          </div>
        </div>
        <div className="bg-white overflow-hidden my-[50px] container mx-auto">
          <ProjectTitle color="green" title=" NFT Website" amount="xl" />
          <p className="text-[25px]">
            Aliens from far away are now on Mars, and they might attack Earth,
            risking the end of humanity. We don&apos;t know why they&apos;re invading, but
            if we don&apos;t protect our planet, we could be in serious trouble
          </p>
          <div className="my-[50px]">
            <ProjectTitle
              color="green"
              title={"Aliens arrived on Mars and established their base there"}
            />
            <div className="mx-auto space-y-5">
              <div className="flex justify-start space-x-5  items-start">
                <Image
                  src={IMG_1}
                  alt="ee"
                  className="w-[400px] pt-[60px] h-auto"
                  width={200}
                  height={200}
                />
                <Image
                  src={IMG_2}
                  alt="ee"
                  className="w-[400px]  pt-[60px] h-auto"
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex ml-[50px] justify-center space-x-5 items-start">
                <Image
                  src={IMG_3}
                  alt="ee"
                  className="w-[400px]   h-auto"
                  width={200}
                  height={200}
                />
                <Image
                  src={IMG_4}
                  alt="ee"
                  className="w-[400px]  h-auto"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
          f{/* second section */}
          <ProjectTitle
            color="green"
            title={
              "Aliens have started attacking major cities like New York and Tokyo. The invasion began in New York City, causing massive destruction and loss of life, impacting not only the city but the entire world."
            }
          />
          {/* second section */}
          <div className="flex">
            <Image
              src={IMG_5}
              alt="ee"
              className="w-[600px]  pt-[60px] h-auto mx-auto"
              width={200}
              height={200}
            />
            <Image
              src={IMG_6}
              alt="ee"
              className="w-[200px]  pt-[60px] h-auto mx-auto"
              width={200}
              height={200}
            />
          </div>
        </div>

        <BlurryCursor isActive={active} />
        <MobileMenu/>
      </ReactLenis>
    </>
  );
}

export default Page;
