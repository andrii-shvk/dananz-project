import BorderLine from "@/components/ui/BorderLine";
import React from "react";
import HeaderMainImg from "@/assets/img/main/HeaderSection/HeaderMain.jpg";
import AboutMainImg from "@/assets/img/main/AboutSection/AboutMain.jpg";
import Avatar from "@/assets/img/main/AboutSection/Avatar.jpg";
import ServiceMainImg from "@/assets/img/main/ServiceSection/ServiceMain.jpg";
import MaterialOneImg from "@/assets/img/main/Material/MaterialOne.jpg";
import MaterialTwoImg from "@/assets/img/main/Material/MaterialTwo.jpg";
import MaterialThreeIng from "@/assets/img/main/Material/MaterialThree.jpg";
import Image from "next/image";
import AboutCard from "@/components/shared/AboutCard";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/shared/SectionTitle";
import { ArrowRight } from "@/components/shared/icons/ArrowRight";
import { productThemes, serviceItems } from "@/constants";

const Home = () => {
  return (
    <>
      <section className="pb-[160px]">
        <div className="relative flex flex-col">
          <h1 className="mainTitle mb-[45px] w-[680px]">
            Design your interor with high quality.
          </h1>
          <span className="absolute -right-14 top-[200px] -rotate-90 text-lg font-medium">
            2024 <br /> ALL RIGHT RESERVED
          </span>
          <BorderLine className="absolute right-0 top-[50px] w-[680px]" />
          <AboutCard className="absolute right-[140px] top-[160px]" />
          <Image
            src={HeaderMainImg}
            alt="kitchen"
            className="w-full"
            height={500}
          />
        </div>
      </section>

      <section className="pb-40">
        <div className="relative">
          <SectionTitle
            title="ABOUT"
            subtitle="“We're one of the best furniture agency. Prioritizing
                        customers and making purchases easy are the hallmarks of our
                        agency.”"
            isBorderline={true}
          />
          <div className="absolute right-[120px] top-[270px] flex h-[90px] w-[275px] gap-5 bg-white py-5 pl-5 pr-12">
            <Image src={Avatar} alt="Avatar" />
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">Arga Danaan</h3>
              <span className="text-lg text-text-decription">
                CEO of Dananz
              </span>
            </div>
          </div>
          <div className="mt-[60px] flex items-center justify-between">
            <Image src={AboutMainImg} alt="about" />
            <div className="mt-[100px] flex w-[220px] flex-col gap-10">
              <p className="grayDescription">
                Online learning with us does not interfere with your daily life.
                because learning can be done anytime and anywhere.
              </p>
              <Button variant="blue">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

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
        <Image src={ServiceMainImg} alt="Service" className="ml-auto" />
      </section>

      <section className="pb-40">
        <div className="mb-[75px] flex items-center justify-between">
          <SectionTitle
            title="PRODUCT"
            subtitle="Choose your product themes."
            isBorderline={true}
            className="w-[340px]"
          />
          <div className="w-[470px]">
            <p className="grayDescription">
              Find the theme you want. If our choice of theme is not what you
              want, you can customize it as you want.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          {productThemes.map((product) => (
            <>
              <div
                key={product.numberTitle}
                className="text flex justify-between text-2xl font-semibold"
              >
                <div className="flex gap-20">
                  <p>{product.numberTitle}</p>
                  <p>{product.title}</p>
                </div>
                <ArrowRight />
              </div>
              <span className="ml-[110px] w-[470px] text-lg text-text-title">
                {product.description}
              </span>
            </>
          ))}
        </div>
      </section>

      <section className="pb-40">
        <div className="flex justify-between">
          <div className="w-[350px]">
            <SectionTitle
              title="MATERIAL"
              subtitle="choice of materials for quality furniture."
              isBorderline={true}
            />
            <p className="grayDescription mb-6 mt-2.5 w-[500px]">
              You can custom the material as desired. And our furniture uses the
              best materials and selected quality materials.
            </p>
            <Button className="w-44 border-black" variant="white">
              See Materials
            </Button>
          </div>
          <div className="flex h-[490px] w-[622px] justify-between">
            <div className="mt-auto">
              <Image
                alt="ImgOne"
                src={MaterialOneImg}
                width={340}
                height={390}
              />
            </div>
            <div className="flex flex-col gap-10">
              <Image
                alt="ImgTwo"
                src={MaterialTwoImg}
                width={240}
                height={225}
              />
              <Image
                alt="ImgThree"
                src={MaterialThreeIng}
                width={195}
                height={178}
              />
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Home;
