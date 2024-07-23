"use client";
import { useState } from "react";
import { HeroContantText } from "@/components/hero/hero-contant-text";
import { ReactLenis } from "@studio-freight/react-lenis";
import BlurryCursor from "@/components/cursor";
import Footer from "@/components/footer/footer";
import { ProjectTitle } from "@/components/project-title";
import Image from "next/image";
import IMG_ONE from "@/public/images/imyanmar-house/IMG_7046 1.png";
import IMG_TWO from "@/public/images/imyanmar-house/IMG_7047 1.png";
import IMG_THREE from "@/public/images/imyanmar-house/First mascot character before Character Development.png";
import IMG_FOUR from "@/public/images/imyanmar-house/Frame 34601.png";
import IMG_FIVE from "@/public/images/imyanmar-house/8.png";
import IMG_SIX from "@/public/images/imyanmar-house/9.png";
import IMG_SEVEN from "@/public/images/imyanmar-house/10.png";
import IMG_EIGHT from "@/public/images/imyanmar-house/Myanmar Peasant_s Day.png";
import IMG_NINE from "@/public/images/imyanmar-house/For Thadingyut festival.png";
import IMG_TEN from "@/public/images/imyanmar-house/Full Moon Day od Tazaungdaing.png";
import IMG_ELEVEN from "@/public/images/imyanmar-house/Wallpaper.png";
import IMG_TWELVE from "@/public/images/imyanmar-house/14.png";
import IMG_13 from "@/public/images/imyanmar-house/15.png";
import IMG_14 from "@/public/images/imyanmar-house/16.png";
import IMG_15 from "@/public/images/imyanmar-house/17.png";
import IMG_16 from "@/public/images/imyanmar-house/18-2.png";
import { MobileMenu } from "@/components/mobile-menu";
import { useMediaQuery } from "react-responsive";

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
        <div className=" bg-[#FF8A00]">
          <div className="container">
            <HeroContantText
              handleHover={handleHover}
              indent={false}
              active={active}
              title="Mascot Character"
            />
          </div>
        </div>
        <div className="bg-white overflow-hidden container mx-auto">
          <div className="py-[100px]  pb-[200px]  space-y-20">
            {/* part-one */}
            <div>
              <ProjectTitle
                color="black"
                title="Mascot Character Development"
              />
              <p className="md:w-[80%]">
                With the aim of enhancing the company&apos;s public image and
                attention, CEO proposed the creation of a mascot character as a
                more effective means of advertising on social media, surpassing
                the traditional use of a simple icon.
              </p>
            </div>
            {/* part-one */}

            {/* part-two */}
            <div className="flex md:flex-row flex-col justify-between gap-[100px]">
              <Image
                alt="i-house"
                className="w-[220px] mx-auto md:mx-0"
                src={IMG_ONE}
              />
              <div className="">
                <ProjectTitle color="black" title="The Logo" />
                <p>
                  This is the original logo of the company, known for its
                  simplicity and aesthetic form. It has been around for a long
                  time, and people always associate this logo with the company
                  name. Hence, creating a mascot character presents a challenge,
                  as it It has to capture the spirit and feel of the original
                  logo.
                </p>
              </div>
            </div>
            {/* part-two */}
            {/* part-three */}
            <div className="flex flex-col md:flex-row justify-between gap-[100px]">
              <div className="">
                <ProjectTitle color="black" title="Initial Mascot Character" />
                <p>
                  This is the first version of the mascot character, using the
                  main color from the logo. The character is designed to have a
                  friendly and joyful vibe, with a cute appearance for effective
                  marketing. There are still many things to improve in the
                  initial design.
                </p>
              </div>
              <Image
                alt="i-house"
                className="w-[300px] mx-auto md:mx-0"
                src={IMG_TWO}
              />
            </div>
            {/* part-three */}

            {/* part-four */}
            <div className=" space-y-20">
              <ProjectTitle
                color="black"
                title="The initial post on social media"
              />
              <Image
                alt="i-house"
                className="w-[500px] mx-auto"
                src={IMG_THREE}
                width={900}
                height={900}
              />
              <p className="md:w-[70%] mx-auto text-center">
                This is the first poster showcasing the character, designed
                specifically for Myanmar Union Day on February 12. The goal of
                creating this poster is to share it on social media to celebrate
                special days and holidays in Myanmar.
              </p>
            </div>
            {/* part-four */}

            {/* part-five */}
            <div className="space-y-20">
              <ProjectTitle
                color="black"
                title="During character development"
              />
              <div className="flex">
                <Image
                  alt="i-house"
                  className="w-[700px] mx-auto"
                  src={IMG_FOUR}
                />
              </div>
              <p className="md:w-[70%] mx-auto text-center">
                The character evolves through three phases, each one getting
                cuter and more attractive with improvements in the development
                process. These three mascots showcase the progression of
                character development process.
              </p>
            </div>
            {/* part-five */}

            {/* part-six */}
            <div className=" space-y-10">
              <ProjectTitle color="black" title="Posters from phase 1" />

              <div className="flex flex-wrap gap-3 gap-y-6">
                <Image
                  alt="i-house"
                  className="md:w-[49%] mx-auto"
                  src={IMG_EIGHT}
                />
                <Image
                  alt="i-house"
                  className="md:w-[49%] mx-auto"
                  src={IMG_FIVE}
                />
                <Image
                  alt="i-house"
                  className="md:w-[49%] mx-auto"
                  src={IMG_SIX}
                />
                <Image
                  alt="i-house"
                  className="md:w-[49%] mx-auto"
                  src={IMG_SEVEN}
                />
              </div>
              <p className="md:w-[70%] mx-auto text-center">
                In the first phase, holidays in Myanmar such as Peasants&apos;
                Day, Full Moon Day of Dabaung, and Thingyan festivals are
                featured. Character development is not clearly evident due to
                specific requirements.
              </p>
            </div>
            {/* part-six */}

            {/* part-seven */}
            <div className=" space-y-10">
              <ProjectTitle color="black" title="Posters from phase 2" />
              <div className=" space-y-4">
                <Image
                  alt="i-house"
                  className="w-full mx-auto"
                  src={IMG_ELEVEN}
                />
                <div className="flex flex-wrap gap-3 gap-y-6">
                  <Image
                    alt="i-house"
                    className="md:w-[49%] mx-auto"
                    src={IMG_NINE}
                  />
                  <Image
                    alt="i-house"
                    className="md:w-[49%] mx-auto"
                    src={IMG_TEN}
                  />
                </div>
              </div>
              <p className="md:w-[70%] mx-auto text-center">
                Phase 2 can be appropriately labeled as the Settle Phase, where
                the character displays increased energy and development. It
                evolves into a smoother and more symmetrical form, closely
                aligning with the original icon. The improved outcomes and
                superior posters are a direct result of hardworking efforts in
                this phase.
              </p>
            </div>
            {/* part-seven */}

            {/* part-eight */}
            <div className=" space-y-10">
              <ProjectTitle color="black" title="Posters from phase 3" />

              <div className=" space-y-5">
                <div className="flex flex-wrap gap-3 gap-y-6">
                  <Image
                    alt="i-house"
                    className="md:w-[49%] mx-auto"
                    src={IMG_14}
                  />
                  <Image
                    alt="i-house"
                    className="md:w-[49%] mx-auto"
                    src={IMG_15}
                  />
                  <Image
                    alt="i-house"
                    className="md:w-[49%] mx-auto"
                    src={IMG_16}
                  />
                  <Image
                    alt="i-house"
                    className="md:w-[49%] mx-auto"
                    src={IMG_13}
                  />
                </div>
                <Image
                  alt="i-house"
                  className="w-full mx-auto"
                  src={IMG_TWELVE}
                />
              </div>
            </div>
            <p className="md:w-[70%] mx-auto text-center">
              In Phase 3, the characters go through a big change with perfect
              visual design and vibrant illustrations. They are placed in
              perfect situations with colors that match well. This makes them
              look really attractive. Even though the development is similar to
              Phase 1, you can see some clear differences in this stage.
            </p>
            {/* part-eight */}
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
