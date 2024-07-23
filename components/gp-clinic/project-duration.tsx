import React from "react";
import { ProjectTitle } from "../project-title";

function ProjectDuration() {
  return (
    <div className="w-full ">
      <ProjectTitle color="blue" title="Project Duration" />
      <div className="flex justify-start gap-[40%] ">
        <ProjectCount duration="6" title="days" />
      </div>
    </div>
  );
}

type ProjectCountType = {
  duration: string;
  title: string;
};

const ProjectCount: React.FC<ProjectCountType> = ({ duration, title }) => {
  return (
    <div>
      <div>
        <h3 className=" text-[#37474F] text-[60px] font-bold">{duration}+</h3>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ProjectDuration;
