import HeaderTitle from "@/components/ui/HeaderTitle";
import Image from "next/image";
import React from "react";

const HeaderSection = () => {
  return (
    <section className="pb-[51px]">
      <HeaderTitle
        title="Our Teams"
        subtitle="It is a long established fact 
              that a reader will be distracted by the 
              readable content of a page when looking at its layout."
      />
    </section>
  );
};

export default HeaderSection;
