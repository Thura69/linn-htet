"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { HeroContantText } from "@/components/hero/hero-contant-text";
import { useState } from "react";
import BlurryCursor from "@/components/cursor";
import { ProjectTitle } from "@/components/project-title";
import ALIEAN from "@/public/images/DSA/20.png";
import IMG_1 from "@/public/images/deep-space-alien/1.png";
import IMG_2 from "@/public/images/deep-space-alien/2-2.png";
import IMG_3 from "@/public/images/deep-space-alien/3-2.png";
import IMG_4 from "@/public/images/deep-space-alien/4.png";
import IMG_5 from "@/public/images/deep-space-alien/5-2.png";
import IMG_6 from "@/public/images/deep-space-alien/6-2.png";
import IMG_7 from "@/public/images/deep-space-alien/7.png";
import IMG_8 from "@/public/images/deep-space-alien/8-2.png";
import IMG_9 from "@/public/images/deep-space-alien/9-2.png";
import IMG_10 from "@/public/images/deep-space-alien/10-2.png";
import IMG_11 from "@/public/images/deep-space-alien/11.png";
import IMG_12 from "@/public/images/deep-space-alien/12.png";
import IMG_13 from "@/public/images/deep-space-alien/13.png";
import IMG_14 from "@/public/images/deep-space-alien/14-2.png";
import IMG_15 from "@/public/images/deep-space-alien/15-2.png";
import IMG_16 from "@/public/images/deep-space-alien/16-2.png";
import IMG_17 from "@/public/images/deep-space-alien/17-2.png";
import IMG_18 from "@/public/images/deep-space-alien/18.png";
import IMG_19 from "@/public/images/deep-space-alien/19.png";
import IMG_20 from "@/public/images/deep-space-alien/20.png";
import Footer from "@/components/footer/footer";
import { useMediaQuery } from "react-responsive";



import Image from "next/image";
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
        <div className="bg-white overflow-hidden my-[50px]  container mx-auto ">
          <ProjectTitle color="green" title=" NFT Website" />
          <p>
            Aliens from far away are now on Mars, and they might attack Earth,
            risking the end of humanity. We don&apos;t know why they&apos;re
            invading, but if we don&apos;t protect our planet, we could be in
            serious trouble
          </p>
          <div className="my-[50px]">
            <ProjectTitle
              color="green"
              title={"Aliens arrived on Mars and established their base there"}
            />
            <div className="mx-auto space-y-5">
              <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
                <Image src={IMG_1} alt="ee" />
                <Image src={IMG_2} alt="ee" />
                <Image src={IMG_3} alt="ee" />
                <Image src={IMG_4} alt="ee" />
              </div>
            </div>
          </div>
          {/* second section */}
          <p>
            Aliens have started attacking major cities like New York and Tokyo.
            The invasion began in New York City, causing massive destruction and
            loss of life, impacting not only the city but the entire world.
          </p>
          <div className="flex justify-start gap-6">
            <Image
              src={IMG_5}
              alt="ee"
              className="w-[600px]  pt-[60px] h-auto "
            />
            <Image
              src={IMG_6}
              alt="ee"
              className="w-[200px]  pt-[60px] h-auto "
            />
          </div>
          {/* second section */}

          {/* third section */}
          <p className=" mt-[50px]">
            Cities are facing serious destruction, and there&apos;s a significant
            loss of human lives. The Eiffel Tower is tragically damaged, and
            earth is suffering considerable harm from the extraterrestrial
            invasion.ife, impacting not only the city but the entire world.
          </p>
          <div className="flex justify-start gap-6">
            <Image src={IMG_7} alt="ee" className="w-auto  pt-[60px] h-auto " />
            <div>
              <Image
                src={IMG_8}
                alt="ee"
                className="w-auto  pt-[60px] h-auto "
              />
              <Image
                src={IMG_9}
                alt="ee"
                className="w-auto  pt-[60px] h-auto "
              />
            </div>
          </div>
          {/* third section */}

          {/* fourth section */}
          <p className=" mt-[50px]">
            People around the world are coming together to discuss and decide on
            actions to defend against alien attacks. Global leaders are debating
            and reaching agreements to unite humanity against extraterrestrial
            invasions. Signed agreements by leaders signify a collective effort
            to guard against potential alien threats, and global leaders are
            taking decisive actions to protect against such attacks.
          </p>
          <div className="flex flex-col md:flex-row justify-start  gap-6">
            <div>
              <Image
                src={IMG_12}
                alt="ee"
                className=" w-auto pt-[60px] h-auto "
              />
              <Image
                src={IMG_11}
                alt="ee"
                className="w-auto  pt-[60px] h-auto "
              />
            </div>
            <Image
              src={IMG_10}
              alt="ee"
              className="w-auto  pt-[60px] h-auto "
            />
          </div>
          {/* fourth section */}
          {/* five section */}
          <p className=" mt-[50px]">
            Top scientists and inventors from different countries are working
            together to create mecha robots. They organize meetings and seminars
            to discuss the development and construction of these robots.
          </p>
          <div className=" grid md:grid-cols-2 gap-5 mt-[50px]">
            <Image src={IMG_13} alt="ee" />
            <Image src={IMG_14} alt="ee" />
          </div>
          {/* five section */}

          {/* six section */}
          <p className=" mt-[50px]">
            Soldiers and volunteers are being trained to pilot robots.
            Specialized warriors are learning martial arts, and soldiers are
            getting virtual reality training to operate mecha robots.
          </p>
          <div className=" grid md:grid-cols-2 gap-5 mt-[50px]">
            <Image src={IMG_15} alt="ee" />
            <Image src={IMG_16} alt="ee" />
          </div>
          {/* six section */}

          {/* seven section */}
          <p className=" mt-[50px]">
            Getting ready to fight aliens in combat, Earth is facing alien
            opponents on the battleground for the first time in history.
          </p>
          <div className=" grid md:grid-cols-2 gap-5 mt-[50px]">
            <Image src={IMG_17} alt="ee" />
            <Image src={IMG_18} alt="ee" />
            <Image src={IMG_19} alt="ee" />
            <Image src={IMG_20} alt="ee" />
          </div>
          {/* seven section */}
          <p className=" mt-[50px] text-center max-w-[600px] pb-[200px] mx-auto">
            This is the first part of the Deep Space Aliens script. The next
            part introduces superheroes who emerge to help humanity in the
            battle against aliens. Stay tuned for more!
          </p>
        </div>
        <Footer />
        {isDesktop && <BlurryCursor isActive={active} />}
        <MobileMenu />
      </ReactLenis>
    </>
  );
}

export default Page;
