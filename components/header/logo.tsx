"use client";
import React, { useEffect, useState } from "react";

import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Montserrat({ subsets: ["latin"] });

export const Logo = () => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    setStart(true);
  }, []);

  if(start) return (
    <div
      className={cn(
        inter.className,
        "font-bold items-end flex flex-col gap-[-10px]   space-y-[-8px] text-[22px]"
      )}
    >
      <p>
        {" "}
        L<div className=" animate-bounce inline-block">i</div>nn Htet{" "}
      </p>
      <p>Aung.</p>
    </div>
  );
};
