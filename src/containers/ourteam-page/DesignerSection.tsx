import SectionTitle from "@/components/ui/SectionTitle";
import { personsList } from "@/constants";
import Image from "next/image";

const DesignerSection = () => {
  return (
    <section className="py-[110px]">
      <div className="mb-20 flex flex-col gap-6">
        <SectionTitle
          title="Designer"
          subtitle="Creative Person"
          borderLeftMargin="left-[95px]"
        />
        <p className="grayDescription w-[470px]">
          Customize your interior design into a dream place with the best
          designers and quality furniture. We try our best to fulfill your
          expectations.
        </p>
      </div>
      <div className="flex flex-wrap gap-6">
        {personsList.map((person, idx) => (
          <div key={idx} className="relative flex flex-col items-center">
            <div className="realtive">
              <Image src={person.Image} alt={person.name} priority />
            </div>
            <div className="absolute bottom-3 flex h-24 w-[258px] flex-col bg-bgMain py-[18px] pl-4 pr-[40px]">
              <h1 className="text-2xl font-semibold">{person.name}</h1>
              <p className="grayDescription">{person.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DesignerSection;
