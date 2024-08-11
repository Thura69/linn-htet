"use client";
import { HeroContantText } from "@/components/hero/hero-contant-text";
import React, { useState } from "react";
import LINN from "@/public/images/linn-htet.jpg";
import Image from "next/image";
import { MiniFooter } from "@/components/footer/mini-footer";
import Link from "next/link";
import { ArrowRightCircle, ChevronRight, ChevronsRight } from "lucide-react";
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
      <div className="container my-[40px]  flex flex-col md:flex-row mx-auto  gap-[50px]">
        <Image
          ref={refOne}
          src={LINN}
          className=" w-auto h-auto md:w-[600px] md:h-[600px] rounded"
          alt="linn"
          style={{
            opacity: inViewOne ? 1 : 0,

            transition: "opacity 0.2s cubic-bezier(0.3, 0.2, 0.2, 0.8)",
          }}
        />
        <div className="md:w-[45%]  space-y-10 mb-10 mb:mb-0 md:space-y-5">
          <h3>
            My passion for design and technology ignited early on, but it was
            during my university years that I truly found my calling in UI/UX
            design. Though I initially pursued a different path, I couldn&apos;t
            ignore the creativity and satisfaction I felt when crafting user
            interfaces. I knew then that my professional journey would be in
            UI/UX design, and I&apos;ve never looked back. What started as a hobby
            quickly turned into a fulfilling career, where I now get to blend my
            love for aesthetics and functionality to create meaningful user
            experiences.
          </h3>
          <div>
            <h3 className="font-bold text-[#0A66C2] text-[24px]">Trust</h3>
            <p>
            Empathy drives my design process. Understanding the user&apos;s needs and challenges is key to creating interfaces that are not only functional but also meaningful and satisfying to use.
            </p>
          </div>
          <div>
          <h3 className="font-bold text-[#0A66C2] text-[24px]">Creativity</h3>
            <p>
            Creativity is at a heart of my work. Every design decision is an opportunity to explore new ideas and craft visually compelling interfaces that resonate with users on an emotional level.
            </p>
          </div>
          <div>
          <h3 className="font-bold text-[#0A66C2] text-[24px]">Innovation</h3>
            <p>
            Innovation pushes me to constantly explore new trends, tools, and methodologies. It&apos;s about staying ahead of the curve and delivering solutions that are not only relevant today but will stand the test of time. I would be thrilled to bring my passion for design and user experience to your next project, and to help create digital products that truly make a difference!
            </p>
          </div>

          <div className="flex  gap-5">
            <div className=" flex gap-3">
              <ChevronsRight />
              <Link
                target="_blank"
                className="hover:underline"
                href={"/contact/resume"}
              >
                Resume
              </Link>
            </div>
            <div className=" flex gap-3">
              <ChevronsRight />
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
