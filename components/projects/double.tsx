"use client";

import { cn } from "@/lib/utils";
import styles from "./style.module.scss";
import Image from "next/image";
import { useRef, useState } from "react";
import Link from "next/link";

export default function Index({
  projects,
  reversed,
}: {
  projects: any;
  reversed?: any;
}) {
  const [isLoading, setLoading] = useState(true);
  const [isLoading2, setLoading2] = useState(true);

  const firstImage = useRef<any>(null);
  const secondImage = useRef<any>(null);
  let requestAnimationFrameId: any = null;

  let xPercent = reversed ? 100 : 0;
  let currentXPercent = reversed ? 100 : 0;
  const speed = 0.15;

  const manageMouseMove = (e: any) => {
    const { clientX } = e;
    xPercent = (clientX / window.innerWidth) * 100;

    if (!requestAnimationFrameId) {
      requestAnimationFrameId = window.requestAnimationFrame(animate);
    }
  };

  const animate = async () => {
    //Add easing to the animation
    const xPercentDelta = xPercent - currentXPercent;
    currentXPercent = currentXPercent + xPercentDelta * speed;

    //Change width of images between 33.33% and 66.66% based on cursor
    const firstImagePercent = 66.66 - currentXPercent * 0.33;
    const secondImagePercent = 33.33 + currentXPercent * 0.33;

    firstImage.current.style.width = `${firstImagePercent}%`;
    secondImage.current.style.width = `${secondImagePercent}%`;

    if (Math.round(xPercent) == Math.round(currentXPercent)) {
      window.cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    } else {
      window.requestAnimationFrame(animate);
    }
  };

  return (
    <div
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className={cn(styles.double)}
    >
      <div ref={firstImage} className={styles.imageContainer}>
        <Link href={projects[0].link}>
          <div className={styles.stretchyWrapper}>
            {/* <BlurImage imgUrl={projects[0].src}/> */}
            <Image
              src={`/images/${projects[0].src}`}
              className={cn(
                " cursor-pointer ",
                isLoading
                  ? "grayscale blur-sm scale-110"
                  : "grayscale-0 blur-0 scale-100"
              )}
              fill={true}
              alt={"image"}
              onLoadingComplete={() => setLoading(false)}
            />
          </div>
        </Link>
        <div className={styles.body}>
          <h3>{projects[0].name}</h3>
          <p>{projects[0].description}</p>
          <p>{projects[0].year}</p>
        </div>
      </div>

      <div ref={secondImage} className={styles.imageContainer}>
        <Link href={projects[1].link}>
          <div className={styles.stretchyWrapper}>
            <Image
              src={`/images/${projects[1].src}`}
              className={cn(
                " cursor-pointer ",
                isLoading2
                  ? "grayscale blur-2xl scale-110"
                  : "grayscale-0 blur-0 scale-100"
              )}
              blurDataURL={`/images/${projects[1].src}`}
              placeholder="blur"
              fill={true}
              alt={"image"}
              onLoadingComplete={() => setLoading2(false)}
            />
          </div>
        </Link>
        <div className={styles.body}>
          <h3>{projects[1].name}</h3>
          <p>{projects[1].description}</p>
          <p>{projects[1].year}</p>
        </div>
      </div>
    </div>
  );
}
