import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const SizeCircle = ({
  leave,
  size,
  content,
  handleClick,
  invert = false, // New prop to control direction
}: {
  leave?: boolean;
  size: number;
  content: string;
  handleClick:any;
  invert?: boolean; // New prop to control direction
}) => {
  const ref: any = useRef(null);
  const [isHover, setIsHover] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const controls = useAnimation();

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

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;

    // Adjust direction based on the invert prop
    const factor = invert ? -1 : 1;

    x.set((clientX / 30) * factor);
    y.set((clientY / 30) * factor);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onClick={handleClick}
      transition={{ ease: "easeOut", duration: 0.5 }}
      initial={{ opacity: 0, y: 5, width: 180, height: 180 }}
      animate={{
        opacity: 1,
        y: 0,
        width: leave ? 0 : size,
        height: leave ? 0 : size,
        
      }}
      exit={{ opacity: 0, width: 0, height: 0 }}
      className={cn(
        "bg-[#f2f2f0]",
        "w-[100px] h-[100px] hover:border cursor-pointer flex items-center justify-center text-center lg:w-[420px] lg:h-[420px] rounded-full"
      )}
     
    >
      {content}
    </motion.div>
  );
};
