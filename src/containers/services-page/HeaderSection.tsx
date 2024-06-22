import HeaderTitle from "@/components/ui/HeaderTitle";
import HeaderImg from '@/assets/img/main/ServiceSection/ServiceMain.jpg'
import Image from "next/image";

const HeaderSection = () => {
  return (
    <section>
      <HeaderTitle
        title="Services"
        subtitle="It is a long established fact 
                  that a reader will be distracted by the 
                  readable content of a page when looking at its layout."
      />
    <Image src={HeaderImg} alt="HeaderImg" className="mt-[57px]" priority />
    </section>
  );
};

export default HeaderSection;
