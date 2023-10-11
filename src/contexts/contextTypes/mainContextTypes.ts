import { Dispatch, SetStateAction } from "react";


export interface iMainValues {
step: number,
setFormData: Dispatch<SetStateAction<null>>,
setStep: Dispatch<SetStateAction<number>>,
checkStep: ()=> void
}


export interface iMainProvider {
    children: React.ReactNode;
  }
  