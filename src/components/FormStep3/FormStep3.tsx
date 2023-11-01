import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {FormHeader, header3 } from "../FormHeader";
import { MainContext } from '../../contexts/MainContext';

import { iFormData } from '../../contexts/contextTypes/mainContextTypes';
import { yupResolver } from '@hookform/resolvers/yup';
import { form3Schema } from "../../schemas/formSchemas";
import InputForm3 from "./InputForm3";
import { form3Info } from "./form3Info";


interface form3Data{
online? : number | false
storage? : number | false
customProfile?: number | false
}

const FormStep3 = () => {
  const {recurrence, formStepChange, setFormData} = useContext(MainContext)
  const { handleSubmit, register, formState: {errors}} = useForm<form3Data>({
    
    // resolver: yupResolver(form3Schema),
    
  });
   
  const onSubmit: SubmitHandler<any> = (data : form3Data) => {
    const filterAddons = () => {
      const addon = []
      if (data.online && data.online > 0){
        addon.push( {
          title: "Online service",
          value: +data.online,
        })
      }

      if (data.storage && data.storage>0){
        addon.push({
          title: "Larger storage",
          value: +data.storage,
        })
      }
      if (data.customProfile && data.customProfile>0){
        addon.push({
          title: "Customizable profile",
          value: +data.customProfile,
        })
      }
      return addon
    }

    const addons = filterAddons()
    console.log(addons)
    const addonsTotal = addons.reduce((acc, current) => acc + current.value, 0);
    console.log(addonsTotal)
    formStepChange()
    if(data){setFormData((prevData: iFormData) => ({...prevData, addons, addonsTotal}))}
    };
    
  return (
    <form
    id="form3"
    onSubmit={handleSubmit(onSubmit)}
    className="flex flex-col p-6 bg-white absolute w-10/12 rounded-lg maxmd:left-1/2 maxmd:translate-x-[-50%] top-[100px] maxmd:drop-shadow-xl md:static md:h-8/12 md:flex-1">
      
      <FormHeader p1={header3.title} p2={header3.subtitle} />
      
      <section className="w-full min-h-fit space-y-3">
      {form3Info.map(((el) => <InputForm3 key={el.title}
      alt="Icon"
      id={el.id} 
      title={el.title} 
      subtitle={el.subtitle}
      defaultValue={recurrence === "monthly"? el.monthPrice: el.yearPrice} 
      price={recurrence === "monthly"? el.monthPrice: el.yearPrice}
      {...register(el.id)}
      />))}
       
      </section>

    </form>
  );
};
export default FormStep3;
