import ServiceChooseImg from "@/assets/img/about/ServiceSection/ServiceChoose.jpg";
import { chooseUsItems } from "@/constants";
import Image from "next/image";

const ChooseUsCard = () => {
  return (
    <div className="flex gap-[18px]">
      {chooseUsItems.map((item) => (
        <div key={item.title} className=" border-borderCard h-[295px] w-[390px] border-[1px] flex flex-col items-center py-5 px-7 gap-5">
          <Image
            src={ServiceChooseImg}
            alt="ellipse"
            className="rounded-full"
          />
          <h1 className="text-2xl font-semibold">{item.title}</h1>
          <p className="grayDescription text-center">{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default ChooseUsCard;
