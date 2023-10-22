"use client";
import { createContext, useState } from "react";
import {
  iMainValues,
  iMainProvider,
 iForm2Inputs
} from "./contextTypes/mainContextTypes";

export const MainContext = createContext({} as iMainValues);

export const MainProvider = ({ children }: iMainProvider) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<any>(null);
  const [formReference, setFormReference] = useState<string>("form1");
  const [getPlan, setGetPlan] = useState<iForm2Inputs["plan"]>(null);
  const [recurrence, setRecurrence] = useState<iForm2Inputs["recurrence"]>("monthly");

  const formStepChange = () => {
    if (step > 0 && step < 4) setStep(step + 1);

    if (step > 4 && step < 0) {
      alert(
        "Something is altering a function is shouldn't. If persists, contact the support ASAP"
      );
    }
  };

  const checkStep = () => {
    if (step > 4 || step < 1) {
      setStep(1);
    }
  };

  return (
    <MainContext.Provider
      value={{
        setFormData,
        step,
        setStep,
        checkStep,
        formReference,
        setFormReference,
        formStepChange,
        formData,
        getPlan,
        setGetPlan,
        recurrence,
        setRecurrence,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
