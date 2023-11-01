"use client";
import { MainContext } from "@/contexts/MainContext";
import React, { useContext, useEffect } from "react";
import FormStep1 from "../FormStep1/FormStep1";
import Steps from "../Steps";
import Footer from "../Footer";
import bgSidebarMobile from "../../assets/images/bg-sidebar-mobile.svg";
import FormStep2 from "@/components/FormStep2";
import FormStep3 from "../FormStep3/FormStep3";
import FormStep4 from "../FormStep4/FormStep4";
import FormStep5 from "../FormStep5/FormStep5";
import bgSidebarDesktop from "../../assets/images/bg-sidebar-desktop.svg";
import Image from 'next/image';
import './main.css'

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

  let renderForm = () => {
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
{/* 
      <div //THIS DIV WILL RENDER ON MOBILE
        style={{ backgroundImage: `url(${bgSidebarMobile.src})` }}
        className="w-full flex h-1/4 bg-cover md:hidden"
      >
        {renderForm()}
        <Steps /> 
      <Footer/>
      </div> */}


      <div //THIS WILL RENDER ON DESKTOP
      className="bg-cover md:flex maxmd:flex-col max-w-[940px] w-[95%] maxmd:w-full h-[95%] maxmd:h-full max-h-[900px] md:bg-white border md:p-5 md:rounded-lg"
      id="divTop"
      > 
        <div
          className="maxmd:w-full w-fit flex maxmd:h-1/4 md:h-full"
        >
          <Image className="maxmd:hidden" src={bgSidebarDesktop} alt=""/>
          <Steps />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center ">
          {renderForm()}
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Main;
