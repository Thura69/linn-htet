'use client'
import Link from "next/link";
import COVER from "@/public/images/graphic-2.jpg";
import { useScroll, useTransform, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type ProjectCardType = {
  name: string;
  client: string;
  link: string;
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
  const { ref, inView } = useInView({
    triggerOnce: true,

    threshold: 0.5,
  });

  const { scrollYProgress } = useScroll({
    //@ts-ignore
    target: container,

    offset: ["start start", "end start"],
  });


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
     <div className="  inline-block">
     <Image
        src={`/images/${data.src}`}
        ref={ref}
        className="w-auto"
        width={500}
        height={500}
        alt="image"
        style={{
          opacity: inView ? 1 : 0,

          transition: "opacity 0.2s cubic-bezier(0.3, 0.2, 0.2, 0.8)",
        }}
      />
     </div>
    </Link>
  );
}
import Image from "next/image";
import { useRef } from "react";

export default ProjectCard;
