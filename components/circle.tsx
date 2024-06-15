"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Logo } from "./header/logo";

export const Circle = () => {
  const ref: any = useRef(null);
  const [isHover, setIsHover] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 150,
    damping: 10,
    mass: 0.1,
  });
  const springY = useSpring(y, {
    stiffness: 150,
    damping: 10,
    mass: 0.1,
  });

  const cursorSize = 300;

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  });

  const manageMouseMove = (e: any) => {
    const { clientX, clientY } = e;

    x.set(clientX / 30);

    y.set(clientY / 30);
  };

  return (
    <>
      <motion.div
        ref={ref}
        style={{ x: springX, y: springY }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        initial={{ opacity: 0, y: 5, width: 0, height: 0 }}
        animate={{ opacity: 1, y: 0, width: 450, height: 450 }}
        className={cn(
          ` bg-[#f2f2f0]`,
          "  w-[420px] h-[420px]   rounded-full "
        )}
      ></motion.div>
    </>
  );
};
