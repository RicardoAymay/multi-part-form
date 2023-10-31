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
      return "bg-none text-white border-white border rounded-full w-8 h-8 flex items-center font-bold justify-center";
    }
  };

  return (
    <ul className="flex h-40 justify-center maxmd:space-x-4 m-auto items-center font-bold text-sm md:flex-col md:w-52 md:h-72 md:absolute md:mt-10 md:space-y-6 md: ml-10">
      {steps.map((el) => (
        <li key={el.step} className="w-full h-20 flex items-center text-white justify-center text-xs font-normal">
            <p className={stepColor(el)}>{el.step}</p>
          <div className="w-3/4">
            <article className="flex flex-col w-3/4 pl-3 h-full">
              <p className="hidden md:flex md:text-primary-CoolGray">STEP {el.step}</p>
              <p>{el.info}</p>
            </article>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Steps;
