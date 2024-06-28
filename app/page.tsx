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


export default function Home() {
  return (
    <>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
        <HeroContant />
        <div className="container  mx-auto">
        <div className="grid  grid-cols-4 col-end-4">

          <LinkButton
            direction="down"
            label=" Projects"
            isActive={false}
            toggleMenu={() => {}}
          />

          <LinkButton
            direction="right"
            label="Designs"
            isActive={false}
            toggleMenu={() => {}}
          />
        </div>

         <Projects/>

        </div>
        <Footer/>


        <MobileMenu />
      </ReactLenis>
    </>
  );
}
