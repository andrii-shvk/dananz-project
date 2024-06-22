import SectionTitle from "@/components/ui/SectionTitle";
import { ArrowRight } from "@/components/shared/icons/ArrowRight";
import { productThemes } from "@/constants";

const ProductThemes = () => {
  return (
    <>
      <div className="mb-[75px] flex items-center justify-between">
        <SectionTitle
          title="PRODUCT"
          subtitle="Choose your product themes."
          className="w-[340px]"
          borderLeftMargin="left-[90px]"
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
    </>
  );
};

export default ProductThemes;
