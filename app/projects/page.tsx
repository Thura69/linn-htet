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
            <ProjectCard
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              data={projects[2]}
            />
            <ProjectCard
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              data={projects[3]}
            />
          </div>
          <div className=" grid grid-cols-3 gap-5  space-y-5 ">
            <div className=" col-span-2">
              <ProjectCard
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                data={projects[8]}
              />
            </div>
            <ProjectCard
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              data={projects[5]}
            />
            <ProjectCard
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              data={projects[6]}
            />
             <ProjectCard
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              data={projects[7]}
            />
              <ProjectCard
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              data={projects[4]}
            />
             <ProjectCard
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              data={projects[9]}
            />
          </div>
        </div>
      </div>
     <Footer />
      isDesktop && <ViewBlurryCursor isActive={active} />
    </ReactLenis>
     
  );
}

 

export default Page;
