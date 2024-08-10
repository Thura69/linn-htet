"use client";

import React, { useState } from "react";
import BlurryCursor from "@/components/cursor";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
import { ReactLenis } from "@studio-freight/react-lenis";
import { MobileMenu } from "@/components/mobile-menu";
import ViewBlurryCursor from "@/components/view-cursor";
import Footer from "@/components/footer/footer";
import { HeroContantText } from "@/components/hero/hero-contant-text";
import { ProjectTitle } from "@/components/project-title";
import Image from "next/image";
import IMG_1 from "@/public/images/animations/1.jpg";
import GIF_1 from "@/public/images/animations/1.gif";
import GIF_2 from "@/public/images/animations/2.gif";
import GIF_3 from "@/public/images/animations/3.gif";
import GIF_4 from "@/public/images/animations/4.gif";
import GIF_5 from "@/public/images/animations/5-2.gif";
import IMG_2 from "@/public/images/animations/Scene_5.jpg";
//@ts-ignore
import GIF_6 from "@/public/images/animations/6.GIF";
//@ts-ignore

import GIF_7 from "@/public/images/animations/7.GIF";
//@ts-ignore

import GIF_8 from "@/public/images/animations/8.GIF";
//@ts-ignore
import GIF_9 from "@/public/images/animations/9.GIF";

export default function Page() {
  const [active, setActive] = useState(false);

  const { ref: refOne, inView: inViewOne } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const handleHover = () => {
    setActive((prev) => !prev);
  };

  const isDesktop = useMediaQuery({
    query: "(min-width: 624px)",
  });

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      <div className=" bg-[#5e87c9]">
        <div className="container">
          <HeroContantText
            handleHover={handleHover}
            indent={false}
            active={active}
            title="Animations"
          />
        </div>
      </div>
      <div className="bg-white overflow-hidden  container mx-auto">
        <div className="py-5  pb-[200px]  space-y-10 lg:space-y-16">
          {/* first part */}
          <div className=" space-y-5">
            <ProjectTitle
              color="dark-blue"
              title={"Lay Lwint Sal - Animation Music Video"}
            />
            <p>
              For this rock-infused, energetic song, the client seeks a vibrant
              and charismatic vibe that resonates with the lyrics. The storyline
              depicts a boy&apos;s persistent efforts to win over his crush, only to
              face repeated setbacks until she finds someone else. In the end,
              he is left alone with his loneliness. The animation utilizes
              multiple layers of drawings, featuring traditionally outlined and
              meticulously designed sketches. Experience the full music video
            </p>

            <Image alt="blur-img" src={IMG_1} />
          </div>
          {/* first part */}

          {/* second part */}
          <div>
            <ProjectTitle color="dark-blue" title={"Preview clips"} />
            <div className=" grid  grid-cols-2 gap-2">
              <Image alt="blur-img" src={GIF_1} />
              <Image alt="blur-img" src={GIF_2} />
              <Image alt="blur-img" src={GIF_3} />
              <Image alt="blur-img" src={GIF_4} />
              <Image alt="blur-img" src={GIF_5} />
            </div>
          </div>
          {/* second part */}
          {/* third part */}
          <div className=" space-y-5">
            <ProjectTitle
              color="dark-blue"
              title={"Kyein Sar - Animation Music Video"}
            />
            <p>
              This heavy rock music delivers an intense audience experience,
              featuring incredible lyrics that embody the philosophy of seizing
              every moment and connecting with nature. Dive into the music
              animation with full music video
            </p>

            <Image alt="blur-img" src={IMG_2} />
          </div>
          {/* third part */}
          {/* four part */}
          <div>
            <ProjectTitle color="dark-blue" title={"Preview clips"} />
            <div className=" grid border-2  grid-cols-2 gap-2">
              <Image alt="blur-img" src={GIF_6} />
              <Image alt="blur-img" src={GIF_7} />
              <Image alt="blur-img" src={GIF_8} />
              <Image alt="blur-img" src={GIF_9} />
            </div>
          </div>
          {/* four part */}
        </div>
      </div>
      {isDesktop && <BlurryCursor isActive={active} />}
      <MobileMenu />
      <Footer />
    </ReactLenis>
  );
}
