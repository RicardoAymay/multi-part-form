import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import imgCheck from "../../assets/images/icon-checkmark.svg";




const FormStep3 = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const { handleSubmit, register } = useForm();

  const inputChecker = (ev: React.MouseEvent<HTMLLabelElement>) =>{
    ev.preventDefault()
    const labelFor = ev.currentTarget.htmlFor
      
    if (labelFor === "online"){
      
      setIsChecked1(!isChecked1)
    }
    if (labelFor === "storage"){
      setIsChecked2(!isChecked2)
    }
    if (labelFor === "customProfile"){
      setIsChecked3(!isChecked3)
    }
  }
  const onSubmit: SubmitHandler<any> = (data) => console.log(data);
  const ifCheckedFigure = (checkedStatus: boolean) =>{
    return checkedStatus? "bg-primary-PurplishBlue border primary-PurplishBlue" : "bg-white border-neutral-LightGray"
  }
  const ifCheckedLabel = (checkedStatus: boolean) =>{
    return checkedStatus? "bg-neutral-Alabaster border border-primary-PurplishBlue" : "border border-neutral-LightGray"
  }

  return (
    <form
    id="form1"
    onSubmit={handleSubmit(onSubmit)}
    className="flex flex-col p-6 bg-white absolute w-[350px] rounded-lg left-1/2 translate-x-[-50%] top-[14.8%]">
      
      <p className="text-2xl text-primary-MarineBlue font-bold">Pick add-ons</p>
      <p className="text-primary-CoolGray mb-8 mt-2 font-normal">
        Add-ons help enhance your gaming experience.
      </p>
      <section className="w-full min-h-fit space-y-3">

      <label onClick={inputChecker} htmlFor="online" className={`flex h-fit  rounded-md ${ifCheckedLabel(isChecked1)}`}>
        <input {...register("online")} type="checkbox" hidden name="online" id="online"/>

        <div className="w-2/12 h-16 flex items-center justify-center">
          <figure className={`border w-5 h-5 rounded-md flex items-center justify-center transition-all ${ifCheckedFigure(isChecked1)}`}>
            <Image src={imgCheck} alt=""/>
          </figure>
        </div>
        <div className="w-6/12 h-16 flex flex-1 flex-col justify-center space-y-1">
          <p className="text-sm text-primary-MarineBlue font-bold">Online service</p>
          <p className="text-xs text-primary-CoolGray">Access to multiplayer games</p>
        </div>
        <div className="w-3/12 h-16 flex items-center justify-center ">
          <p className="text-sm text-primary-PurplishBlue">+1/mo</p>
        </div>
      </label>

      <label htmlFor="storage" onClick={inputChecker} className={`flex h-fit  rounded-md ${ifCheckedLabel(isChecked2)}`}>
        <input {...register("storage")} type="checkbox" hidden name="storage" id="storage"/>

        <div className="w-2/12 h-16 flex items-center justify-center">
          <figure className={`border w-5 h-5 rounded-md flex items-center justify-center transition-all ${ifCheckedFigure(isChecked2)}`}>
            <Image src={imgCheck} alt=""/>
          </figure>
        </div>
        <div className="w-6/12 h-16 flex flex-1 flex-col justify-center space-y-1">
          <p className="text-sm text-primary-MarineBlue font-bold">Larger storage</p>
          <p className="text-xs text-primary-CoolGray">Extra 1TB of cloud save</p>
        </div>
        <div className="w-3/12 h-16 flex items-center justify-center ">
          <p className="text-sm text-primary-PurplishBlue">+2/mo</p>
        </div>
      </label>

      <label onClick={inputChecker} htmlFor="customProfile" className={`flex h-fit  rounded-md ${ifCheckedLabel(isChecked3)}`}>
        <input {...register("customProfile")} type="checkbox" hidden name="customProfile" id="customProfile"/>

        <div className="w-2/12 h-16 flex items-center justify-center">
          <figure className={`border w-5 h-5 rounded-md flex items-center justify-center transition-all ${ifCheckedFigure(isChecked3)}`}>
            <Image src={imgCheck} alt=""/>
          </figure>
        </div>
        <div className="w-6/12 h-16 flex flex-1 flex-col justify-center space-y-1">
          <p className="text-sm text-primary-MarineBlue font-bold">Online service</p>
          <p className="text-xs text-primary-CoolGray">Access to multiplayer games</p>
        </div>
        <div className="w-3/12 h-16 flex items-center justify-center ">
          <p className="text-sm text-primary-PurplishBlue">+2/mo</p>
        </div>
      </label>

      </section>
    
    </form>
  );
};
export default FormStep3;
