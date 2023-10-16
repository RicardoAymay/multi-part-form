"use client"
import { MainContext } from '@/contexts/MainContext';
import React, { useContext } from 'react'
import FormStep1 from './FormStep1';
import Steps from './Steps';
import Footer from './Footer';

import bgSidebarDesktop from "../assets/images/bg-sidebar-mobile.svg";
import FormStep2 from '@/components/FormStep2';
import FormStep3 from './FormStep3';




const Main = () => {
    const { step } = useContext(MainContext);
    
    let renderStep = () => {
      if (step === 1) {
        return <FormStep1 />;
      }
      if (step === 2){
        return <FormStep2 />
      }
      if (step === 3){
        return <FormStep3/>
      }
    };
  return (
    <>
    <main
    className={`max-w-[1440px] min-w-[375px] flex flex-col flex-1 mr-auto ml-auto mt-0 bg-neutral-Magnolia`}
  >
    <div
      style={{ backgroundImage: `url(${bgSidebarDesktop.src})` }}
      className="w-full flex h-1/4 bg-cover"
    >
    <Steps />
    </div>
  </main>
  {renderStep()}
  <Footer />
  </>
  )
}

export default Main