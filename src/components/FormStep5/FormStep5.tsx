import React from "react";
import {Form5Header} from '../FormHeader';
import { form5p1, form5p2 } from './formStep5Info';
import Image from "next/image";
import complete from "../../assets/images/icon-thank-you.svg"
const FormStep5 = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white absolute w-[350px] rounded-lg left-1/2 translate-x-[-50%] top-[14.8%] drop-shadow-2xl">
        <Image src={complete} alt="Thank you for your subscription" className="m-5 w-14"/>
        <Form5Header p1={form5p1} p2={form5p2}/>
    </div>
 
    );
};

export default FormStep5;
