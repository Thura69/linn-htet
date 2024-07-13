import React from "react";
import { ProjectTitle } from "../project-title";

type ContentType = {
  title: string;
  data: string;
};

export const Content: React.FC<ContentType> = ({ title, data }) => {
  return (
    <div>
      <ProjectTitle title={title} />
      <p className="my-5">{data}</p>
    </div>
  );
};
