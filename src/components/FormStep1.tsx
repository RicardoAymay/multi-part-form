import React, { useContext, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { MainContext } from '../contexts/MainContext';
import { FormHeader,  header1 } from "./FormHeader";

import { iForm1Inputs } from '../contexts/contextTypes/mainContextTypes';

import { yupResolver } from "@hookform/resolvers/yup";
import { form1schema } from "@/schemas/formSchemas";



const FormStep1 = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(form1schema)});

 const {formStepChange, setFormData, formData, step} = useContext(MainContext)
  const onSubmit: SubmitHandler<iForm1Inputs> = (data) => {console.log(data), setFormData(data), formStepChange()};
  

  
  const autoFillInputs = () => {
    if (formData) {
      setValue('name', formData.name);
      setValue('email', formData.email);
      setValue('phone', formData.phone);
    }
  };

  useEffect(() => {
    autoFillInputs();  
  }, []); 
  useEffect(() => {
    autoFillInputs();
  }, [formData, step]);

  
  return (
    <form
      id="form1"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col p-6 bg-white absolute w-11/12 rounded-lg maxmd:left-1/2 maxmd:translate-x-[-50%] top-[100px] maxmd:drop-shadow-xl md:static"
    >
      <FormHeader p1={header1.title} p2={header1.subtitle} />

      <label htmlFor="name" className="text-primary-MarineBlue font-medium">
        Name
      </label>
      <input
        
        type="text"
        placeholder="e.g Stephen King"
        id="name"
        {...register("name")}
        className="border-neutral-LightGray border-borderWid1 rounded-md h-10 mb-4 pl-3"
      />


      <label htmlFor="email" className="text-primary-MarineBlue font-medium">
        Email Address
      </label>
      <input
        type="email"
        placeholder="e.g stephenking@lorem.com"
        id="email"
        {...register("email")}
        className="border-neutral-LightGray border-borderWid1 rounded-md h-10 mb-4 pl-3" 
      />


      <label htmlFor="phone" className="text-primary-MarineBlue font-medium">
        Phone Number
      </label>
      <input
        type="tel"
        placeholder="e.g +1 234 567 890"
        id="phone"
        {...register("phone")}
        className="border-neutral-LightGray border-borderWid1 rounded-md h-10 mb-4 pl-3"
      />
    </form>
  );
};

export default FormStep1;
