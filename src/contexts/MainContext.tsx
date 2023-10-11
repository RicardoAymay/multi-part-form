"use client"
import { createContext, useState } from "react";
import { iMainValues, iMainProvider, } from './contextTypes/mainContextTypes';

export const MainContext = createContext({} as iMainValues)

export const MainProvider = ({children}: iMainProvider) => {
const [step, setStep]=useState<number>(1)
const [formData, setFormData] = useState(null)

const checkStep = () =>{
  if(step>4 || step <1){
    setStep(1)
    setFormData(null)
  }
}

    return (
        <MainContext.Provider value={{setFormData, step, setStep, checkStep}}>
          {children}
        </MainContext.Provider>
      );
}


