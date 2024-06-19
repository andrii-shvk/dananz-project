import React from "react";

interface IBorderLine {
  className?: string;
}

const BorderLine = ({ className }: IBorderLine) => {
  return <hr className={`' border-[1px] border-text-primary ${className}`} />;
};

export default BorderLine;
