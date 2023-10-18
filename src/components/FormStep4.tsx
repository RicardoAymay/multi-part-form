import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const FormStep4 = () => {
  const { handleSubmit, register } = useForm();
  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  return (
    <form
      id="form4"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col p-6 bg-white absolute w-[350px] rounded-lg left-1/2 translate-x-[-50%] top-[14.8%]"
    >
      <p className="text-2xl text-primary-MarineBlue font-bold">Pick add-ons</p>
      <p className="text-primary-CoolGray mb-8 mt-2 font-normal">
        Add-ons help enhance your gaming experience.
      </p>

      <section className="w-full h-fit rounded-md bg-neutral-VeryLightGray p-5">
        <div className="w-full h-full flex items-center justify-between">
          <div className="h-14">
            <p  className=" leading-none text-primary-MarineBlue font-bold">Arcade (Monthly)</p>
            <p className="leading-none text-primary-CoolGray mb-8 mt-2 font-normal underline">Change</p>
          </div>
          <div className="h-full w-fit flex items-center justify-center text-primary-MarineBlue font-bold">$9/mo</div>
        </div>
        <div className="border border-neutral-LightGray"></div>
        <div className="space-y-4 pt-4">
          <div className="flex justify-between">
            <p className="text-primary-CoolGray flex items-center">Online service</p><p className="flex items-center text-primary-MarineBlue">+$1/mo</p>
          </div>
          <div className="flex justify-between">
            <p className="text-primary-CoolGray flex items-center">Online service</p><p className="flex items-center text-primary-MarineBlue">+$1/mo</p>
          </div>
        </div>
       
      </section>
        <div className="h-20 flex items-center justify-between">
          <p className="text-primary-CoolGray">Total (per month):</p>
          <p className="flex items-center justify-center">+$12</p>
        </div>
    </form>
  );
};

export default FormStep4;
