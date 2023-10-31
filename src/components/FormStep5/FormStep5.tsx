import React from "react";
import {Form5Header} from '../FormHeader';
import { form5p1, form5p2 } from './formStep5Info';
import Image from "next/image";
import complete from "../../assets/images/icon-thank-you.svg"
const FormStep5 = () => {
  return (
    <div className="flex flex-col p-6 bg-white absolute w-10/12 rounded-lg maxmd:left-1/2 maxmd:translate-x-[-50%] top-[100px] maxmd:drop-shadow-xl md:static md:h-8/12 md:flex-1 md:items-center md:justify-center">
        <Image src={complete} alt="Thank you for your subscription" className="m-5 w-14"/>
        <Form5Header p1={form5p1} p2={form5p2}/>
    </div>
 
    );
};

export default FormStep5;
