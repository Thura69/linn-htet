"use client";
import BlurryCursor from "@/components/cursor";
import { HeroContantText } from "@/components/hero/hero-contant-text";
import Image from "next/image";
import React, { useState } from "react";
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
import GRABLOGO from "@/public/images/bread-box/grabfood-logo-freelogovectors 1.png";
import GRAPMOCKUP from "@/public/images/bread-box/iphone-15-pro-on-white-background-v6-front-view 1.png";
import {
  COMPETITIVEANALYSIS,
  GOODPOINTDATA,
  GRABGOODPOINT,
  GRABPAINPOINT,
  PAINPOINTDATA,
  POSSIBLESOLUTIONDATA,
  PROBLEMSTATEDATA,
} from "@/components/bread-box/data";
import { ListShowData } from "@/components/bread-box/list-show";
import ProjectDuration from "@/components/bread-box/project-length";
import { ToolUsed } from "@/components/tool-used";

function Page() {
  const [active, setActive] = useState(false);

  const handleHover = () => {
    setActive((prev) => !prev);
  };

  return (
    <>
      <div className=" bg-[#e8e8e3]">
        <div className="container">
          <HeroContantText
            handleHover={handleHover}
            indent={false}
            active={active}
            title="Bread Box"
          />
        </div>
        <BlurryCursor isActive={active} />
      </div>
      <div className="bg-white  container mx-auto">
        <div className="py-5">
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
              <p className="w-[90%]">
                Stop using the app if it doesn't share enough information with
                the shop. My goal is to give customers all the details they
                need.
              </p>
            </div>
          </div>
          {/* first section */}

          <h3 className=" text-[18px] my-4 mb-6 indent-[100px]">
            Introducing our innovative food shop application designed to
            streamline the ordering process and reduce wait times. In response
            to the high demand at food shops, our app provides real-time updates
            on menu availability, ensuring customers are informed before they
            arrive. By allowing customers to order from home and pick up their
            items quickly, we eliminate long queues and prevent the
            disappointment of unavailable menu items. Our goal is to equip
            customers with all the necessary information, enhancing their
            overall experience and efficiency in ordering.
          </h3>

          {/* second section */}
          {/* <div className=" grid grid-cols-4 justify-between">
            <Image
              alt="bread-logo"
              className=" border-2"
              src={BreadSubOne}
              width={300}
              height={300}
            />
            <Image
              alt="bread-logo"
              className=" border-2"
              src={BreadSubTwo}
              width={300}
              height={300}
            />
            <Image
              alt="bread-logo"
              className=" border-2"
              src={BreadSubThree}
              width={300}
              height={300}
            />
            <Image
              alt="bread-logo"
              className=" border-2"
              src={BreadSubFour}
              width={300}
              height={300}
            />
            <Image
              alt="bread-logo"
              className=" border-2"
              src={BreadSubFive}
              width={300}
              height={300}
            />
            <Image
              alt="bread-logo"
              className="border-2"
              src={BreadSubSix}
              width={300}
              height={300}
            />
          </div> */}
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

          <div className="py-5 mt-[50px]">
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
                className="w-[50%]"
                src={FOODPANDAMOCKUP}
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
          <div className="py-5  mt-[50px]">
            <div className=" flex items-center justify-center">
              <Image alt="food" src={GRABLOGO} width={150} height={150} />
            </div>
            <div className="flex  items-center gap-[30px]">
              <div className="w-[50%]">
                {GRABGOODPOINT.map((e, index) => (
                  <ListShowData key={index} title={e.title} data={e.data} />
                ))}
              </div>
              <Image
                alt="foodmockup"
                className="w-[50%]"
                src={GRAPMOCKUP}
                width={200}
                height={200}
              />
            </div>
            <div className="flex items-center gap-[30px]">
              <Image
                alt="foodmockup"
                className="w-[50%]"
                src={GRAPMOCKUP}
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

          {/* second section */}
        </div>
      </div>
    </>
  );
}

export default Page;
