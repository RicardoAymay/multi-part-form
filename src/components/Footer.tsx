import React, { useContext } from "react";
import { MainContext } from "../contexts/MainContext";

const footerStyle = "text-sm flex maxmd:absolute maxmd:bottom-0 maxmd:w-screen md:w-10/12 ml-auto mb-0 mt-auto mr-auto h-[72px] bg-white items-center justify-end pr-4 pl-4"

const Footer = () => {
  const { step, setStep, formReference, confirm, setConfirm} = useContext(MainContext);
if(step === 1){
  return  (
    <footer
      className={footerStyle}
    >
      <button
        type="submit"
        form={formReference}
        className="h-10 w-[97px] bg-primary-MarineBlue text-white rounded-[4px] flex items-center justify-center"
      >
       <p>Next Step</p> 
      </button>
    </footer>
  )  
}
else if (step>1 && step<4){
  
  return (
    <footer
      className={footerStyle}
    >
      <div className="flex w-full h-full items-center justify-between">
      <button
        type="button"
        onClick={() => {setStep(step - 1)}}
        className="h-10 w-[97px] text-primary-CoolGray rounded-[4px] flex items-center justify-center">Go back
      </button>
      
      <button
        type="submit"
        form={formReference}
        className="h-10 w-[97px] bg-primary-MarineBlue text-white rounded-[4px] flex items-center justify-center"
      >
        {step === 4? "Confirm" : "Next Step"}
      </button>
      </div>
     
    </footer>
  )
}

else if (step===4){
  return confirm===true? "" :  (<footer
  className={footerStyle}
>
  <div className="flex w-full h-full items-center justify-between">
  <button
    type="button"
    onClick={() => setStep(step - 1)}
    className="h-10 w-[97px] text-primary-CoolGray rounded-[4px] flex items-center justify-center">Go back
  </button>
  
  <button
    type="submit"
    onClick={()=> setConfirm(!confirm)}
    className="h-10 w-[97px] bg-primary-PurplishBlue text-white rounded-[4px] flex items-center justify-center"
  >
    Confirm
  </button>
  </div>
 
</footer>
)}
}



export default Footer;
