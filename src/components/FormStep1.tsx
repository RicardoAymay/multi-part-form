import React, { ReactNode } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface iInputs {
  name: string;
  email: string;
  phone: string;
}

const FormStep1 = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<iInputs>();
  const onSubmit: SubmitHandler<iInputs> = (data) => console.log(data);
  const inputStyle = "bg-red"
  return (     
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-5 bg-white absolute w-5/6 rounded-lg left-1/2 translate-x-[-50%] translate-y-[28%]">
      <p className="text-xl">Personal info</p>
      <p className="text-primary-CoolGray">Please provide your name, email address and phone number.</p>

        <label htmlFor="name" className="text-primary-MarineBlue font-medium">Name</label>
        <input type="text" id="name" {...register("name")} className="border-neutral-LightGray border-2 rounded-md h-10 mb-4 pl-4"/>
        
        <label htmlFor="email" className="text-primary-MarineBlue font-medium">Email Address</label>
        <input type="email" id="email" {...register("email")} className="border-neutral-LightGray border-2 rounded-md h-10 mb-4"/>
        
        <label htmlFor="phone" className="text-primary-MarineBlue font-medium">Phone Number</label>
        <input type="tel" id="phone" {...register("phone")} className="border-neutral-LightGray border-2 rounded-md h-10 mb-4"/>
      </form>   
  );
}; 

export default FormStep1;
