import React from "react";
import { ProjectTitle } from "../project-title";

type ListShowType = {
  title: string;
  data: any[];
  color?: any;
};

export const ListShowData: React.FC<ListShowType> = ({
  title,
  data,
  color = "#FFC529",
}) => {
  return (
    <div>
      <ProjectTitle color={color} title={title} />
      <ul className=" list-disc">
        {data.map((e, index) => (
          <li data-aos="fade-up" data-aos-duration="600" key={index}>
            {e}
          </li>
        ))}
      </ul>
    </div>
  );
};
