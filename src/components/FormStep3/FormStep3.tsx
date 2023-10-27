import React, { useContext, useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import FormHeader, { header3 } from "../FormHeader";
import { MainContext } from '../../contexts/MainContext';
import { form3Info } from "./form3Info";
import { iFormData } from '../../contexts/contextTypes/mainContextTypes';
import { yupResolver } from '@hookform/resolvers/yup';
import { form3Schema } from "../Schemas/formSchemas";
import InputForm3 from "./InputForm3";

interface form3Data{
online? : number;
storage? : number;
customProfile?: number
}

const FormStep3 = () => {
  const {recurrence, formStepChange, setFormData} = useContext(MainContext)

  const { handleSubmit, register, formState: {errors}, watch } = useForm<form3Data>({
    
    // resolver: yupResolver(form3Schema),
    
  });

  
  const onSubmit: SubmitHandler<any> = (data : form3Data) => {
    console.log(data)
    formStepChange()
    if(data){setFormData((prevData: iFormData) => ({...prevData, ...data}))}
    };
    
  return (
    <form
    id="form3"
    onSubmit={handleSubmit(onSubmit)}
    className="flex flex-col p-6 bg-white absolute w-[350px] rounded-lg left-1/2 translate-x-[-50%] top-[14.8%]">
      
      <FormHeader p1={header3.title} p2={header3.subtitle} />
      
      <section className="w-full min-h-fit space-y-3">
      {form3Info.map(((el) => <InputForm3 key={el.title}
      alt="Icon"
      id={el.id} 
      title={el.title} 
      subtitle={el.subtitle}
      defaultValue={recurrence === "monthly"? el.monthPrice: el.yearPrice} 
      price={recurrence === "monthly"? el.monthPrice: el.yearPrice}
      defaultChecked={false}
      {...register(el.id)}
      />))}
       
      </section>

    </form>
  );
};
export default FormStep3;
