"use client";

import React, { useEffect, useState } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import Footer from "@/components/footer/footer";
import { useMediaQuery } from "react-responsive";
import ViewBlurryCursor from "@/components/view-cursor";
import { MobileMenu } from "@/components/mobile-menu";
import { MiniFooter } from "@/components/footer/mini-footer";
import { AllState } from "@/components/capabilities/all-state";
import { Uiuxstate } from "@/components/capabilities/uiux-state";
import { AnimationState } from "@/components/capabilities/animation-state";
import { DrawingState } from "@/components/capabilities/drawing";
import { projects } from "@/components/projects/data";
import ProjectCard from "@/components/project-card";
import { cn } from "@/lib/utils";

type StateType = "animation" | "ui/ux" | "drawing" | "all";

type ProjectCardType = {
  name: string;
  client: string;
  link: string;
  description: string;
  src: string;
  year: number;
};

export default function Page() {
  const [state, setState] = useState<StateType>("all");
  const [project_datas, setProject_datas] = useState<ProjectCardType[]>([]);

  const [active, setActive] = useState(false);
  const isDesktop = useMediaQuery({
    query: "(min-width: 624px)",
  });

  useEffect(() => {
    setState("all");
  }, []);

  const handleState = (data: StateType) => {
    setState(data);
  };

  const handleMouseEnter = () => {
    setActive(true);
  };

  const handleMouseLeave = () => {
    setActive(false);
  };

  useEffect(() => {
    switch (state) {
      case "all":
        setProject_datas([]);
        break;
      case "animation":
        setProject_datas([projects[8]]);
        break;
      case "drawing":
        setProject_datas([projects[3]]);
        break;
      case "ui/ux":
        setProject_datas([projects[11]]);
        break;
      default:
        setProject_datas([]);
    }
  }, [state]);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      <div className="flex  items-center   justify-center h-[calc(100vh-100px)]">
        {state === "all" && <AllState handleState={handleState} />}
        {state === "ui/ux" && <Uiuxstate handleState={handleState} />}
        {state === "animation" && <AnimationState handleState={handleState} />}
        {state === "drawing" && <DrawingState handleState={handleState} />}
      </div>

      <div
        className={cn(
          " container  grid md:grid-cols-2 gap-5 ",
          project_datas.length >= 1 && "mb-[100px]"
        )}
      >
        {project_datas.length >= 1 &&
          project_datas.map((project, index) => (
            <ProjectCard
              key={index}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              data={project}
            />
          ))}
      </div>

      <MiniFooter />
      {isDesktop && <ViewBlurryCursor isActive={active} />}
      <MobileMenu />
    </ReactLenis>
  );
}
