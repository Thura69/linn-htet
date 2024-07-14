"use client";
import BlurryCursor from "@/components/cursor";
import { HeroContantText } from "@/components/hero/hero-contant-text";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import BreadOne from "@/public/images/bread-box/Baker-cuate 1.png";
import BreadLogo from "@/public/images/bread-box/Frame 5.png";
import BreadSubOne from "@/public/images/bread-box/Frame 18.png";
import BreadSubTwo from "@/public/images/bread-box/Frame 19.png";
import BreadSubThree from "@/public/images/bread-box/Frame 20.png";
import BreadSubFour from "@/public/images/bread-box/Frame 18-2.png";
import BreadSubFive from "@/public/images/bread-box/Frame 19-2.png";
import BreadSubSix from "@/public/images/bread-box/Frame 20-2.png";
import FOODPANDA from "@/public/images/bread-box/foodpanda.png";
import FOODPANDAMOCKUP from "@/public/images/bread-box/foodpanda-mock.png";
import FOODPANDAMOCKUPTWO from "@/public/images/bread-box/Frame 151.png";
import GRABLOGO from "@/public/images/bread-box/grabfood-logo-freelogovectors 1.png";
import GRAPMOCKUP from "@/public/images/bread-box/iphone-15-pro-on-white-background-v6-front-view 1.png";
import GRAPMOCKUPTWO from "@/public/images/bread-box/Frame 34577.png";
import {
  COMPETITIVEANALYSIS,
  FLOWDIAGRAM,
  GOODPOINTDATA,
  GRABGOODPOINT,
  GRABPAINPOINT,
  HIGHPROTOTYPEDATA,
  HIGHUIDESIGN,
  PAINPOINTDATA,
  PERSONASDATA,
  POSSIBLESOLUTIONDATA,
  PROBLEMSTATEDATA,
  PROJECTCATEGORYDATA,
  PROJECTSUMMARY,
  PROTOTYPEEXPERIENCE,
  RESEARCHRESULTDATA,
  TASKLISTDATA,
  USERJOURNEYMAP,
  USERSTORYBOARD,
  USERSURVEYDATA,
  WIREFRAMEDATA,
} from "@/components/bread-box/data";
import { ListShowData } from "@/components/bread-box/list-show";
import ProjectDuration from "@/components/bread-box/project-length";
import { ToolUsed } from "@/components/tool-used";
import { ProjectCategory } from "@/components/projects/project-category";
import { ProjectTitle } from "@/components/project-title";
import ProgressBar from "@ramonak/react-progress-bar";
import { ProjectProgressBar } from "@/components/projects/progress-bar";
import { PersonasShow } from "@/components/projects/personas";
import { ContentSection } from "@/components/bread-box/content-section";
import { StoryCard } from "@/components/bread-box/story-card";
import { Content } from "@/components/bread-box/content";
import ACTIONMODE from "@/public/images/bread-box/Frame 34580.png";
import { SquareMap } from "@/components/bread-box/task-list-data";
import Footer from "@/components/footer/footer";
import { ReactLenis } from "@studio-freight/react-lenis";
import AOS from "aos";
import "aos/dist/aos.css";

