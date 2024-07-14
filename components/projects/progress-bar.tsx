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
    <div className="w-[80%] space-y-4">
      <p data-aos="fade-up" data-aos-duration="600">
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
