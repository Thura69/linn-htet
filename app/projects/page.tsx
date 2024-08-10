'use client'
import { HeroContantText } from "@/components/hero/hero-contant-text";
import ProjectCard from "@/components/project-card";
import { ReactLenis } from "@studio-freight/react-lenis";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import BlurryCursor from "@/components/cursor";
import Footer from "@/components/footer/footer";
import { projects } from "@/components/projects/data";
import ViewBlurryCursor from "@/components/view-cursor";
import { MobileMenu } from "@/components/mobile-menu";


function Page() {
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
        <HeroContantText title="I enjoy bringing UI screens to life through real-world projects." />

        <div className="mt-[100px] space-y-16 pb-[200px]">
          <div className=" grid md:grid-cols-2 gap-5 ">
            <ProjectCard
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              data={projects[2]}
            />
            <ProjectCard
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              data={projects[4]}
            />
          </div>
          {/* <div className=" col-span-2">
              <ProjectCard
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                data={projects[8]}
              />
            </div> */}
          <div className=" grid md:grid-cols-2 gap-5 ">

            <ProjectCard
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              data={projects[9]}
            />
            <ProjectCard
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              data={projects[6]}
            />
             {/* <ProjectCard
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              data={projects[7]}
            /> */}
              {/* <ProjectCard
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              data={projects[4]}
            />
             <ProjectCard
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              data={projects[9]}
            /> */}
          </div>
        </div>
      </div>
     <Footer />
   {   isDesktop && <ViewBlurryCursor isActive={active} />}
      <MobileMenu />
    </ReactLenis>
     
  );
}

 

export default Page;
