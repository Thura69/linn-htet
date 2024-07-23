import React from "react";
import { ProjectTitle } from "../project-title";

interface ProjectCategoryType {
  data: string;
  title: string;
  color?: any;
}

export const ProjectCategory: React.FC<ProjectCategoryType> = ({
  data,
  title,
  color = "#FFC529",
}) => {
  return (
    <div>
      <ProjectTitle color={color} title={title} />
      <p className="text-sm md:text-md">
        {data}
      </p>
    </div>
  );
};
