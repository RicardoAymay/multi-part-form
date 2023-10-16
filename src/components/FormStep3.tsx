import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const FormStep3 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();
  const onSubmit: SubmitHandler<any> = (data) => console.log(data);
  return (
    <form
      id="form1"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col p-6 bg-white absolute w-11/12 rounded-lg left-1/2 translate-x-[-50%] top-[14.8%]"
    >
      <p className="text-2xl text-primary-MarineBlue font-bold">Pick add-ons</p>
      <p className="text-primary-CoolGray mb-8 mt-2 font-normal">
        Add-ons help enhance your gaming experience
      </p>

    <section className="w-full space-y-4">

      <div className="flex w-full flex-row-reverse border-borderWid1 rounded-md items-center justify-center">

        <label
          htmlFor="arcade"
          className="text-primary-MarineBlue font-medium h-full flex-1 pl-5"
        >
          <p>Arcade</p>
          <p>+2/mo</p>
        </label>


        <div className="h-full flex items-center justify-center w-10 pt-4 ml-3">
          <input
            type="checkbox"
            id="arcade"
            {...register("plan")}
            className=" w-1/2 border-neutral-LightGray rounded-md h-10 mb-4 pl-4"
          />
        </div>
      </div>

      <div className="flex w-full flex-row-reverse border-borderWid1 rounded-md items-center justify-center">


<label
  htmlFor="arcade"
  className="text-primary-MarineBlue font-medium h-full flex-1 pl-5"
>
  <p>Arcade</p>
  <p>+2/mo</p>
</label>


<div className="h-full flex items-center justify-center w-10 pt-4 ml-3">
  <input
    type="checkbox"
    id="arcade"
    {...register("plan")}
    className=" w-1/2 border-neutral-LightGray rounded-md h-10 mb-4 pl-4"
  />
</div>
</div>
<div className="flex w-full flex-row-reverse border-borderWid1 rounded-md items-center justify-center">


<label
  htmlFor="arcade"
  className="text-primary-MarineBlue font-medium h-full flex-1 pl-5"
>
  <p>Arcade</p>
  <p>+2/mo</p>
</label>


<div className="h-full flex items-center justify-center w-10 pt-4 ml-3">
  <input
    type="checkbox"
    id="arcade"
    {...register("plan")}
    className=" w-1/2 border-neutral-LightGray rounded-md h-10 mb-4 pl-4"
  />
</div>
</div>
    </section>

    </form>
  );
};

export default FormStep3;
