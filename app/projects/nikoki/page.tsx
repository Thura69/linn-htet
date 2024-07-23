"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useState } from "react";
import { HeroContantText } from "@/components/hero/hero-contant-text";
import BlurryCursor from "@/components/cursor";
import { ProjectTitle } from "@/components/project-title";
import IMAGE_1 from "@/public/images/nikoki/Sign In.png";
import IMAGE_2 from "@/public/images/nikoki/Sign Up.png";
import IMAGE_3 from "@/public/images/nikoki/Frame 34586.png";
import IMAGE_4 from "@/public/images/nikoki/Employees Table List View.png";
import IMAGE_5 from "@/public/images/nikoki/Frame 34587.png";
import IMAGE_6 from "@/public/images/nikoki/MacBook contents.png";
import Image from "next/image";
import {
  ATTENDANCEDATA,
  DEPARTMENTDATA,
  DESIGNATIONDATA,
  LEAVEDATA,
  RESIGNDATA,
} from "@/components/nikoki/data";
import { ContentSection } from "@/components/bread-box/content-section";
import MACMOCKUP from "@/public/images/nikoki/png@3x 1.png";
import PAYSLIP from '@/public/images/nikoki/Payslip png 2@3x 1.png';
import Footer from "@/components/footer/footer";
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
  return (
    <>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
        <div className=" bg-[#537FE7]">
          <div className="container">
            <HeroContantText
              handleHover={handleHover}
              indent={false}
              active={active}
              title="NIKOKI"
            />
          </div>
        </div>
        <div className="bg-white overflow-hidden  container mx-auto">
        <div className="py-5  pb-[200px] pt-[100px]  space-y-10 lg:space-y-16">
          <div className="">
            <ProjectTitle
              color="ligh-blue"
              title="Authentication"
              amount="lg"
            />

            <div className="flex flex-col md:flex-row">
              <div className="md:w-[50%]">
                <p className="px-5">Sign In</p>
                <Image
                  src={IMAGE_1}
                  alt="signIn"
                  className="w-full h-auto"
                />
              </div>
              <div className="md:w-[50%]">
                <p className="px-5">Sign Up</p>
                <Image
                  src={IMAGE_2}
                  alt="signUp"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <p className="max-w-[600px] px-5">
              When User open the software website, User first need to sign in
              with Username and Password or they can sign up if they don’t have
              account yet.
            </p>
          </div>

          {/* admin dashboard */}
          <div>
            <ProjectTitle
              color="ligh-blue"
              title="ADMIN DASHBOARD"
              amount="lg"
            />
            <Image
              src={IMAGE_3}
              alt="ee"
              className="w-[1000px] pt-[60px] h-auto"
              width={1000}
              height={1000}
            />
            <p className="max-w-[700px] text-center mx-auto mt-[30px] px-5">
              When the Admin starts Login, important widgets can be seen such as
              My Attendance, Attendance for Today, Calendar, Leave Requests
              Table, and Activities notifications.
            </p>
          </div>
          {/* admin dashboard */}
          {/* Employee View */}
          <ProjectTitle color="ligh-blue" title="Employee View" amount="lg" />
          <div className="flex flex-col md:flex-row">
            <div className="md:w-[50%]">
              <Image
                src={IMAGE_4}
                alt="signIn"
                className="w-full h-auto"
                width={900}
                height={900}
              />
            </div>
            <div className="md:w-[50%]">
              <Image
                src={IMAGE_5}
                alt="signUp"
                className="w-full h-auto"
                width={900}
                height={900}
              />
            </div>
          </div>

          {/* Employee View */}

          {/* macbook */}
          <div>
            <div className="my-[50px]">
              <p className="max-w-[1000px] text-center mx-auto mt-[30px] px-5">
                The employee list is accessible in both list and grid views.
                Additionally, it is possible to add or edit personal information
                for each employee.
              </p>
              <p className="max-w-[1000px] text-center mx-auto mt-[30px] px-5">
                For the detail information of employees, Employee details
                category is created according to check Personal Details,
                Documents, Leaves, and Attendance. You can see how these
                sections are designed in UI below this paragraph.
              </p>
            </div>
            <Image
              src={IMAGE_6}
              alt="signUp"
              className="w-[1000px] mx-auto h-auto"
              width={900}
              height={900}
            />
          </div>
          {/* macbook */}

          {/* department */}
          <div className="pt-[100px]">
            {DEPARTMENTDATA.map((e, index) => (
              <ContentSection
                color={"ligh-blue"}
                key={e.data}
                col="1"
                data={e.data}
                title={e.title}
                images={e.image}
              />
            ))}
          </div>

          {/* department */}
          {/* DESIGNATION */}
          <div className="pt-[100px]">
            {DESIGNATIONDATA.map((e, index) => (
              <ContentSection
                color={"ligh-blue"}
                key={e.data}
                col="1"
                data={e.data}
                title={e.title}
                images={e.image}
              />
            ))}
          </div>
          {/* DESIGNATION */}

          {/* ATTENDANCEDATA */}
          <div className="pt-[100px]">
            {ATTENDANCEDATA.map((e, index) => (
              <ContentSection
                color={"ligh-blue"}
                key={e.data}
                col="1"
                data={e.data}
                title={e.title}
                images={e.image}
              />
            ))}
          </div>
          {/* ATTENDANCEDATA */}
          <Image
            src={MACMOCKUP}
            alt="signUp"
            className=" w-[80%] pt-[60px] mx-auto h-auto"
          />
           {/* LEAVE */}
           <div className="pt-[100px]">
            {LEAVEDATA.map((e, index) => (
              <ContentSection
                color={"ligh-blue"}
                key={e.data}
                col="1"
                data={e.data}
                title={e.title}
                images={e.image}
              />
            ))}
          </div>
          {/* LEAVE */}
          <p>In the Attendance section, you&apos;ll find:</p>
          <ul>
            <li>
              Leave Balance: Displays overall leave information for employees.
            </li>
            <li>
            My Leave: Admin&apos;s leave request form.
            </li>
            <li>
            Leave Request: Allows responding to employees&apos; leave requests.
            </li>
          </ul>

          <Image
            src={PAYSLIP}
            alt="signUp"
            className="w-[600px] pt-[60px] mx-auto h-auto"
            width={900}
            height={900}
          />



          {/* RESIGNDATA */}
          <div className="pt-[100px]">
            {RESIGNDATA.map((e, index) => (
              <ContentSection
                color={"ligh-blue"}
                key={e.data}
                col="1"
                data={e.data}
                title={e.title}
                images={e.image}
              />
            ))}
          </div>
          {/* RESIGNDATA */}

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
