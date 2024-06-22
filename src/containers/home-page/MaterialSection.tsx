import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import MaterialOneImg from "@/assets/img/main/Material/MaterialOne.jpg";
import MaterialTwoImg from "@/assets/img/main/Material/MaterialTwo.jpg";
import MaterialThreeIng from "@/assets/img/main/Material/MaterialThree.jpg";
import Image from "next/image";

const MaterialSection = () => {
  return (
    <>
      <section className="pb-40">
        <div className="flex justify-between">
          <div className="w-[350px]">
            <SectionTitle
              title="MATERIAL"
              subtitle="choice of materials for quality furniture."
              borderLeftMargin='left-[90px]'
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
                className="h-auto w-[340px]"
              />
            </div>
            <div className="flex flex-col gap-10">
              <Image
                alt="ImgTwo"
                src={MaterialTwoImg}
                className="h-auto w-[240px]"
              />
              <Image
                alt="ImgThree"
                src={MaterialThreeIng}
                className="h-auto w-[195px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MaterialSection;