function Page() {
  const [active, setActive] = useState(false);

  const handleHover = () => {
    setActive((prev) => !prev);
  };

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
        <div className=" bg-[#FFC529]">
          <div className="container">
            <HeroContantText
              handleHover={handleHover}
              indent={false}
              active={active}
              title="Bread Box"
            />
          </div>
        </div>
        <div className="bg-white overflow-hidden  container mx-auto">
          <div className="py-5  pb-[200px]  space-y-20">
            {/* first section */}
            <div className="w-full  gap-[20px] flex items-center bg-white">
              <Image
                alt="bread-one"
                className="w-[60%] "
                src={BreadOne}
                width={400}
                height={400}
              />
              <div className="w-[50%] flex gap-[40px] flex-col justify-start items-center">
                <Image
                  alt="bread-logo"
                  className="w-[40%]"
                  src={BreadLogo}
                  width={300}
                  height={300}
                />

                <p
                  data-aos="zoom-out-left"
                  data-aos-duration="600"
                  className="w-[90%]"
                >
                  Stop using the app if it doesn&apos;t share enough information with
                  the shop. My goal is to give customers all the details they
                  need.
                </p>
              </div>
            </div>

            <h3
              data-aos="zoom-out-left"
              data-aos-duration="600"
              className=" text-[18px] my-4 mb-6 indent-[100px]"
            >
              Introducing our innovative food shop application designed to
              streamline the ordering process and reduce wait times. In response
              to the high demand at food shops, our app provides real-time
              updates on menu availability, ensuring customers are informed
              before they arrive. By allowing customers to order from home and
              pick up their items quickly, we eliminate long queues and prevent
              the disappointment of unavailable menu items. Our goal is to equip
              customers with all the necessary information, enhancing their
              overall experience and efficiency in ordering.
            </h3>
            {/* first section */}

            <div className=" grid grid-cols-3 justify-center items-center gap-4">
              {PROJECTCATEGORYDATA.map((data, index) => (
                <ProjectCategory
                  key={data.id}
                  color="yellow"
                  title={data.title}
                  data={data.data}
                />
              ))}
            </div>

            {/* second section */}

            {PROBLEMSTATEDATA.map((e, index) => (
              <ListShowData key={index} title={e.title} data={e.data} />
            ))}

            {POSSIBLESOLUTIONDATA.map((e, index) => (
              <ListShowData key={index} title={e.title} data={e.data} />
            ))}

            <div className="flex">
              <ProjectDuration />
              <ToolUsed figma mockup ai ps />
            </div>

            {COMPETITIVEANALYSIS.map((e, index) => (
              <ListShowData key={index} title={e.title} data={e.data} />
            ))}

            {/* FOOD PANDA SECTION */}

            <div>
              <div className=" flex items-center justify-center">
                <Image alt="food" src={FOODPANDA} width={150} height={150} />
              </div>
              <div className="flex  items-center gap-[30px]">
                <div className="w-[50%]">
                  {GOODPOINTDATA.map((e, index) => (
                    <ListShowData key={index} title={e.title} data={e.data} />
                  ))}
                </div>
                <Image
                  data-aos="fade-right"
                  data-aos-duration="600"
                  alt="foodmockup"
                  className="w-[50%]"
                  src={FOODPANDAMOCKUP}
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex items-center gap-[30px]">
                <Image
                  alt="foodmockup"
                  data-aos="fade-left"
                  data-aos-duration="600"
                  className="w-[50%]"
                  src={FOODPANDAMOCKUPTWO}
                  width={200}
                  height={200}
                />
                <div className="w-[50%]">
                  {PAINPOINTDATA.map((e, index) => (
                    <ListShowData key={index} title={e.title} data={e.data} />
                  ))}
                </div>
              </div>
            </div>

            {/* FOOD PANDA SECTION */}

            {/* GRAB SECTION */}
            <div>
              <div className=" flex items-center justify-center">
                <Image
                  data-aos="fade-right"
                  data-aos-duration="600"
                  alt="food"
                  src={GRABLOGO}
                  width={150}
                  height={150}
                />
              </div>
              <div className="flex  items-center gap-[30px]">
                <div className="w-[50%]">
                  {GRABGOODPOINT.map((e, index) => (
                    <ListShowData key={index} title={e.title} data={e.data} />
                  ))}
                </div>
                <Image
                  data-aos="fade-left"
                  data-aos-duration="600"
                  alt="foodmockup"
                  className="w-[50%]"
                  src={GRAPMOCKUP}
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex items-center gap-[30px]">
                <Image
                  data-aos="fade-right"
                  data-aos-duration="600"
                  alt="foodmockup"
                  className="w-[50%]"
                  src={GRAPMOCKUPTWO}
                  width={200}
                  height={200}
                />
                <div className="w-[50%]">
                  {GRABPAINPOINT.map((e, index) => (
                    <ListShowData key={index} title={e.title} data={e.data} />
                  ))}
                </div>
              </div>
            </div>

            {/* GRAB SECTION */}

            {/* Project Progress bar */}
            <div>
              {USERSURVEYDATA.map((e, index) => {
                return (
                  <div key={index}>
                    <ProjectTitle color="yellow" title={e.title} />
                    <p data-aos="fade-up" data-aos-duration="600">
                      {e.data}
                    </p>
                    <div className=" space-y-5 my-[40px]">
                      {e.progress.map((progressData, index) => (
                        <ProjectProgressBar
                          title={progressData.title}
                          percent={progressData.percent}
                          key={index}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Project Progress bar */}

            {/* Research Result */}
            {RESEARCHRESULTDATA.map((e, index) => (
              <ListShowData key={index} title={e.title} data={e.data} />
            ))}
            {/* Research Result */}

            {/* Personas */}
            <ProjectTitle color="yellow" title="User Personas" />
            {PERSONASDATA.map((e, index) => (
              <PersonasShow
                key={index}
                image={e.image}
                name={e.name}
                age={e.age}
                occupation={e.occupation}
                location={e.location}
                listData={e.listData}
              />
            ))}

            {/* Personas */}

            {/* STORY BOARD */}

            {USERSTORYBOARD.map((e, index) => (
              <div key={index}>
                <ProjectTitle color="yellow" title={e.title} />
                <p data-aos="fade-up" data-aos-duration="600">
                  {e.data}
                </p>
                <div className="flex gap-[30px] my-[30px]">
                  <Image
                    data-aos="fade-right"
                    data-aos-duration="600"
                    alt="user"
                    src={e.img}
                    width={200}
                    height={200}
                  />
                  <div className="flex flex-col justify-between">
                    <div>
                      <ProjectTitle
                        color="yellow"
                        size="25"
                        title={e.userInfo[0].title}
                      />
                      <p data-aos="fade-up" data-aos-duration="600">
                        {e.userInfo[0].data}
                      </p>
                    </div>
                    <div>
                      <ProjectTitle
                        color="yellow"
                        size="25"
                        title={e.userInfo[1].title}
                      />
                      <p data-aos="fade-up" data-aos-duration="600">
                        {e.userInfo[1].data}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap mt-[50px] gap-[50px]">
                  {e.cards.map((e, index) => (
                    <StoryCard key={index} image={e.image} name={e.data} />
                  ))}
                </div>
              </div>
            ))}

            {/* STORY BOARD */}

            {/* JOURNEY MAP */}
            <div>
              <ProjectTitle color="yellow" title={USERJOURNEYMAP[0].title!} />
              <p data-aos="fade-up" data-aos-duration="600">
                {USERJOURNEYMAP[0].data}
              </p>

              <div className="flex items-start justify-center gap-[30px] my-[30px]">
                <Image
                  data-aos="fade-up"
                  data-aos-duration="600"
                  src={USERJOURNEYMAP[1].image!}
                  className="w-[200px] h-[200px]"
                  alt="thu thu"
                  width={300}
                  height={300}
                />
                <div className=" space-y-4">
                  <p
                    data-aos="fade-up"
                    data-aos-duration="600"
                    className=" font-bold"
                  >
                    {USERJOURNEYMAP[1].name}
                  </p>
                  <p data-aos="fade-up" data-aos-duration="600">
                    {USERJOURNEYMAP[1].data}
                  </p>
                </div>
              </div>
              <Image
                data-aos="fade-up"
                data-aos-duration="600"
                src={ACTIONMODE}
                alt="actionMode"
                className="w-[1000px] my-[50px] mx-auto"
                width={200}
                height={200}
              />

              <div className=" space-y-4">
                {TASKLISTDATA.map((e, index) => (
                  <SquareMap key={index} title={e.title} data={e.data} />
                ))}
              </div>
            </div>
            {/* JOURNEY MAP */}

            {/* flowDiagram */}

            {FLOWDIAGRAM.map((e, index) => (
              <div key={index} className=" space-y-3">
                <ProjectTitle color="yellow" title={e.title} />
                <p data-aos="fade-up" data-aos-duration="600">
                  {e.data}
                </p>
                <Image
                  data-aos="fade-up"
                  data-aos-duration="600"
                  src={e.image}
                  alt="ee"
                  className="w-[600px] pt-[60px] h-auto mx-auto"
                  width={200}
                  height={200}
                />
              </div>
            ))}

            {/* flowDiagram */}

            {/* wireFrame */}

            {WIREFRAMEDATA.map((e, index) => (
              <>
                <ContentSection
                  col="3"
                  title={e.title}
                  data={e.data}
                  images={e.images}
                />
              </>
            ))}

            {/* wireFrame */}

            {/* HEIGHTUIDESIGN */}

            {HIGHUIDESIGN.map((e, index) => (
              <ContentSection
                key={index}
                col="1"
                title={e.title}
                data={e.data}
                images={e.images}
              />
            ))}

            {/* HEIGHTUIDESIGN */}

            {/* HIGHPROTOTYPEDATA */}

            {HIGHPROTOTYPEDATA.map((e, index) => (
              <ContentSection
                key={index}
                col="1"
                title={e.title}
                data={e.data}
                images={e.images}
              />
            ))}

            {/* HIGHPROTOTYPEDATA */}

            {/* Prototype */}
            {PROTOTYPEEXPERIENCE.map((e, index) => (
              <Content key={index} title={e.title} data={e.data} />
            ))}

            {/* Prototype */}

            {/* project summary */}
            {PROJECTSUMMARY.map((e, index) => (
              <ContentSection
                key={index}
                col="1"
                title={e.title}
                data={e.data}
                images={e.images}
              />
            ))}

            {/* project summary */}

            {/* second section */}
          </div>
        </div>
        <Footer />
        <BlurryCursor isActive={active} />
      </ReactLenis>
    </>
  );
}

export default Page;
