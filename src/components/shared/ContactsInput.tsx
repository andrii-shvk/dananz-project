"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { ArrowRight } from "./icons/ArrowRight";
import { useState } from "react";
import { Preloader } from "../ui/Preloader";
import clsx from "clsx";

interface IFormState {
  email: string;
}

interface ContactsProps {
  inputActive: boolean;
  setInputActive: (inputActive: boolean) => void;
}

const ContactsInput = (props: ContactsProps) => {
  const { inputActive, setInputActive } = props;
  const { register, handleSubmit, reset } = useForm<IFormState>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<IFormState> = (data) => {
    setIsLoading(true);
    fetch("http://localhost:5000/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (!data) return;
        reset();
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="flex flex-col relative" onClick={() => setInputActive(true)}>
        <span
          className={clsx("absolute text-gray-400", {
            ["text-bgBlue text-[14px] bottom-10 transition-all"]: inputActive,
          })}
        >
          Email Address
        </span>
        <input
          type="email"
          id="emailInput"
          required
          {...register("email")}
          className="h-[37px] w-[400px] border-b-[1px] border-black bg-transparent outline-none"
        />
      </label>
      <button type="submit" className="absolute right-0">
        {isLoading ? <Preloader /> : <ArrowRight />}
      </button>
    </form>
  );
};

export default ContactsInput;
