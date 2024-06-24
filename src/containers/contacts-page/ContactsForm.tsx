"use client";

import Button from "@/components/ui/Button";
import { SubmitHandler, useForm } from "react-hook-form";

type PhoneCode = "US" | "UK" | "MEX";

interface IFormState {
  firstName: string;
  lastName: string;
  email: string;
  phoneCode: PhoneCode;
  phoneNum: string;
  message: string;
}

const ContactsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormState>();

  const onSubmit: SubmitHandler<IFormState> = (data) => {
    console.log(data);
    fetch("http://localhost:5000/users", {
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
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-[850px]">
      <div className="flex justify-between">
        <div className="mb-5">
          <p className="inputTitle">First Name</p>
          <input
            {...register("firstName")}
            placeholder="First Name"
            type="text"
            required
            className="primaryInput"
          />
        </div>
        <div className="mb-5">
          <p className="inputTitle">Last Name</p>
          <input
            {...register("lastName")}
            placeholder="Last Name"
            type="text"
            required
            className="primaryInput"
          />
        </div>
      </div>
      <div className="mb-5">
        <p className="inputTitle">Email</p>
        <input
          {...register("email")}
          placeholder="Email"
          type="email"
          required
          className="fullWidthInput"
        />
      </div>
      <div className="mb-5">
        <p className="inputTitle">Phone Number</p>
        <div className="flex">
          <select
            {...register("phoneCode")}
            className="py-[18px] pl-8 outline-none"
            defaultValue="US"
          >
            <option value="US">US</option>
            <option value="UK">UK</option>
            <option value="MEX">MEX</option>
          </select>
          <input
            {...register("phoneNum")}
            placeholder="Phone Number"
            type="text"
            required
            className="fullWidthInput pl-6"
          />
        </div>
      </div>
      <div className="mb-5">
        <p className="inputTitle">Message</p>
        <textarea
          {...register("message")}
          placeholder="Your Message"
          className="w-full pb-[130px] pl-[30px] pt-5 outline-none"
        />
      </div>
      <Button className="mx-auto mt-10 block w-[170px]" variant="blue">
        Send Message
      </Button>
    </form>
  );
};

export default ContactsForm;
