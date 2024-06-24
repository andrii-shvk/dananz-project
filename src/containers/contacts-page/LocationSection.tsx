import SectionTitle from "@/components/ui/SectionTitle";
import { locationList } from "@/constants";
import React from "react";

const LocationSection = () => {
  return (
    <section className="py-[110px]">
      <SectionTitle title="Location" borderLeftMargin="left-[87px]" />
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="mb-10 w-[280px]">
            <h1 className="mb-8 text-[36px] font-semibold text-text-title">
              Visit Our Stores
            </h1>
            <p className="grayDescription">Find us at these locations.</p>
          </div>
          <div className="mb-8">
            <h1 className="mb-2.5 text-2xl font-semibold text-text-title">
              Email
            </h1>
            <p className="grayDescription">dananz@gmail.com</p>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-text-title mb-2.5">Phone</h1>
            <p className="grayDescription">+62 815 002 1000</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-[40px] justify-end">
          {locationList.map(elem => (
            <div key={elem.name} className="w-[335px]">
              <h1 className="text-2xl font-semibold">{elem.name}</h1>
              <p className="grayDescription">{elem.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
