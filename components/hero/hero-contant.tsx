"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Play } from "lucide-react";
import { Montserrat, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import BlurryCursor from "../cursor";
import GradientCursor from "../gradient-cursor";
import { useMediaQuery } from "react-responsive";


const inter = Poppins({ subsets: ["latin"], weight: "600" });

export const HeroContant = () => {
  const ref: any = useRef(null);
  const [isHover, setIsHover] = useState(false);
  const [active, setActive] = useState(false);
  const [isVideo, setIsvideo] = useState(false);
  const [start, setStart] = useState(false);
  const isDesktop = useMediaQuery({
    query: "(min-width: 624px)",
  });

  useEffect(() => {
    setStart(true);
  }, []);

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

  const onMouseMove = (event: React.MouseEvent) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const xPos = event.clientX - rect.left - 80;
      const yPos = event.clientY - rect.top - rect.height / 2;
      x.set(xPos);
      y.set(yPos);
    }
    setIsHover(true);
  };

  useEffect(() => {
    const videoElement: any = document.getElementById(
      "894391dc-114c-b610-cf6a-24b30aef74b5-video"
    );
    if (videoElement) {
      setTimeout(() => {
        videoElement.play();
      }, 4000); // 2000 milliseconds = 2 seconds
    }
  }, []);

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHover(false);
  };

  if (start)
    return (
      <>
        <div className=" h-[400px] lg:h-[600px] container mx-auto flex items-center justify-center">
          <motion.h1
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            onMouseOver={() => {
              if (isVideo) {
                setActive(false);
              } else {
                setActive(true);
              }
            }}
            onMouseMove={() => {
              if (isVideo) {
                setActive(false);
              } else {
                setActive(true);
              }
            }}
            onMouseLeave={() => {
              setActive(false);
            }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className={cn(
              inter.className,
              " indent-10 md:indent-[18vw] lg:indent-[5vw] xl:indent-[10vw] relative tracking-wide text-[40px] sm:text-[50px] md:text-[70px] lg:text-[75px] xl:text-[80px]  leading-[54px] md:leading-[70px] lg:leading-[110px]"
            )}
          >
          Developing user-centered designs for the ultimate user experience.
            <motion.div
              onMouseMove={onMouseMove}
              onMouseLeave={onMouseLeave}
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.7 }}
              ref={ref}
              style={{ x: springX, y: springY }}
              className=" rounded-[50%] hidden md:inline-block   ml-2 scale-50  left-[72%] bottom-[0px]"
            >
              <div className="cursor-pointer group ">
                <div
                  onMouseOver={() => {
                    setIsvideo(true);
                  }}
                  onMouseLeave={() => {
                    setIsvideo(false);
                    setActive(true);
                  }}
                  className="lg:w-[80px] hover:scale-[1.5] duration-700 overflow-auto lg:h-[80px] w-[60px] h-[60px] bg-black  translate-x-5  relative    flex items-center justify-center translate-y-2  rounded-[50%]"
                >
                  <Play
                    fill={"#ffff"}
                    className="  left-[37%] w-4 h-4 lg:w-6 absolute lg:h-6  text-white"
                  />

                  {isHover && (
                    <video
                      className="hidden group-hover:flex"
                      id="894391dc-114c-b610-cf6a-24b30aef74b5-video"
                      data-wf-ignore="true"
                      data-object-fit="cover"
                      autoPlay
                      loop
                    >
                      <source
                        src="https://assets-global.website-files.com/63c8ac820bec5c25b5b58292/63ec8d6240c3a45e37324acb_OF_Reel2_clean-transcode.mp4"
                        data-wf-ignore="true"
                      ></source>
                    </video>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.h1>
        </div>
        { isDesktop && !isVideo  && <BlurryCursor isActive={false} />}
      </>
    );
};
