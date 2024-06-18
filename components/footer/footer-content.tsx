import React from "react";
import { SocialLinks } from "../social-links";
import LinkButton from "../links-button";

export default function Content() {
  return (
    <div className="bg-[#4E4E5A]  py-8 px-12 h-full w-full ">
      <div className="container mx-auto h-full flex flex-col justify-between">
        <Section1 />
        <Section2 />
      </div>
    </div>
  );
}

const Section1 = () => {
  return (
    <div className="h-[80%] flex items-center justify-center">
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex justify-between   items-center">
      <p className=" font-medium w-[40%]  text-[5rem]">© 2024</p>
      <h1 className="text-[6rem]  w-[60%]  font-[500] leading-[0.8]">
        Linn Htet Aung
      </h1>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex w-full ">
      <div className="flex w-[40%] flex-col gap-2">
        <div className=" text-textSecondary">
          <LinkButton
            direction="down"
            label="About"
            isActive={false}
            toggleMenu={() => {}}
          />
        </div>
        <p>Home</p>
        <p>Projects</p>
        <p>Our Mission</p>
        <p>Contact Us</p>
      </div>
      <div className="w-[60%] flex justify-between gap-20 ">
        <div className="flex flex-col gap-2">
          <div className=" text-textSecondary">
            <LinkButton
              direction="right"
              label="Education"
              isActive={false}
              toggleMenu={() => {}}
            />
          </div>
          <p>News</p>
          <p>Learn</p>
          <p>Certification</p>
          <p>Publications</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className=" text-textSecondary">
            <LinkButton
              direction="right"
              label="Education"
              isActive={false}
              toggleMenu={() => {}}
            />
          </div>
          <p>News</p>
          <p>Learn</p>
          <p>Certification</p>
          <p>Publications</p>
        </div>
      </div>
    </div>
  );
};
