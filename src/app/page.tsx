"use client"
import { Ubuntu } from "next/font/google";
import bgSidebarDesktop from "../assets/images/bg-sidebar-mobile.svg";
import Steps from "@/components/Steps";
import FormStep1 from "@/components/FormStep1";
const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

export default function Home() {
  return (
    <main className={`${ubuntu.variable} font-sans max-w-[1440px] min-w-[375px] h-screen mr-auto ml-auto mt-0 border-red-800 border-4`}>
      <div
        style={{ backgroundImage: `url(${bgSidebarDesktop.src})` }}
        className='w-full h-1/4 bg-cover'
      >
        <p>TESTE DE FONTE</p> 
        <Steps />
        <FormStep1/>
      </div>
    </main>
  );
}
