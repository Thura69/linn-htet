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

type StateType = "animation" | "ui/ux" | "drawing" | "all";

export default function Page() {
  const [state, setState] = useState<StateType>("all");

  const [active, setActive] = useState(false);
  const isDesktop = useMediaQuery({
    query: "(min-width: 624px)",
  });

  useEffect(()=>{
    setState('all')
  },[])

  const handleState = (data: StateType) => {
    setState(data);
  };

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      <div className="flex items-center justify-center h-[75svh]">
        {state === "all" && <AllState handleState={handleState} />}
        {state === "ui/ux" && <Uiuxstate handleState={handleState} />}
        {state === "animation" && <AnimationState handleState={handleState} />}
        {state === "drawing" && <DrawingState handleState={handleState} />}
      </div>
      <MiniFooter />
      {isDesktop && <ViewBlurryCursor isActive={active} />}
      <MobileMenu />
    </ReactLenis>
  );
}
