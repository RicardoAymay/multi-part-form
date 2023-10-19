import { Dispatch, SetStateAction } from "react";


export interface iMainValues {
step: number,
setFormData: Dispatch<SetStateAction<null>>,
setStep: Dispatch<SetStateAction<number>>,
checkStep: ()=> void,
formReference: string,
setFormReference: Dispatch<SetStateAction<string>>,
formData: string | null
}


export interface iMainProvider {
    children: React.ReactNode;
  }
  