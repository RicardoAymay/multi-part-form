import { createContext, useState } from "react";
import { iMainValues, iMainProvider, Step } from './contextTypes/mainContextTypes';

export const MainContext = createContext({} as iMainValues)

export const MainProvider = ({children}: iMainProvider) => {
const [step, setStep]=useState<Step>(1)
const [formData, setFormData] = useState(null)

    return (
        <MainContext.Provider value={{setFormData, step, setStep}}>
          {children}
        </MainContext.Provider>
      );
}


