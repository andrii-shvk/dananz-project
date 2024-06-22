import SectionTitle from "../ui/SectionTitle";
import ChooseUsCards from "./ChooseUsCards";

const ServiceCards = () => {
  return (
    <>
      <SectionTitle
        title="SERVICE"
        subtitle="Why Choose Us"
        borderLeftMargin="left-[80px]"
      />
      <p className="grayDescription mt-6 w-[470px]">
        Customize your interior design into a dream place with the best
        designers and quality furniture. We try our best to fulfill your
        expectations.
      </p>
      <div className="mt-10">
        <ChooseUsCards />
      </div>
    </>
  );
};

export default ServiceCards;
