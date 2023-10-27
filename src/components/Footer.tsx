import React, { useContext } from "react";
import { MainContext } from "../contexts/MainContext";


const Footer = () => {
  const { step, setStep, formReference} = useContext(MainContext);

  return step === 1 ? (
    <footer
      className={`text-sm flex w-[375px] ml-auto mr-auto h-[72px] bg-white items-center justify-end pr-4 pl-4`}
    >
      <button
        type="submit"
        form={formReference}
        className="h-10 w-[97px] bg-primary-MarineBlue text-white rounded-[4px] flex items-center justify-center"
      >
       <p>Next Step</p> 
      </button>
    </footer>
  ) : (
    <footer
      className={`text-sm flex w-[375px] ml-auto mr-auto h-[72px] bg-white items-center justify-end pr-4 pl-4`}
    >
      <div className="flex w-full h-full items-center justify-between">
      <button
        type="button"
        onClick={() => setStep(step - 1)}
        className="h-10 w-[97px] text-primary-CoolGray rounded-[4px] flex items-center justify-center">Go back
      </button>
      
      <button
        type="submit"
        form={formReference}
        className="h-10 w-[97px] bg-primary-MarineBlue text-white rounded-[4px] flex items-center justify-center"
      >
        {step === 4? "Confirm" : "Next Step"}
      </button>
      </div>
     
    </footer>
  );
};

export default Footer;
