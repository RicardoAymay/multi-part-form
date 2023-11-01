import React, { useContext, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { MainContext } from '../../contexts/MainContext';
import { FormHeader,  header1 } from "../FormHeader";
import { iForm1Inputs } from '../../contexts/contextTypes/mainContextTypes';
import { yupResolver } from "@hookform/resolvers/yup";
import { form1schema } from "@/schemas/formSchemas";
import InputForm1 from './InputForm1';

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
      className="flex flex-col p-6 bg-white absolute w-10/12 rounded-lg maxmd:left-1/2 maxmd:translate-x-[-50%] top-[100px] maxmd:drop-shadow-xl md:static space-y-4"
    >
      <FormHeader p1={header1.title} p2={header1.subtitle} />

      <InputForm1 field="name" label="Name" {...register("name")} error={errors.name} placeholder="e.g Stephen King"/>

      <InputForm1 field="email" label="Email" {...register("email")} error={errors.email} placeholder="e.g stephenking@lorem.com"/>

      <InputForm1 field="phone" label="Phone number" {...register("phone")} error={errors.phone} placeholder="e.g +1 234 567 890"/>
    </form>
  );
};

export default FormStep1;
