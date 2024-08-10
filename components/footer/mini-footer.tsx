import Link from "next/link";
import React from "react";

export const MiniFooter = () => {
  return (
    <div className=" border-top flex items-center justify-between  border  h-[86px] bg-[#f2f2f0]">
      <div className=" container mx-auto flex gap-4 flex-col md:flex-row items-center justify-between">
        <ul className="flex gap-5 items-center  justify-between">
          <li className=" cursor-pointer hover:underline duration-500">
            <Link href={""}>Behance</Link>
          </li>
          <li className=" cursor-pointer hover:underline duration-500">
            <Link href={"https://www.linkedin.com/in/linnhtetaunglha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>LinkedIn</Link>
          </li>
          <li className=" cursor-pointer hover:underline duration-500">
            <Link href={"https://www.instagram.com/_ko__linn_?igsh=MW5ka284dThpcDg0aw=="}>Instagram</Link>
          </li>
        </ul>
        <h3>© 2024 Linn Htet Aung</h3>
      </div>
    </div>
  );
};
