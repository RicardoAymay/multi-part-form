import React, { useContext } from "react";
import { MainContext } from "../contexts/MainContext";

interface iStep {
  step: number;
  info: string;
}

const Steps = () => {
  const { step } = useContext(MainContext);
  let steps: iStep[] = [
    { step: 1, info: "YOUR INFO" },
    { step: 2, info: "SELECT PLAN" },
    { step: 3, info: "ADD-ONS" },
    { step: 4, info: "SUMMARY" },
  ];

  const stepColor = (el: iStep) => {
    if (step === el.step || step === 5) {
      return "text-primary-MarineBlue bg-primary-LightBlue border-primary-LightBlue border rounded-full w-8 h-8 flex items-center font-bold justify-center";
    } else {
      return "flex items-center sbg-none text-white border-white border rounded-full w-8 h-8  font-bold justify-center";
    }
  };

  return (
    <ul className="flex maxmd:h-40 maxmd:w-full items-center maxmd:justify-center maxmd:space-x-7 text-white font-bold text-sm md:flex-col md:w-52 md:h-72 md:absolute md:mt-10 md:space-y-6 md:ml-10">
      {steps.map((el) => (
        <li key={el.step} className="md:flex md:items-center md:w-full md:justify-center maxmd:mb-8">
            <p className={stepColor(el)}>{el.step}</p>
          <div className="w-3/4">
            <article className="flex flex-col w-3/4 pl-3 h-full">
              <p className="hidden md:flex md:text-primary-PastelBlue md:font-normal">STEP {el.step}</p>
              <p className="maxmd:hidden">{el.info}</p>
            </article>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Steps;
