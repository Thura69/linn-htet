"use client";
import React, { useEffect, useState } from "react";

import { Montserrat, Indie_Flower } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Montserrat({ subsets: ["latin"], weight: "400" });

export const Logo = () => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    setStart(true);
  }, []);

  if (start)
    return (
      <div
        className={cn(
          inter.className,
          " font-semibold items-end flex flex-col gap-[-10px]    space-y-[-8px]  md:text-[16px] text-[14px]"
        )}
      >
        <p className=" font-bold">Linn Htet Aung.</p>
        {/* <p>
      A
      <span className=" duration-1000 inline-block">
        u
      </span>
      ng.
    </p> */}
      </div>
    );
};
