import React from "react";
import { SocialLinks } from "../social-links";
import LinkButton from "../links-button";

export default function Content() {
  return (
    <div className="bg-[#4E4E5A]  md:py-8 md:px-12 h-full w-full ">
      <div className="container mx-auto h-full flex flex-col justify-center">
        <Section1 />
        <Section2 />
      </div>
    </div>
  );
}

const Section1 = () => {
  return (
    <div className="h-[80%] flex items-center my-4 justify-center">
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex justify-between   items-center">
      <p className=" font-medium w-[50%]   text-[1.2rem] md:text-[4rem]">© 2024</p>
      <h1 className="text-[1.2rem]  md:text-[4rem]  w-[50%]  font-[500] leading-[0.8]">
        Linn Htet Aung
      </h1>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-5 ">
      <div className="flex   md:w-[40%] flex-col gap-2">
        <div className=" text-textSecondary">
          <LinkButton
            direction="down"
            label="Quick Links"
            isActive={false}
            toggleMenu={() => {}}
          />
        </div>
        <p>Home</p>
        <p>Projects</p> 
        <p>Case Studies</p>
        <p>Design Diversions</p>
      </div>
      <div className=" w-full  md:w-[60%]  flex md:flex-row flex-col gap-5  justify-between  md:gap-20 ">
        <div className="flex  w-[40%] flex-col gap-2">
          <div className=" text-textSecondary">
            <LinkButton
              direction="right"
              label="Social Links"
              isActive={false}
              toggleMenu={() => {}}
            />
          </div>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Behance</p>
          <p>You Tube</p>
        </div>
        <div className="flex md:w-[40%] flex-col gap-2">
        <div className=" text-textSecondary">
          <LinkButton
            direction="down"
            label="Info Links"
            isActive={false}
            toggleMenu={() => {}}
          />
        </div>
        <p>Certificates</p>
        <p>Resume</p>
        {/* <p>Case Studies</p>
        <p>Design Diversions</p> */}
      </div>
      </div>
    </div>
  );
};
