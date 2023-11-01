import React from 'react'
export interface iTitleSubtitle {
  title: string;
  subtitle: string;
}

export const header1: iTitleSubtitle = {
  title: "Personal info",
  subtitle: "Please provide your name, email address and phone number.",
};

export const header2: iTitleSubtitle = {
  title: "Select your plan",
  subtitle: "You have the option of montly or yearly billing",
};

export const header3: iTitleSubtitle = {
  title: "Pick add-ons",
  subtitle: "Add-ons help enhance your gaming experience.",
};

export const header4: iTitleSubtitle = {
  title: "Finishing up",
  subtitle: "Double-check everything looks OK before confirming.",
}
interface FormHeaderProps {
    p1: string;
    p2: string;
  }
  
  export const FormHeader: React.FC<FormHeaderProps> = ({ p1, p2 }) => {
    return (
      <>
        <p className="text-2xl text-primary-MarineBlue font-bold">
          {p1}
        </p>
        <p className="text-primary-CoolGray mb-8 mt-2 font-normal">
          {p2}
        </p>
      </>
    );
  };

 
  
  
