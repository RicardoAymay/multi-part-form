import React, { ReactNode } from "react";
import { useForm, SubmitHandler } from "react-hook-form";



interface iInputs2 {
  plan: "arcade" | "advanced" | "pro" 
}

const FormStep2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iInputs2>();
  const onSubmit: SubmitHandler<iInputs2> = (data) => console.log(data);
  const inputStyle = "bg-red"
  return (     
      <form id="form1" onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-5 bg-white absolute w-11/12 rounded-lg left-1/2 translate-x-[-50%] translate-y-[28%]">
        <p className="text-2xl text-primary-MarineBlue font-bold">Personal info</p>
        <p className="text-primary-CoolGray mb-8 mt-2 font-normal">Please provide your name, email address and phone number.</p>

        <label htmlFor="arcade" className="text-primary-MarineBlue font-medium">Arcade</label>
        <input type="radio" id="arcade" {...register("plan")} className="border-neutral-LightGray border-borderWid1 rounded-md h-10 mb-4 pl-4"/>
        
        <label htmlFor="Advanced" className="text-primary-MarineBlue font-medium">Advanced</label>
        <input type="radio" id="Advanced" {...register("plan")} className="border-neutral-LightGray border-borderWid1 rounded-md h-10 mb-4 pl-4"/>
        
        <label htmlFor="phone" className="text-primary-MarineBlue font-medium">Pro</label>
        <input type="radio" id="phone" {...register("plan")} className="border-neutral-LightGray border-borderWid1 rounded-md h-10 mb-4 pl-4"/>
      </form>   
  );
}; 

export default FormStep2;