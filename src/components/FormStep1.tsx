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
    formState: { errors },
  } = useForm<iInputs>();
  const onSubmit: SubmitHandler<iInputs> = (data) => console.log(data);
  const inputStyle = "bg-red"
  return (     
      <form id="form1" onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-6 bg-white absolute w-[350px] rounded-lg left-1/2 translate-x-[-50%] top-[14.8%]">
        <p className="text-2xl text-primary-MarineBlue font-bold">Personal info</p>
        <p className="text-primary-CoolGray mb-8 mt-2 font-normal">Please provide your name, email address and phone number.</p>

        <label htmlFor="name" className="text-primary-MarineBlue font-medium">Name</label>
        <input type="text" placeholder="e.g Stephen King" id="name" {...register("name")} className="border-neutral-LightGray border-borderWid1 rounded-md h-10 mb-4 pl-4"/>
        
        <label htmlFor="email" className="text-primary-MarineBlue font-medium">Email Address</label>
        <input type="email" placeholder="e.g stephenking@lorem.com" id="email" {...register("email")} className="border-neutral-LightGray border-borderWid1 rounded-md h-10 mb-4 pl-4"/>
        
        <label htmlFor="phone" className="text-primary-MarineBlue font-medium">Phone Number</label>
        <input type="tel" placeholder="e.g +1 234 567 890" id="phone" {...register("phone")} className="border-neutral-LightGray border-borderWid1 rounded-md h-10 mb-4 pl-4"/>
      </form>   
  );
}; 

export default FormStep1;
