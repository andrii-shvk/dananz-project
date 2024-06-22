import ChooseUsCard from "@/components/shared/ChooseUsCard";
import SectionTitle from "@/components/ui/SectionTitle";

const ServiceSection = () => {
  return (
    <section className="pb-[100px]">
      <SectionTitle title="SERVICE" subtitle="Why Choose Us" borderLeftMargin='left-[80px]' />
      <p className="grayDescription w-[470px] mt-6">
        Customize your interior design into a dream place with the best
        designers and quality furniture. We try our best to fulfill your
        expectations.
      </p>
      <div className="mt-10">
        <ChooseUsCard />
      </div>
    </section>
  );
};

export default ServiceSection;
