import React, { useContext } from "react";
import { MainContext } from "../../contexts/MainContext";
import {FormHeader, header4 } from "../FormHeaders";
import ChosenAddons from "./ChosenAddons";
import { iFormData } from "@/contexts/contextTypes/mainContextTypes";

const FormStep4 = () => {
  const { formData, recurrence, setRecurrence, setFormData } = useContext(MainContext);
  const renderAddons = formData.addons
  const textRecurrence = recurrence === "monthly"? "mo" : "yr"
  const finalRecurrence = recurrence === "monthly"? "month" : "year"
  let finalPrice = formData.addonsTotal + formData.pricePlan  
  
 
  const toggleRecurrence = () => {
    const newRecurrence = recurrence === "monthly" ? "yearly" : "monthly";
    const newPricePlan = newRecurrence === "monthly" ? formData.pricePlan / 10 : formData.pricePlan * 10;
     
   const newAddonsPricing = formData.addons.map((element: any ) => newRecurrence === "monthly"? element.value = element.value/10 : element.value = element.value*10)
   const newAddonsTotal = newAddonsPricing.reduce((acc: number, current: number) => acc + current, 0)
  

    setRecurrence(newRecurrence);

    setFormData((prevData: iFormData) => ({
      ...prevData,
      pricePlan: newPricePlan,
      recurrence: newRecurrence,
      addonsTotal: newAddonsTotal
    }));
  };
  
  
  return (
    <form
      id="form4"
      className="flex flex-col p-6 bg-white absolute w-10/12 rounded-lg maxmd:left-1/2 maxmd:translate-x-[-50%] top-[100px] maxmd:drop-shadow-xl md:static md:h-8/12 md:flex-1"
    >
     <FormHeader p1={header4.title} p2={header4.subtitle} />

      <section className="w-full h-fit rounded-md bg-neutral-VeryLightGray p-5">
        <div className="w-full h-full md:h-fit flex items-center justify-between">
          <div className="h-14">
            <p className=" leading-none text-primary-MarineBlue font-bold capitalize">
              {formData.plan} ({recurrence})
            </p>
            <button type="button" onClick={toggleRecurrence} className="leading-none text-primary-CoolGray mb-8 mt-2 font-normal underline">
              Change
            </button>
          </div>
          <div className="h-full md:h-2 w-fit flex items-center justify-center text-primary-MarineBlue font-bold">
            ${formData.pricePlan}/{textRecurrence}
          </div>
        </div>

        <div className="border border-neutral-LightGray"></div> 

        <div className="space-y-4 pt-4">
       {renderAddons.map((el: any)=> el.value !== false ? <ChosenAddons key={el.title} addon={el.title} price={el.value} recurrence={textRecurrence}/> : null)}
        </div>

      </section>
      <div className="h-fit flex items-center justify-between">
        <p className="text-primary-CoolGray p-5">Total (per {finalRecurrence}):</p>
        <p className="flex items-center justify-center p-5 text-primary-PurplishBlue font-bold">${finalPrice}/{textRecurrence}</p>
      </div>
    </form>
  );
};

export default FormStep4;
