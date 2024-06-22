import HeaderTitle from "@/components/ui/HeaderTitle";
import Image from "next/image";
import HeaderMainImg from "@/assets/img/about/HeaderSection/HeaderMain.jpg";

const HeaderSection = () => {
  return (
    <section>
      <HeaderTitle
        title="About"
        subtitle="It is a long established fact 
                      that a reader will be distracted by the 
                      readable content of a page when looking at its layout."
        aboutWidth
      />
      <Image
        src={HeaderMainImg}
        alt="HeaderMainImg"
        priority
        className="mt-[85px]"
      />
    </section>
  );
};

export default HeaderSection;
