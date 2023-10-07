import { createContext, useState } from "react";
import { iMainValues, iMainProvider } from './contextTypes/mainContextTypes';

export const MainContext = createContext({} as iMainValues)

export const MainProvider = ({children}: iMainProvider) => {
const [formData, setFormData] = useState(null)

    return (
        <MainContext.Provider value={{}}>
          {children}
        </MainContext.Provider>
      );
}


