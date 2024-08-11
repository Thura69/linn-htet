"use client";
import { SocialLinksData } from "@/utils/social-links-data";
import React, { useState } from "react";
import { Text } from "./text";
import LinkButton from "./links-button";

export const SocialLinks = () => {
  const [toggle, setTogge] = useState(false);

  return (
    <div>
      <ul>
        <div className="flex gap-3   my-4 items-center text-[14px] md:text-md justify-start">
          <div className="w-[10px] h-[10px] bg-textSecondary  rounded-full"></div>
          <h3>Social Links</h3>
        </div>
        <ul className="flex flex-col gap-2">
          {SocialLinksData.map((e, index) => (
            <Text varient="primary" link key={index}>
              {e.name}
            </Text>
          ))}
        </ul>
      </ul>
    </div>
  );
};
