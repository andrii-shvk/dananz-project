import React from "react";
import BorderLine from "./BorderLine";

interface ISectionTitle {
  title: string;
  subtitle?: string;
  borderLeftMargin: string;
  className?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  className = "",
  borderLeftMargin,
}: ISectionTitle) => {

  return (
    <div className={`relative ${className}`}>
      <h2 className="sectionTitle mb-8">{title}</h2>
      {subtitle && <p className="sectionSubTitle">{subtitle}</p>}
      <BorderLine className={`absolute top-[11px] w-[505px] ${borderLeftMargin}`} />
    </div>
  );
};

export default SectionTitle;
