import { Dispatch, SetStateAction } from "react";


export interface iMainValues {
step: number,
setFormData: Dispatch<SetStateAction<null>>,
setStep: Dispatch<SetStateAction<Step>>
}
export type Step = 1 | 2 | 3 | 4;

export interface iMainProvider {
    children: React.ReactNode;
  }
  