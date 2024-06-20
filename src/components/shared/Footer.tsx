import Button from "../ui/Button";
import { ArrowRight } from "./icons/ArrowRight";
import PointEllipse from "./icons/PointEllipse";
import IconsList from "./icons/Stack/IconsList";

const Footer = () => {
  return (
    <section className="pb-[85px]">
      <div className="bg-bgBlue">
        <div className="container m-auto py-[38px]">
          <div className="flex justify-between">
            <h1 className="w-[610px] text-[36px] font-semibold text-white">
              let's discuss making your interior like a dream place!
            </h1>
            <div className="flex w-[430px] flex-col gap-5">
              <p className="text-text-footerSpan text-lg">
                Contact us below to work together to build your amazing interior
              </p>
              <Button variant="white">Contact Us</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container m-auto mt-20 flex items-center justify-between">
        <div className="flex w-[480px] flex-col gap-2.5">
          <h1 className="logoTitle">Dananz</h1>
          <p className="text-[36px] font-semibold text-text-title">
            One of the best furniture agency.
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <div className="mb-5 flex items-center gap-[7px]">
            <PointEllipse />
            <h3>Enter your email to get the laterst news</h3>
          </div>
          <label>
            <span className="absolute text-gray-400">Email Address</span>
            <div className="absolute right-[115px]">
              <ArrowRight />
            </div>
            <input
              type="email"
              className="h-[37px] w-[400px] border-b-[1px] border-black bg-transparent outline-none"
            />
          </label>
          <div className="flex flex-col gap-[15px] ml-auto">
            <p>Follow Us On</p>
            <IconsList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
