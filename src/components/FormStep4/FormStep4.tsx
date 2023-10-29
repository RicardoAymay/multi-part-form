import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { MainContext } from "../../contexts/MainContext";
import ChosenAddons from './ChosenAddons';
import FormHeader, { header4 } from "../FormHeader";


const FormStep4 = () => {
  const onSubmit: SubmitHandler<any> = (data) => console.log(data);
  const { formData, recurrence } = useContext(MainContext);
  console.log(formData)
  const renderAddons = formData.addons
  const textRecurrence = recurrence === "monthly"? "mo" : "yr"
  const finalRecurrence = recurrence === "monthly"? "month" : "year"
  const finalPrice = formData.addonsTotal + formData.pricePlan  

  return (
    <form
      id="form4"
      className="flex flex-col p-6 bg-white absolute w-[350px] rounded-lg left-1/2 translate-x-[-50%] top-[14.8%]"
    >
     <FormHeader p1={header4.title} p2={header4.subtitle} />

      <section className="w-full h-fit rounded-md bg-neutral-VeryLightGray p-5">
        <div className="w-full h-full flex items-center justify-between">
          <div className="h-14">
            <p className=" leading-none text-primary-MarineBlue font-bold capitalize">
              {formData.plan} ({recurrence})
            </p>
            <p className="leading-none text-primary-CoolGray mb-8 mt-2 font-normal underline">
              Change
            </p>
          </div>
          <div className="h-full w-fit flex items-center justify-center text-primary-MarineBlue font-bold">
            ${formData.pricePlan}/{textRecurrence}
          </div>
        </div>

        <div className="border border-neutral-LightGray"></div> 


        <div className="space-y-4 pt-4">
       {renderAddons.map((el: any)=> el.value !== false ? <ChosenAddons key={el.title} addon={el.title} price={el.value} recurrence={textRecurrence}/> : null)}
        </div>
      </section>
      <div className="h-20 flex items-center justify-between">
        <p className="text-primary-CoolGray p-5">Total (per {finalRecurrence}):</p>
        <p className="flex items-center justify-center p-5 text-primary-PurplishBlue font-bold">${finalPrice}/{textRecurrence}</p>
      </div>
    </form>
  );
};

export default FormStep4;
