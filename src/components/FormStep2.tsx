import React, { useContext, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import arcadeImg from "../assets/images/icon-arcade.svg";
import advImg from "../assets/images/icon-advanced.svg";
import proImg from "../assets/images/icon-pro.svg";
import { MainContext } from "../contexts/MainContext";
import { form2Schema } from "./Schemas/formSchemas";
import { iForm2Inputs, iForm1Inputs } from '../contexts/contextTypes/mainContextTypes';
import FormHeader, { header2 } from "./FormHeader";

interface iInputs2 {
  plan: "arcade" | "advanced" | "pro" | null;
  recurrence: "monthly" | "yearly";
}

const FormStep2 = () => {
  const { formStepChange, recurrence, setGetPlan, setRecurrence, getPlan, setFormData, formData } =
    useContext(MainContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(form2Schema),
    defaultValues: { recurrence: recurrence },
  });

  const onSubmit: SubmitHandler<iForm2Inputs> = (data) => {
    console.log(data), formStepChange(), setFormData((prevData : iForm1Inputs) => ({ ...prevData, ...data }));
  };
  interface iPrice {
    arcade: number;
    advanced: number;
    pro: number
  }
  
  const monthlyPrice: iPrice = {
    "arcade": 9,
    "advanced": 12,
    "pro": 15
  }
  const yearlyPrice: iPrice = {
    "arcade": 90,
    "advanced": 120,
    "pro": 150,
  }

  
  useEffect(() => {
    if (recurrence === "monthly") {
      setValue("recurrence", "monthly"); 
    } else if (recurrence === "yearly") {
      setValue("recurrence", "yearly"); 
    }
  }, [recurrence, setRecurrence]);
  
  const handlePlanChange = (event: React.MouseEvent<HTMLInputElement>) => {
    setGetPlan((event.target as HTMLInputElement).value as iInputs2["plan"]);
  };
  const monthYear = () => {
    return recurrence === "monthly" ? "mr-4" : "ml-4";
  };
  const changeRecurrenceEvent = () => {
    if (recurrence === "monthly") {
      setRecurrence("yearly");
      
    }
    if (recurrence === "yearly") {
      setRecurrence("monthly");
      
    }
  };
  const setCheckedStyle = (plan: iInputs2["plan"]) => {
    if (plan === getPlan) {
      return "border border-primary-PurplishBlue bg-neutral-Alabaster";
    } else {
      return "border border-neutral-LightGray";
    }
  };

  return (
    <form
      id="form2"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col p-6 bg-white absolute w-[350px] rounded-lg left-1/2 translate-x-[-50%] top-[14.8%]"
    >
      <FormHeader p1={header2.title} p2={header2.subtitle} />

      <section className="flex flex-col w-full h-auto space-y-4">

        <label
          htmlFor="arcade"
          className={`text-primary-MarineBlue font-medium h-[4.5rem] w-full rounded-md ${setCheckedStyle(
            "arcade"
          )}`}
        >
          <div className="w-full h-full flex">
            <figure className="w-1/5 flex items-center justify-center">
              <Image src={arcadeImg} alt="Arcarde!" />
            </figure>
            <div className="flex flex-col flex-1 justify-center space-y-1">
              <p className="font-bold">Arcade</p>
              <p className="text-primary-CoolGray text-sm">${recurrence === "monthly"? monthlyPrice.arcade : yearlyPrice.arcade}/{recurrence === "monthly"? "mo" : "yr"}</p>
            </div>
          </div>

          
          <input
            type="radio"
            id="arcade"
            {...register("plan")}
            className="hidden"
            value={"arcade"}
            checked={getPlan === "arcade"}
            onClick={handlePlanChange}
          />
        </label>

        <label
          htmlFor="advanced"
          className={`text-primary-MarineBlue font-medium h-[4.5rem] rounded-md w-full ${setCheckedStyle(
            "advanced"
          )}`}
        >
          <div className="w-full h-full flex">
            <figure className="w-1/5 flex items-center justify-center">
              <Image src={advImg} alt="Arcarde!" />
            </figure>
            <div className="flex flex-col flex-1 justify-center">
              <p className="font-bold">Advanced</p>
              <p className="text-primary-CoolGray">${recurrence === "monthly"? monthlyPrice.advanced : yearlyPrice.advanced}/{recurrence === "monthly"? "mo" : "yr"}</p>
            </div>
          </div>
          <input
            type="radio"
            id="advanced"
            {...register("plan")}
            className="hidden"
            value={"advanced"}
            checked={getPlan === "advanced"}
            onClick={handlePlanChange}
          />
        </label>

        <label
          htmlFor="pro"
          className={`text-primary-MarineBlue font-medium h-[4.5rem] rounded-md ${setCheckedStyle(
            "pro"
          )}`}
        >
          <div className="w-full h-full flex">
            <figure className="w-1/5 flex items-center justify-center">
              <Image src={proImg} alt="Arcarde!" />
            </figure>
            <div className="flex flex-col flex-1 justify-center">
              <p className="font-bold">Pro</p>
              <p className="text-primary-CoolGray">${recurrence === "monthly"? monthlyPrice.pro : yearlyPrice.pro}/{recurrence === "monthly"? "mo" : "yr"}</p>
            </div>
          </div>
          <input
            type="radio"
            id="pro"
            {...register("plan")}
            className="hidden"
            value={"pro"}
            checked={getPlan === "pro"}
            onClick={handlePlanChange}
          />
        </label>
        {errors.plan && <p className="text-red-600">{errors.plan.message}</p>}

        <label
          htmlFor="recurrence"
          className="w-full h-12 bg-neutral-VeryLightGray rounded-md flex items-center justify-center space-x-6"
        >
          <p>Monthly</p>
          <div className="w-10 h-5 bg-primary-MarineBlue rounded-2xl flex items-center justify-center ">
            <div
              onClick={changeRecurrenceEvent}
              className={`bg-white w-3 h-3 rounded-full relative ${monthYear()} ease-in-out duration-300`}
            ></div>
          </div>
          <p>Yearly</p>
          <input
            hidden
            readOnly
            type="text"
            id="recurrence"
            name="recurrence"
            value={recurrence}
          />
        </label>
        {errors.recurrence && (
          <p className="text-red-600">{errors.recurrence.message}</p>
        )}
      </section>
    </form>
  );
};

export default FormStep2;
