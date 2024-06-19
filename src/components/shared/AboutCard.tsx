import { aboutProjects } from "@/constants";
import React from "react";

interface AboutCardProps {
  className?: string;
}

const AboutCard = ({ className }: AboutCardProps) => {
  return (
    <div
      className={`"block " mx-auto h-[525px] w-[252px] bg-bgBlue px-12 py-10 ${className}`}
    >
      {aboutProjects.map((el) => (
        <div
          className="mb-14 flex flex-col"
          key={el.title}
        >
          <h2 className="mx-auto mb-1 text-[52px] font-normal text-white">
            {el.title}
          </h2>
          <span className="mx-auto text-base font-normal text-white">
            {el.subtitle}
          </span>
        </div>
      ))}
    </div>
  );
};

export default AboutCard;
