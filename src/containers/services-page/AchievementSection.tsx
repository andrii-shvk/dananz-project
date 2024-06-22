import AchievementList from "@/components/shared/AchievementList"
import SectionTitle from "@/components/ui/SectionTitle"

const AchievementSection = () => {
  return (
    <section className="pt-[110px] pb-[100px]">
        <SectionTitle title="ACHIEVEMENT" borderLeftMargin="left-[130px]" />
        <AchievementList />
    </section>
  )
}

export default AchievementSection