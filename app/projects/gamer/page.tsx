"use client";
import { useState } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import { HeroContantText } from "@/components/hero/hero-contant-text";
import { ProjectTitle } from "@/components/project-title";
import Footer from "@/components/footer/footer";
import BlurryCursor from "@/components/cursor";
import Image from "next/image";
import IMG_1 from "@/public/images/gamer/1.png";
import IMG_2 from "@/public/images/gamer/2-2.png";
import IMG_3 from "@/public/images/gamer/3-2.png";
import IMG_4 from "@/public/images/gamer/4.png";
import IMG_5 from "@/public/images/gamer/5-2.png";
import IMG_6 from "@/public/images/gamer/6-2.png";
import IMG_7 from "@/public/images/gamer/9-2.png";
import IMG_8 from '@/public/images/gamer/7.png';
import IMG_9 from '@/public/images/gamer/8-2.png'
import { MobileMenu } from "@/components/mobile-menu";


function Page() {
  const [active, setActive] = useState(false);

  const handleHover = () => {
    setActive((prev) => !prev);
  };

  return (
    <>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
        <div className=" bg-[#FFC529]">
          <div className="container">
            <HeroContantText
              handleHover={handleHover}
              indent={false}
              active={active}
              title="Gamer Streaming"
            />
          </div>
        </div>
        <div className="bg-white overflow-hidden container mx-auto">
          <div className="py-[100px]  pb-[200px]  space-y-20">
            {/* part-one */}
            <div>
              <ProjectTitle color="black" title="Gamer Streaming Website" />
              <p className="md:w-[80%]">
                The primary purpose of the streaming site is to enable users to
                watch games online and purchase points with MMK currency. These
                points are then send a gift to the streamers. Additionally,
                users can link their Facebook accounts and allocate points to
                their favorite streamers.
              </p>
            </div>
            {/* part-one */}
            {/* part-two */}
            <div className=" space-y-10">
              <ProjectTitle color="black" title="Project Details" />
              <div>
                <p className="md:w-[80%]">
                  For streamers, the initial step involves registering and
                  awaiting approval from the website owner. Once accepted, they
                  can start streaming and accumulate points from viewers.
                </p>
                <p className="md:w-[80%]">
                  Viewers, on the other hand, don&apos;t require registration. They
                  simply need to log in with their Facebook accounts to watch
                  and reward streamers with points.
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-5">
                <Image
                  alt="i-house"
                  className="md:w-[80%] mx-auto"
                  src={IMG_1}
                />
                <Image
                  alt="i-house"
                  className="md:w-[80%] mx-auto"
                  src={IMG_2}
                />
                <Image
                  alt="i-house"
                  className="md:w-[80%] mx-auto"
                  src={IMG_3}
                />
              </div>
            </div>
            {/* part-two */}
            {/* part-three */}
            <div>
              <ProjectTitle color="black" title="Slide Menu" />
              <p className="md:w-[80%]">
                The slide menu provides access to various sections. &quot;Home&quot;
                displays subscribed streamers and featured categories, &quot;Profile&quot;
                allows user profile editing, &quot;Categories&quot; enables selection of
                streaming types, &quot;Points&quot; is for purchasing and topping up,
                &quot;User Setting&quot; for personal adjustments, and &quot;Logout&quot; for
                exiting the account.
              </p>
            </div>
            {/* part-three */}

            {/* part-four */}
            <div>
              <ProjectTitle color="black" title="Home Screen" />
              <div className="flex flex-col md:flex-row gap-5">
                <div className=" space-y-4 md:w-[50%]">
                  <Image
                    alt="i-house"
                    className="w-[900px] "
                    src={IMG_4}
                  />
                  <p className="md:w-[80%]">
                    The Home screen features Point rates for understanding the
                    currency ratio precisely, Top streamers followed by the user
                    or featured, and Stream Category providing various streaming
                    options to filter favorites.
                  </p>
                </div>
                <div className=" space-y-4 md:w-[50%]">
                  <Image
                    alt="i-house"
                    className="w-[900px] "
                    src={IMG_5}
                  />
                  <p className="md:w-[80%]">
                    The profile screen will display your social media
                    information and active bio, allowing you to share a
                    description of yourself with subscribers.
                  </p>
                </div>
              </div>
            </div>
            {/* part-four */}
            {/* part-five */}
            <div>
              <div className="flex md:flex-row flex-col gap-5">
                <div className=" space-y-4 md:w-[50%]">
                  <ProjectTitle color="black" title="Category" />
                  <Image
                    alt="i-house"
                    className="w-[900px] "
                    src={IMG_6}
                  />
                  <p className="md:w-[80%]">
                    The Category section presents a range of popular games for
                    selection, allowing users to view streaming videos from
                    streamers. Users can navigate through different options and
                    enjoy high-quality streaming not only for live sessions but
                    also for replaying streaming videos.
                  </p>
                </div>
                <div className=" space-y-4 md:w-[50%]">
                  <ProjectTitle color="black" title="User Setting" />
                  <Image
                    alt="i-house"
                    className="w-[900px] "
                    src={IMG_7}
                  />
                  <p className="md:w-[80%]">
                    User information is considered for account security
                    purposes, including contact details such as email and phone
                    number. Users also have options to deactivate or disable
                    their accounts.
                  </p>
                </div>
              </div>
            </div>
            {/* part-five */}
            {/* part-six */}
            <div className=" space-y-10">
              <ProjectTitle color="black" title="Point System" />
              <div className="flex flex-col md:flex-row gap-5">
                <div className=" space-y-4 md:w-[50%]">
                  <Image
                    alt="i-house"
                    className="w-[900px] "
                    src={IMG_8}
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className=" space-y-4 md:w-[50%]">
                  <Image
                    alt="i-house"
                    className="w-[900px] "
                    src={IMG_9}
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
              <p className="md:w-[80%]">
              In the point system, users can purchase points through their banking application, selecting from various packages. Once purchased, users receive the points, which can then be sent as gifts to streamers.
              </p>
            </div>
            {/* part-six */}
          </div>
        </div>
        <Footer />
        <MobileMenu/>
        <BlurryCursor isActive={active} />
      </ReactLenis>
    </>
  );
}

export default Page;
