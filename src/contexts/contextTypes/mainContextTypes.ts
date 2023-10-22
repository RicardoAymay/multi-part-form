import { Dispatch, SetStateAction } from "react";


export interface iMainValues {
step: number,
setFormData: Dispatch<SetStateAction<any>>,
setStep: Dispatch<SetStateAction<number>>,
checkStep: ()=> void,
formReference: string,
setFormReference: Dispatch<SetStateAction<string>>,
formData: any | null,
formStepChange: () => void
getPlan: "arcade" | "advanced" | "pro" | null,
setGetPlan: Dispatch<SetStateAction<"arcade" | "advanced" | "pro" | null>>,
recurrence: "monthly" | "yearly",
setRecurrence: Dispatch<SetStateAction<"monthly" | "yearly">>
}


export interface iForm1Inputs {
  name: string;
  email: string;
  phone: string;
}
export interface iForm2Inputs {
  plan: "arcade" | "advanced" | "pro" | null;
  recurrence: "monthly" | "yearly"
}

export interface iMainProvider {
    children: React.ReactNode;
  }
  
  export interface iFormData {
  formStep1: iForm1Inputs;
  formStep2: iForm2Inputs;
  // ADD THE REST OF THE FORMS HERE! ALSO MUST ADD THE DEFAULT VALUES!
}


