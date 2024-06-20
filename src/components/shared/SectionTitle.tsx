import React from "react";
import BorderLine from "../ui/BorderLine";
import clsx from "clsx";

interface ISectionTitle {
  title: string;
  subtitle?: string;
  isBorderline?: boolean;
  longLine?: boolean;
  className?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  isBorderline,
  className,
  longLine,
}: ISectionTitle) => {
  return (
    <div className={`relative ${className}`}>
      <h2 className="sectionTitle mb-8">{title}</h2>
      {subtitle && <p className="sectionSubTitle">{subtitle}</p>}
      {isBorderline && (
        <BorderLine
          className={clsx(`absolute left-[74px] top-[11px] w-[505px]`, {
            ["left-[90px]"]: longLine,
          })}
        />
      )}
    </div>
  );
};

export default SectionTitle;

{
  /* <BorderLine className="absolute left-[74px] top-[11px] w-[505px]" /> */
}
