"use client";
import { MainContext } from "@/contexts/MainContext";
import React, { useContext, useEffect } from "react";
import FormStep1 from "./FormStep1";
import Steps from "./Steps";
import Footer from "./Footer";
import bgSidebarMobile from "../assets/images/bg-sidebar-mobile.svg";
import FormStep2 from "@/components/FormStep2";
import FormStep3 from "./FormStep3/FormStep3";
import FormStep4 from "./FormStep4/FormStep4";
import FormStep5 from "./FormStep5/FormStep5";
import bgSidebarDesktop from "../assets/images/bg-sidebar-desktop.svg";

const Main = () => {
  const { step, setFormReference, confirm } = useContext(MainContext);

  useEffect(() => {
    if (step === 1) {
      setFormReference("form1");
    } else if (step === 2) {
      setFormReference("form2");
    } else if (step === 3) {
      setFormReference("form3");
    } else if (step === 4) {
      setFormReference("form4");
    }
  }, [step, setFormReference]);

  let renderStep = () => {
    if (step === 1) {
      return <FormStep1 />;
    }
    if (step === 2) {
      return <FormStep2 />;
    }
    if (step === 3) {
      return <FormStep3 />;
    }
    if (step === 4) {
      return confirm===false? <FormStep4 /> : <FormStep5 /> ;
    }
  };

  return (
 
      <main
        className={`max-w-[1440px] min-w-[375px] w-full flex flex-col flex-1 mr-auto ml-auto mt-0 bg-neutral-Magnolia`}
      >
        <div //DIV FOR MOBILE
          style={{ backgroundImage: `url(${bgSidebarMobile.src})` }}
          className="w-full flex h-1/4 bg-cover md:hidden"
        >
          <Steps />
        </div>

        <div //DIV FOR DESKTOP
          style={{ backgroundImage: `url(${bgSidebarDesktop.src})` }}
          className="w-full flex h-1/4 bg-cover max-md:hidden"
        >
          <Steps />
        </div>
        {renderStep()}
      <Footer />
      </main>
   
  );
};

export default Main;
