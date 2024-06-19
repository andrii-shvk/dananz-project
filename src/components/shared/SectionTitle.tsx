import React from "react";
import BorderLine from "../ui/BorderLine";

interface ISectionTitle {
  title: string;
  subtitle?: string;
  isBorderline?: boolean;
  className?: string;
}

const SectionTitle = ({ title, subtitle, isBorderline,className }: ISectionTitle) => {
  return (
    <div className={`relative ${className}`}>
      <h2 className="sectionTitle mb-8">{title}</h2>
      {subtitle && <p className="sectionSubTitle">{subtitle}</p>}
      {isBorderline && (
        <BorderLine className="absolute left-[74px] top-[11px] w-[505px]" />
      )}
    </div>
  );
};

export default SectionTitle;
