import ServiceMainImg from "@/assets/img/main/ServiceSection/ServiceMain.jpg";
import SectionTitle from "@/components/shared/SectionTitle";
import { ArrowRight } from "@/components/shared/icons/ArrowRight";
import { serviceItems } from "@/constants";
import Image from "next/image";

const ServiceSection = () => {
  return (
    <>
      <section className="pb-40">
        <SectionTitle
          title="SERVICE"
          subtitle="attractive furniture with the best quality."
          isBorderline={true}
        />
        <div className="z-10 flex w-[880px] flex-col">
          <div className="mb-[90px] mt-6 w-[470px]">
            <p className="grayDescription">
              Customize your interior design into a dream place with the best
              designers and quality furniture. We try our best to fulfill your
              expectations.
            </p>
          </div>
          <div className="absolute mt-40 flex w-[880px] flex-col gap-8 bg-bgMain pb-10 pr-10">
            {serviceItems.map((item) => (
              <div
                key={item.numberTitle}
                className="text flex justify-between text-2xl font-semibold"
              >
                <div className="flex gap-10">
                  <p>{item.numberTitle}</p>
                  <p>{item.title}</p>
                </div>
                <ArrowRight />
              </div>
            ))}
          </div>
        </div>
        <Image
          width={1075}
          height={525}
          src={ServiceMainImg}
          alt="Service"
          className="ml-auto"
        />
      </section>
    </>
  );
};

export default ServiceSection;
