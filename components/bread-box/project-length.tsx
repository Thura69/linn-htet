import React from "react";
import { ProjectTitle } from "../project-title";

function ProjectDuration() {
  return (
    <div className="w-full ">
      <ProjectTitle color="yellow" title="Project Duration" />
      <div className="flex justify-start gap-[40%] ">
        <ProjectCount duration="4" title="months" />
        <ProjectCount duration="30" title="screens" />
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
        <h3
          data-aos="fade-up"
          data-aos-duration="600"
          className=" text-[#37474F] text-[60px] font-bold"
        >
          {duration}+
        </h3>
        <p data-aos="fade-up" data-aos-duration="600">
          {title}
        </p>
      </div>
    </div>
  );
};

export default ProjectDuration;
