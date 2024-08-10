"use client";

import BlurryCursor from "@/components/cursor";
import { HeroContant } from "@/components/hero/hero-contant";
import { MobileMenu } from "@/components/mobile-menu";
import { Text } from "@/components/text";
import Image from "next/image";
import { ReactLenis } from "@studio-freight/react-lenis";
import { SocialLinks } from "@/components/social-links";
import LinkButton from "@/components/links-button";
import { Projects } from "@/components/projects";
import Footer from "@/components/footer/footer";
import { useMediaQuery } from "react-responsive";
import { ArrowDownCircle } from "lucide-react";
import { CustomImageLoader } from "@/components/custom-imageloader";

export default function Home() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 624px)",
  });
  return (
    <>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
        <HeroContant />
        <div className="container  mx-auto">
          <div className="grid  grid-cols-2  col-end-2">
            <div className="flex gap-3 items-center justify-start">
              <ArrowDownCircle className="w-5 h-5 md:w-6 md:h-6" />
              <h3>PROJECTS</h3>
            </div>
          </div>
        <div className="w-[754px] mt-[100px] mb-[500px] h-[449px]">
        <CustomImageLoader />
        </div>

          {/* <Projects /> */}
        </div>
        <Footer />

        <MobileMenu />
      </ReactLenis>
    </>
  );
}
