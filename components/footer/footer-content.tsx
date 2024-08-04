import React from "react";
import { SocialLinks } from "../social-links";
import LinkButton from "../links-button";
import { ArrowDownCircle } from "lucide-react";
import Link from "next/link";

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
      <p className=" font-medium w-[50%]   text-[1.2rem] md:text-[4rem]">
        © 2024
      </p>
      <h1 className="text-[1.2rem] md:text-[4rem]  w-[50%]  font-[500] leading-[0.8]">
        Linn Htet Aung
      </h1>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-5 ">
      <div className="flex  md:w-[40%] flex-col gap-2">
        <div className=" text-textSecondary  ">
          <div className="flex gap-3 items-center justify-start">
            <ArrowDownCircle className="w-5 h-5 md:w-6 md:h-6" />
            <h3>QUICK LINKS</h3>
          </div>
        </div>

        <p>
          <Link href={"/"} target="blank">
            Home
          </Link>
        </p>
        <p>
          <Link href={"/projects"} target="blank">
            Projects
          </Link>
        </p>
        <p>
          <Link href={"/case-studies"} target="blank">
          Case Studies
          </Link>
        </p>
        <p>
          <Link href={"/design-diversions"} target="blank">
          Design Diversions
          </Link>
        </p>
      </div>
      <div className=" w-full  md:w-[60%]  flex md:flex-row flex-col gap-5  justify-between  md:gap-20 ">
        <div className="flex  md:w-[40%] flex-col gap-2">
          <div className=" text-textSecondary">
            <div className="flex gap-3 items-center justify-start">
              <ArrowDownCircle className="w-5 h-5 md:w-6 md:h-6" />
              <h3>SOCIAL LINKS</h3>
            </div>
          </div>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Behance</p>
          <p>You Tube</p>
        </div>
        <div className="flex md:w-[40%] flex-col gap-2">
          <div className=" text-textSecondary">
            <div className="flex gap-3 items-center justify-start">
              <ArrowDownCircle className="w-5 h-5 md:w-6 md:h-6" />
              <h3>INFO LINKS</h3>
            </div>
          </div>
          <p>Certificates</p>
          <p>
            <Link
              href={
                "https://drive.google.com/file/d/1Lx5GQFDuY78NOb4hoWKjjuOwUrqeLA3l/view"
              }
              target="_blank"
            >
              Resume
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
