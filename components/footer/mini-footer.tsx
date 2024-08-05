import React from "react";

export const MiniFooter = () => {
  return (
    <div className=" border-top flex items-center justify-between  border  h-[86px] bg-[#f2f2f0]">
      <div className=" container mx-auto flex gap-4 flex-col md:flex-row items-center justify-between">
        <ul className="flex gap-5 items-center  justify-between">
          <li className=" cursor-pointer">Behance</li>
          <li className=" cursor-pointer">LinkedIn</li>
          <li className=" cursor-pointer">Instagram</li>
        </ul>
        <h3>© 2024 Linn Htet Aung</h3>
      </div>
    </div>
  );
};
