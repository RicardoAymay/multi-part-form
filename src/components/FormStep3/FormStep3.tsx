import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {FormHeader, header3 } from "../FormHeaders";
import { MainContext } from '../../contexts/MainContext';
import { iForm3Inputs, iFormData } from '../../contexts/contextTypes/mainContextTypes';
import InputForm3 from "./InputForm3";
import { form3Info } from "./form3Info";



const FormStep3 = () => {
  const {recurrence, formStepChange, setFormData} = useContext(MainContext)
  const { handleSubmit, register, formState: {errors}} = useForm<iForm3Inputs>({});
   
  const onSubmit: SubmitHandler<iForm3Inputs> = (data : iForm3Inputs) => {
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
    const addonsTotal = addons.reduce((acc, current) => acc + current.value, 0);
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
