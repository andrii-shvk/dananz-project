import SectionTitle from "@/components/shared/SectionTitle";
import AboutMainImg from "@/assets/img/main/AboutSection/AboutMain.jpg";
import Avatar from "@/assets/img/main/AboutSection/Avatar.jpg";
import Image from "next/image";
import Button from "@/components/ui/Button";

const AboutSection = () => {
  return (
    <>
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
            <Image
              priority
              className="h-auto w-auto"
              src={Avatar}
              alt="Avatar"
            />
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">Arga Danaan</h3>
              <span className="text-lg text-text-decription">
                CEO of Dananz
              </span>
            </div>
          </div>
          <div className="mt-[60px] flex items-center justify-between">
            <Image
              priority
              className="h-auto w-[880px]"
              src={AboutMainImg}
              alt="about"
            />
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
    </>
  );
};

export default AboutSection;
