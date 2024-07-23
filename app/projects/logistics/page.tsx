"use client";

import { HeroContantText } from "@/components/hero/hero-contant-text";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useState } from "react";
import BlurryCursor from "@/components/cursor";
import { ProjectTitle } from "@/components/project-title";
import Image from "next/image";
import IMG_1 from "@/public/images/logistics/Group 3355.png";
import IMG_2 from "@/public/images/logistics/Frame 3701.png";
import IMG_3 from "@/public/images/logistics/Frame 3686.png";
import IMG_4 from "@/public/images/logistics/Frame 3702.png";
import IMG_5 from '@/public/images/logistics/Frame 3703.png';
import IMG_6 from '@/public/images/logistics/Group 3376.png';
import IMG_7 from '@/public/images/logistics/Group 3377.png';
import IMG_8 from '@/public/images/logistics/Frame 34593.png';
import IMG_9 from '@/public/images/logistics/Frame 34594.png';
import IMG_10 from '@/public/images/logistics/Frame 3706.png';
import IMG_11 from '@/public/images/logistics/Frame 3708.png';
import IMG_12 from '@/public/images/logistics/Frame 3707.png';
import IMG_13 from '@/public/images/logistics/Frame 3709.png';
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
              title="LOGISTICS"
            />
          </div>
        </div>
        <div className="bg-white space-y-10 overflow-hidden my-[50px] container mx-auto">
          <div className=" space-y-10">
            <ProjectTitle
              color="ligh-blue"
              title="ACCOUNT REGISTER SCREEN"
              amount="lg"
            />
            <Image
              src={IMG_1}
              alt="signIn"
              className="w-[1000px] mx-auto h-auto"
              width={900}
              height={900}
            />
            <ul>
              <li>
                If you are a new user who has just started using it, you need to
                fill in the information shown in the picture first to enter the
                profile.
              </li>
              <li>
                Once the information is filled in, the account can be accessed
                and used.
              </li>
            </ul>
          </div>

          {/* part two */}
          <div className=" space-y-10">
            <ProjectTitle
              color="ligh-blue"
              title="LOG IN SCREENS AND PASSWORD RESET SCREENS"
              amount="lg"
            />
            <Image
              src={IMG_2}
              alt="signIn"
              className="w-[1000px] mx-auto h-auto"
              width={900}
              height={900}
            />
            <ul>
              <li>
                If you have an account that has already been opened, please fill
                in the necessary information as shown below, and you can log in
                and use the account.
              </li>
            </ul>
            <Image
              src={IMG_3}
              alt="signIn"
              className="w-[1000px] mx-auto h-auto"
              width={900}
              height={900}
            />
            <ul>
              <li>
                If you have already opened an account but have forgotten your
                password, you can get the OTP code through your phone number,
                reset the password, and log in again.
              </li>
            </ul>
          </div>
          {/* part two */}
          {/* part three */}
         <div>
         <ProjectTitle
            color="ligh-blue"
            title="MERCHANT SCREENS BEFORE REGISTRATION"
            amount="lg"
          />
          <Image
            src={IMG_4}
            alt="signIn"
            className="w-[1000px] mx-auto h-auto"
            width={900}
            height={900}
          />
          <ul>
            <li>
              After entering the account, there will be five pages such as Home,
              Post, Profile and Settings.
            </li>
            <li>Notification and Message should also be seen as features.</li>
            <li>
              As a regular user without merchant or vehicle owner registration,
              you&apos;re limited to basic features. This includes messaging and
              notifications only, with no ability to post comments, reviews, or
              connect with other users.
            </li>
            <li>
              In order to have full access to the application, how to register
              as a &quot;dealer or vehicle owner&quot; is shown in the image below.
            </li>
          </ul>
         </div>
          {/* part three */}
          {/* part four */}
          <div>
         <ProjectTitle
            color="ligh-blue"
            title="MERCHANT REGISTRATION"
            amount="lg"
          />
          <Image
            src={IMG_5}
            alt="signIn"
            className="w-[1000px] mx-auto h-auto"
            width={900}
            height={900}
          />
          <ul>
            <li>
            Of the two &quot;Dealer or Vehicle Owner&quot; registrations, &quot;Trader Registration&quot; is mentioned first.
            </li>
          </ul>
         </div>
          {/* part four */}
          {/* part five */}
          <div className=" space-y-10">
         <ProjectTitle
            color="ligh-blue"
            title="MERCHANT SCREENS AFTER REGISTRATION"
            amount="lg"
          />
         <div className="flex justify-between">
         <Image
            src={IMG_6}
            alt="signIn"
            className="w-[40%]  h-auto"
            width={900}
            height={900}
          />
            <Image
            src={IMG_7}
            alt="signIn"
            className="w-[40%]   h-auto"
            width={900}
            height={900}
          />
         </div>
          <ul>
            <li>
            Profile information &quot;Posts&quot; and &quot;Settings&quot; are compared without data and with data.
            </li>
          </ul>
          <Image
            src={IMG_8}
            alt="signIn"
            className="w-auto mx-auto   h-auto"
            width={900}
            height={900}
          />
           <ul>
            <li>
            Once &quot;Merchant Registration&quot; is completed, you will have full access to the Application and will have access to all the features shown in the image.
            </li>
          </ul>
         </div>
          {/* part five */}
          {/* part six */}
          <div className=" space-y-5">
          <ProjectTitle
            color="ligh-blue"
            title="CONNECTING WITH OTHER USER"
            amount="lg"
          />
            <Image
              src={IMG_9}
              alt="signIn"
              className="w-[1000px] mx-auto h-auto"
              width={900}
              height={900}
            />
             <ul>
            <li>
            The main purpose of the application, which is how to connect users and use other features, is explained through the picture.
            </li>
          </ul>
          </div>


          {/* part six */}
          {/* part seven */}
          <div className=" space-y-5">
          <ProjectTitle
            color="ligh-blue"
            title="GIVING REVIEW"
            amount="lg"
          />
            <Image
              src={IMG_10}
              alt="signIn"
              className="w-[1000px] mx-auto h-auto"
              width={900}
              height={900}
            />
             <ul>
            <li>
            In the review section, you can manually fill in the information you like, or you can also enter &quot;Recommend more&quot; and suggest it.
            </li>
          </ul>
          </div>


          {/* part seven */}
           {/* part seven */}
           <div className=" space-y-5">
          <ProjectTitle
            color="ligh-blue"
            title="SETTING SCREENS BEFORE AND AFTER REGISTRATION"
            amount="lg"
          />
            <Image
              src={IMG_12}
              alt="signIn"
              className="w-[1000px] mx-auto h-auto"
              width={900}
              height={900}
            />
             <ul>
            <li>
            The difference between setting before merchant registration and setting after merchant registration is compared.
            </li>
          </ul>
          </div>
          {/* part seven */}
            {/* part eight */}
            <div className=" space-y-5">
          <ProjectTitle
            color="ligh-blue"
            title="SETTINGS RELATED SCREENS"
            amount="lg"
          />
            <Image
              src={IMG_11}
              alt="signIn"
              className="w-[1000px] mx-auto h-auto"
              width={900}
              height={900}
            />
             <ul>
            <li>
            Each of the Related Screens included in the Settings is shown, and the Edit Profile and Logout Screen are also shown.
            </li>
          </ul>
          </div>
          {/* part eight */}
           {/* part nine */}
           <div className=" space-y-5 pb-[100px]">
          <ProjectTitle
            color="ligh-blue"
            title="CHANGE PASSWORD SCREEN"
            amount="lg"
          />
            <Image
              src={IMG_13}
              alt="signIn"
              className="w-[1000px] mx-auto h-auto"
              width={900}
              height={900}
            />
             <ul>
            <li>
            If you want to change your password, you can change it through the settings as shown in the picture.
            </li>
          </ul>
          </div>
          {/* part nine */}




        </div>
        <Footer />
        <MobileMenu/>
        {isDesktop && <BlurryCursor isActive={active} />}
      </ReactLenis>
    </>
  );
}

export default Page;
