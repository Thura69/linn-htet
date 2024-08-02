"use client";

import { HeroContantText } from "@/components/hero/hero-contant-text";
import { ReactLenis } from "@studio-freight/react-lenis";
import Footer from "@/components/footer/footer";
import ViewBlurryCursor from "@/components/view-cursor";
import { useMediaQuery } from "react-responsive";
import React, { useState } from "react";
import ProjectCard from "@/components/project-card";
import { projects } from "@/components/projects/data";




export default function Page() {
  const [active, setActive] = useState(false);

  const isDesktop = useMediaQuery({
    query: "(min-width: 624px)",
  });

  const handleMouseEnter = () => {
    setActive(true);
  };

  const handleMouseLeave = () => {
    setActive(false);
  };

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
     <div className="container mx-auto">
        <HeroContantText title="Hello.. I'm presenting project showcases" />
        <div className="mt-[100px] space-y-16 pb-[200px]">
        <div className=" grid grid-cols-3 gap-5 ">
            <ProjectCard
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              data={projects[0]}
            />
            <ProjectCard
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              data={projects[1]}
            />
          </div>
        </div>
      </div>
      <Footer />
      {isDesktop && <ViewBlurryCursor isActive={active} />}
    </ReactLenis>
  );
}
