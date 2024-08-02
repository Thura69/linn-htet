"use client";
import Link from "next/link";
import COVER from "@/public/images/graphic-2.jpg";
import { useScroll, useTransform, motion } from "framer-motion";

type ProjectCardType = {
  name: string;
  client: string;
  link:string,
  description: string;
  src: string;
  year: number;
};

function ProjectCard({
  data,
  handleMouseEnter,
  handleMouseLeave,
}: {
  data: ProjectCardType;
  handleMouseEnter: any;
  handleMouseLeave: any;
}) {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    //@ts-ignore
    target: container,

    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0px", "400px"]);

  return (
    <Link
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      href={data.link}
      className="relative space-y-2 "
    >
      <div>
        <p>{data.name}</p>
        <p>{data.client}</p>
      </div>
      <Image
        src={`/images/${data.src}`}
        className="w-auto"
        width={500}
        height={500}
        alt="image"
        style={{ objectFit: "cover" }}
      />
    </Link>
  );
}
import Image from "next/image";
import { useRef } from "react";

export default ProjectCard;
