
import React, { useContext } from "react";
import { MainContext } from "../contexts/MainContext";

const Footer = () => {
  const { step, setStep, checkStep } = useContext(MainContext);
  let formNumber = (step: number) => {
    if (step) {
      return `form${step}`;
    }
  };

  const formStepChange = (ev:React.MouseEvent) => {
    ev.preventDefault()
    let text = (ev.target as HTMLButtonElement).innerText;
    console.log(text)
    if (step < 4 && text === "Next Step"){
     setStep(step + 1);
    }
    if(step > 1 && text === `< Go back`){
      setStep(step - 1)
    }
    checkStep()
  };
  
  return step === 1 ? (
    <footer
      className={`text-sm flex w-full h-[60px] bg-white items-center justify-end pr-4`}
    >
      <button
        type="submit"
        onClick={formStepChange}
        className="h-9 w-[80px] bg-primary-MarineBlue text-white rounded-[4px] flex items-center justify-center"
      >
       <p>Next Step</p> 
      </button>
    </footer>
  ) : (
    <footer
      className={`text-sm flex w-full h-[60px] bg-white items-center justify-end pr-4 pl-4`}
    >
      <div className="flex w-full h-full items-center justify-between">
      <button
        form={formNumber(step)}
        type="button"
        onClick={formStepChange}
        className="h-9 w-[80px] bg-black text-white rounded-[4px] flex items-center justify-center">{"<"} Go back
      </button>
      <button
        type="submit"
        onClick={formStepChange}
        className="h-9 w-[80px] bg-primary-MarineBlue text-white rounded-[4px] flex items-center justify-center"
      >
        Next Step
      </button>
      </div>
     
    </footer>
  );
};

export default Footer;
