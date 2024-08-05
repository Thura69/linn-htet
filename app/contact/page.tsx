"use client";
import { HeroContantText } from "@/components/hero/hero-contant-text";
import React, { useState } from "react";
import LINN from "@/public/images/linn-htet.jpg";
import Image from "next/image";
import { MiniFooter } from "@/components/footer/mini-footer";
import Link from "next/link";
import { ArrowRightCircle } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useMediaQuery } from "react-responsive";
import ViewBlurryCursor from "@/components/view-cursor";
import { MobileMenu } from "@/components/mobile-menu";

export default function Page() {
  const [active, setActive] = useState(false);

  const { ref: refOne, inView: inViewOne } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const isDesktop = useMediaQuery({
    query: "(min-width: 624px)",
  });

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      {/* <HeroContantText title="Reach out to me directly for any inquiries or collaboration opportunities" /> */}
      <div className="container my-5  flex flex-col md:flex-row mx-auto gap-[50px]">
        <Image
          ref={refOne}
          src={LINN}
          className="md:w-[50%] rounded"
          alt="linn"
          style={{
            opacity: inViewOne ? 1 : 0,

            transition: "opacity 0.2s cubic-bezier(0.3, 0.2, 0.2, 0.8)",
          }}
        />
        <div className="md:w-[50%] space-y-5">
          <h3>
            I am Linn Htet Aung, a reportage and portrait photographer
            originally from Kharkiv, Ukraine, now living and working in Lisbon,
            Portugal. My work captures the essence of fleeting moments, focusing
            on the dynamic interplay between time and our place within it.
          </h3>
          <h3>
            {" "}
            My photography is guided by three core values: trust, love, and
            courage.
          </h3>
          <div>
            <h3 className="font-bold text-[18px]">Trust</h3>
            <p>
              Trust between the photographer and the model leads to candid and
              beautiful images. It not only enhances the results but also makes
              the process enjoyable.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[18px]">Love</h3>
            <p>
              Love fuels my passion for photography. Every time I press the
              shutter, it&apos;s an expression of this deep affection, even if I
              don&apos;t always realize it.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[18px]">Courage</h3>
            <p>
              Courage means being open to new views, ideas, and feelings.
              Without it, photography loses its meaning.
            </p>
          </div>
          <p>
            I would be delighted to share my visual perception of the world with
            you!
          </p>

          <div className="flex gap-5">
            <div className=" flex gap-3">
              <ArrowRightCircle />
              <Link
                target="_blank"
                className="hover:underline"
                href={
                  "/contact/resume"
                }
              >
                Resume
              </Link>
            </div>
            <div className=" flex gap-3">
              <ArrowRightCircle />
              <a className="hover:underline" href="mailto:someone@example.com">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <MiniFooter />
      {isDesktop && <ViewBlurryCursor isActive={active} />}
      <MobileMenu />
    </ReactLenis>
  );
}
