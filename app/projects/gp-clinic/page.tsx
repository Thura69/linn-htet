"use client";
import BlurryCursor from "@/components/cursor";
import Footer from "@/components/footer/footer";
import { HeroContantText } from "@/components/hero/hero-contant-text";
import { ReactLenis } from "@studio-freight/react-lenis";
import React, { useEffect, useState } from "react";
import GPCLINIC from "@/public/images/gp-clinic/Medicine-cuate 1.png";
import LOGO from "@/public/images/gp-clinic/Group 22.png";
import Image from "next/image";
import {
  CHECKOUT,
  DOCTORPROJECTDATA,
  FLOWDIAGRAM,
  HIGHUIDESIGN,
  MISSEDQUEUE,
  PROJECTBACKGROUND,
  PROJECTCATEGORYDATA,
  PROJECTSUMMARY,
  UPCOMINGQUEUE,
  WIREFRAME,
} from "@/components/gp-clinic/data";
import { ProjectCategory } from "@/components/projects/project-category";
import { ListShowData } from "@/components/bread-box/list-show";
import ProjectDuration from "@/components/gp-clinic/project-duration";
import { ToolUsed } from "@/components/tool-used";
import { ProjectTitle } from "@/components/project-title";
import { ContentSection } from "@/components/bread-box/content-section";
import HIGHPROTO from "@/public/images/gp-clinic/3.png";
import UIPRESENTATIONONE from "@/public/images/gp-clinic/Group 26.png";
import UIPRESENTATIONTWO from "@/public/images/gp-clinic/Group 3378.png";
import UIPRESENTATIONTHREE from "@/public/images/gp-clinic/Frame 34583.png";
import UIPRESENTATIONFOUR from "@/public/images/gp-clinic/Frame 163.png";
import UIPRESENTATIONFIVE from "@/public/images/gp-clinic/Frame 34584.png";
import UIPRESENTATIONSIX from "@/public/images/gp-clinic/Frame 34585.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { MobileMenu } from "@/components/mobile-menu";
import { useMediaQuery } from "react-responsive";

