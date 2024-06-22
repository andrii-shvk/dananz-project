import AboutCard from "@/components/shared/AboutCard";
import SectionTitle from "@/components/ui/SectionTitle";
import AchievementImg from "@/assets/img/about/Achievement/Achievement.jpg";
import Image from "next/image";

const AchievementSection = () => {
  return (
    <section className="py-[110px]">
      <SectionTitle
        title="ACHIEVEMENT"
        subtitle="interior customization with Danaanz, best quality with professional workers"
        borderLeftMargin="left-[130px]"
      />
      <div className="flex justify-between mt-[55px]">
        <Image src={AchievementImg} alt="Achievement" />
        <AboutCard />
      </div>
    </section>
  );
};

export default AchievementSection;
