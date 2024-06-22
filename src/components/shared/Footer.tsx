"use client";

import { FormEvent, useState } from "react";
import Button from "../ui/Button";
import LogoTitle from "../ui/LogoTitle";
import ContactsInput from "../ui/ContactsInput";
import PointEllipse from "./icons/PointEllipse";
import IconsList from "./icons/Stack/IconsList";

const Footer = () => {
  const [inputActive, setInputActive] = useState<boolean>(false);

  const resetClassForm = (e: FormEvent<HTMLElement>) => {
    const input = document.querySelector("#emailInput") as HTMLInputElement;

    if (
      !(e.target as HTMLElement).closest("#emailInput") &&
      input.value.length < 1
    ) {
      setInputActive(false);
    }
  };

  return (
    <section className="pb-[85px]" onClick={(e) => resetClassForm(e)}>
      <div className="bg-bgBlue">
        <div className="container m-auto py-[38px]">
          <div className="flex justify-between">
            <h1 className="w-[610px] text-[36px] font-semibold text-white">
              Let's discuss making your interior like a dream place!
            </h1>
            <div className="flex w-[430px] flex-col gap-5">
              <p className="text-lg text-text-footerSpan">
                Contact us below to work together to build your amazing interior
              </p>
              <Button variant="white">Contact Us</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container m-auto mt-20 flex items-center justify-between">
        <div className="flex w-[480px] flex-col gap-2.5">
          <LogoTitle />
          <p className="text-[36px] font-semibold text-text-title">
            One of the best furniture agency.
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <div className="mb-5 flex items-center gap-[7px]">
            <PointEllipse />
            <h3>Enter your email to get the laterst news</h3>
          </div>
          <ContactsInput
            inputActive={inputActive}
            setInputActive={setInputActive}
          />
          <div className="ml-auto flex flex-col gap-[15px]">
            <p>Follow Us On</p>
            <IconsList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