function Page() {
  const [active, setActive] = useState(false);
  const isDesktop = useMediaQuery({
    query: "(min-width: 624px)",
  });

  const handleHover = () => {
    setActive((prev) => !prev);
  };

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
        <div className=" bg-[#4062FF]">
          <div className="container">
            <HeroContantText
              handleHover={handleHover}
              indent={false}
              active={active}
              title="GP Clinics"
            />
          </div>
        </div>
        <div className="bg-white overflow-hidden container mx-auto">
          <div className="py-5  pb-[200px]  space-y-10 lg:space-y-16">
            {/* first section */}
            <div className="w-full  gap-[20px] flex flex-col md:flex-row items-center bg-white">
              <Image
                alt="bread-one"
                className="w-full md:w-[60%] "
                src={GPCLINIC}
              />
              <div className="w-full md:w-[50%] flex gap-[40px] flex-col justify-start items-center">
                <Image
                  alt="bread-logo"
                  className="w-[40%]"
                  src={LOGO}
                  width={300}
                  height={300}
                />

                <p  className="w-[90%]">
                  Stop using the app if it doesn&apos;t share enough information with
                  the shop. My goal is to give customers all the details they
                  need.
                </p>
              </div>
            </div>

            {/* first section */}
            <div className=" grid grid-cols-2 justify-center items-center gap-4">
              {PROJECTCATEGORYDATA.map((data, index) => (
                <ProjectCategory
                  color="blue"
                  key={data.id}
                  title={data.title}
                  data={data.data}
                />
              ))}
            </div>

            {/* project background */}
            {PROJECTBACKGROUND.map((e, index) => (
              <ListShowData
                color="blue"
                key={index}
                title={e.title}
                data={e.data}
              />
            ))}
            {/* project background */}

            {/* project duration */}

            <div className="flex md:flex-row flex-col md:space-y-0 space-y-10">
              <ProjectDuration />
              <ToolUsed color={"blue"} figma mockup ai />
            </div>

            {/* project duration */}

            <ProjectTitle
              color="blue"
              title="Project Instructions"
              amount="xl"
            />

            {/* Doctor */}
            {DOCTORPROJECTDATA.map((e, index) => (
              <ListShowData
                color="blue"
                key={index}
                title={e.title}
                data={e.data}
              />
            ))}
            {/* Doctor */}

            {/* upcoming queue */}
            {UPCOMINGQUEUE.map((e, index) => (
              <ListShowData
                color="blue"
                key={index}
                title={e.title}
                data={e.data}
              />
            ))}
            {/* upcoming queue */}

            {/* missing queue */}
            {MISSEDQUEUE.map((e, index) => (
              <ListShowData
                color="blue"
                key={index}
                title={e.title}
                data={e.data}
              />
            ))}
            {/* missing queue */}

            {/* checkoput */}
            {CHECKOUT.map((e, index) => (
              <ListShowData
                color="blue"
                key={index}
                title={e.title}
                data={e.data}
              />
            ))}
            {/* checkoput */}

            {/* JOURNEY MAP */}
            {FLOWDIAGRAM.map((e, index) => (
              <div key={index} className=" space-y-3">
                <ProjectTitle color="blue" title={e.title} />
                <p >
                  {e.data}
                </p>
                <Image
                  src={e.image}
                  alt="ee"
                  className="w-[600px]  pt-[60px] h-auto mx-auto"
                />
              </div>
            ))}
            {/* JOURNEY MAP */}

            {/* WIREFRAME  */}
            {WIREFRAME.map((e, index) => (
              <div key={index}>
                <ListShowData color="blue" title={e.title} data={e.data} />
                <Image
                  src={e.image}
                  alt="ee"
                  className="w-[600px]  pt-[60px] h-auto mx-auto"
                />
                <p
                  className="mx-auto text-center my-[20px]"
                >
                  The initial wireframe was crafted using a mockup application.
                </p>
              </div>
            ))}

            {/* WIREFRAME  */}

            {/* HEIGHTUIDESIGN */}
            {HIGHUIDESIGN.map((e, index) => (
              <ContentSection
                key={index}
                col="1"
                title={e.title}
                data={e.data}
                images={e.images}
                color={"blue"}
              />
            ))}
            {/* HEIGHTUIDESIGN */}

            {/* HIGHTPROTO */}
            <div>
              <ProjectTitle color="blue" title={"High-Fidelity Prototype"} />
              <Image
                src={HIGHPROTO}
                alt="ee"
                className="w-[600px]  pt-[60px] h-auto mx-auto"
              />
              <p
                className="mx-auto text-center my-[20px]"
              >
                Incorporating high-fidelity screens with a seamless user
                experience, promoting a user-centric design approach accessible
                to all users.
              </p>
            </div>
            {/* HIGHTPROTO */}

            <ProjectTitle color="blue" title="UI Presentation" amount="xl" />

            <div className=" space-y-6">
              <Image
                src={UIPRESENTATIONONE}
                alt="ee"
                className="w-[800px]  pt-[60px] h-auto mx-auto"
              />
              <Image
                src={UIPRESENTATIONTWO}
                alt="ee"
                className="w-[800px]  pt-[60px] h-auto mx-auto"
              />
              <Image
                src={UIPRESENTATIONTHREE}
                alt="ee"
                className="w-[800px]  pt-[60px] h-auto mx-auto"
              />
              <Image
                src={UIPRESENTATIONFOUR}
                alt="ee"
                className="w-[800px]  pt-[60px] h-auto mx-auto"
              />
              <Image
                src={UIPRESENTATIONFIVE}
                alt="ee"
                className="w-[800px]  pt-[60px] h-auto mx-auto"
              />
              <Image
                src={UIPRESENTATIONSIX}
                alt="ee"
                className="w-[800px]  pt-[60px] h-auto mx-auto"
              />
            </div>



            {/* project summary */}
            {PROJECTSUMMARY.map((e, index) => (
              <div key={index} className=" space-y-3">
                <ProjectTitle color="blue" title={e.title} />
                <p >
                  {e.data}
                </p>
                <Image
                  src={e.image}
                  alt="ee"
                  className="w-[600px]  pt-[60px] h-auto mx-auto"
                />
              </div>
            ))}

            {/* project summary */}
          </div>
        </div>
        <Footer />
        <MobileMenu/>
        {isDesktop && <BlurryCursor isActive={active} />}
      </ReactLenis>
    </>
  );
}

export default Page;
