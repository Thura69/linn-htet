'use client'
import { SocialLinksData } from "@/utils/social-links-data";
import React, { useState } from "react";
import { Text } from "./text";
import LinkButton from "./links-button";

export const SocialLinks = () => {
    const [toggle,setTogge] = useState(false);

  return (
    <div>
      <ul>
     <LinkButton direction='dot' label="Social Links" isActive={false} toggleMenu={setTogge} />
        {SocialLinksData.map((e, index) => (
          <Text varient='primary' link key={index}>
            {e.name}
          </Text>
        ))}
      </ul>
    </div>
  );
};
