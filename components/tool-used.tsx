import React from "react";
import { ProjectTitle } from "./project-title";
import FIGMA from "@/public/images/tool-ui/logos_figma.png";
import MOCKUP from "@/public/images/tool-ui/Mockup icon 1.png";
import ADOBEAI from "@/public/images/tool-ui/logos_adobe-illustrator.png";
import ADOBEPS from "@/public/images/tool-ui/logos_adobe-photoshop.png";
import Image, { StaticImageData } from "next/image";

type ToolUsedTypes = {
  figma: boolean;
  mockup: boolean;
  ai: boolean;
  ps?: boolean;
  color?: any;
};

type ToolContainerTypes = {
  src: StaticImageData;
  name: string;
};

const ToolContainer: React.FC<ToolContainerTypes> = ({ src, name }) => {
  return (
    <div className="flex flex-col  space-y-3 w-[80px] items-center ">
      <Image alt="tool-used"  className=" scale-75 md:scale-100" src={src} />
      <p className="text-xs text-center">{name}</p>
    </div>
  );
};

export const ToolUsed: React.FC<ToolUsedTypes> = ({
  figma,
  mockup,
  ai,
  ps,
  color = "yellow",
}) => {
  return (
    <div className="w-full">
      <ProjectTitle color={color} title="Tools Used" />
      <div className="flex justify-between">
        {figma && <ToolContainer src={FIGMA} name="Figma" />}
        {mockup && <ToolContainer src={MOCKUP} name="Mockup" />}
        {ai && <ToolContainer src={ADOBEAI} name="Adobe Illustrator" />}
        {ps && <ToolContainer src={ADOBEPS} name="Adobe Photoshop" />}
      </div>
    </div>
  );
};
