import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

interface ProgressBarInterface {
  title: string;
  percent: number;
}

export const ProjectProgressBar: React.FC<ProgressBarInterface> = ({
  title,
  percent,
}) => {
  return (
    <div className="w-full md:w-[80%] space-y-4">
      <p className="text-sm mb-2">
        {title}
      </p>
      <ProgressBar
        data-aos="fade-right"
        data-aos-duration="600"
        bgColor="#FFC529"
        completed={percent}
      />
    </div>
  );
};
