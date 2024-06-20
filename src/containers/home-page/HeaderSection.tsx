import AboutCard from "@/components/shared/AboutCard";
import BorderLine from "@/components/ui/BorderLine";
import Image from "next/image";
import HeaderMainImg from "@/assets/img/main/HeaderSection/HeaderMain.jpg";

const HeaderSection = () => {
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
            priority
            src={HeaderMainImg}
            alt="Kitchen"
            className="h-auto w-full"
          />
        </div>
      </section>
    </>
  );
};

export default HeaderSection;
