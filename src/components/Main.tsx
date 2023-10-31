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
import Image from 'next/image';

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
      return confirm === false ? <FormStep4 /> : <FormStep5 />;
    }
  };

  return (
    <main
      className={`w-screen min-w-[375px] h-screen flex maxmd:flex-col flex-1 mr-auto ml-auto mt-0 bg-neutral-Magnolia md:items-center md:justify-center`}
    >
      <div //DIV FOR MOBILE
        style={{ backgroundImage: `url(${bgSidebarMobile.src})` }}
        className="w-full flex h-1/4 bg-cover md:hidden"
      >
        <Steps />
      </div>

      <div className="hidden md:flex maxmd:flex-col max-w-[1440px] w-[95%] h-[95%] max-h-[900px] md:bg-white border md:p-5 md:rounded-lg">
        {/* DIV FOR DESKTOP */}
        
        <div
          className="w-fit flex maxmd:h-1/4 md:h-full"
        >

          <Image src={bgSidebarDesktop} alt=""/>
          <Steps />
        </div>


        <div className="flex flex-1 flex-col items-center justify-center ">
          {renderStep()}
          <Footer />

        </div>

      </div>
    </main>
  );
};

export default Main;
