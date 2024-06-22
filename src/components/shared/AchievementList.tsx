import { achievementList } from "@/constants";
import Image from "next/image";

const AchievementList = () => {
  return (
    <div className="flex flex-col gap-10">
      {achievementList.map((elem) => (
        <div className="flex items-center justify-between">
          <Image src={elem.Image} alt={elem.title} priority />
          <div className="flex w-[335px] flex-col gap-5">
            <h1 className="text-2xl font-semibold">{elem.title}</h1>
            <p className="grayDescription">{elem.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AchievementList;
