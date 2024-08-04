'use client'
import React, { useEffect, useState } from "react";
import Double from "./projects/double";
import MobileProject from "./projects/mobile-project";
import { projects } from "./projects/data";
import { useMediaQuery } from "react-responsive";

export const Projects = () => {
  const [isStart, setIsStart] = useState(false);

  const isDesktop = useMediaQuery({
    query: "(min-width: 624px)",
  });

  useEffect(()=>{
    setIsStart(true)
  },[])
  

  return (
    <>
      { isStart && isDesktop ? (
        <div className="flex flex-col py-[50px] md:pt-[20px] md:pb-[100px] gap-4">
          <Double projects={[projects[0], projects[1]]} />
          <Double projects={[projects[2], projects[3]]} reversed={true} />
          <Double projects={[projects[4], projects[5]]} />
          <Double projects={[projects[6], projects[7]]} reversed={true} />
          
        </div>
      ) : (
        <div className="flex flex-col py-[50px]  gap-4">
          <MobileProject projects={[projects[0]]} />
          <MobileProject projects={[projects[1]]} />
          <MobileProject projects={[projects[2]]} />
          <MobileProject projects={[projects[3]]} />
          <MobileProject projects={[projects[4]]} />
          <MobileProject projects={[projects[5]]} />
          <MobileProject projects={[projects[6]]} />
          <MobileProject projects={[projects[7]]} />
          <MobileProject projects={[projects[8]]} />

        </div>
      )}
    </>
  );
};
