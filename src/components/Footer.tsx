import { ubuntu } from "@/app/page";
import React, { useContext } from "react";
import { MainContext } from "../contexts/MainContext";

const Footer = () => {
  const { step, setStep, checkStep } = useContext(MainContext);
  let formNumber = (step: number) => {
    if (step) {
      console.log(`form${step}`)
      return `form${step}`;
    }
  };

  const formStepChange = (ev:React.MouseEvent) => {
    ev.preventDefault()
    console.log(step)
    if (step < 4){
     setStep(step + 1);
    }
    checkStep()
  };
  return step === 1 ? (
    <footer
      className={`${ubuntu.variable} font-sans text-sm flex w-full h-[60px] bg-white items-center justify-end pr-7`}
    >
      <button
        type="submit"
        onClick={formStepChange}
        className="h-9 w-[80px] bg-primary-MarineBlue text-white rounded-[4px] flex items-center justify-center"
      >
        Next Step
      </button>
    </footer>
  ) : (
    <footer
      className={`${ubuntu.variable} font-sans text-sm flex w-full h-[60px] bg-white items-center justify-end pr-7`}
    >
      <button
        form={formNumber(step)}
        type="button"
        className="h-9 w-[80px] bg-black text-white rounded-[4px] flex items-center justify-center"
      >
        {" "}
        ${"<"} Go back
      </button>
      <button
        type="submit"
        onClick={formStepChange}
        className="h-9 w-[80px] bg-primary-MarineBlue text-white rounded-[4px] flex items-center justify-center"
      >
        Next Step
      </button>
     
    </footer>
  );
};

export default Footer;
