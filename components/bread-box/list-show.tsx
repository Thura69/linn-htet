import React from "react";
import { ProjectTitle } from "../project-title";

type ListShowType = {
  title: string;
  data: any[];
};

export const ListShowData: React.FC<ListShowType> = ({ title, data }) => {
  return (
    <div className="py-[30px] ">
      <ProjectTitle title={title}/>
      <ul className=" list-disc">
        {data.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </ul>
    </div>
  );
};
