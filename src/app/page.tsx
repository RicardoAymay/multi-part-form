"use client";
import { Ubuntu } from "next/font/google";
import bgSidebarDesktop from "../assets/images/bg-sidebar-mobile.svg";
import Steps from "@/components/Steps";
import FormStep1 from "@/components/FormStep1";
import Footer from "@/components/Footer";

export const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin", "cyrillic", "greek"],
  variable: "--font-ubuntu",
});

export default function Home() {
  return (
    <>
      <main
        className={`${ubuntu.variable} font-sans max-w-[1440px] min-w-[375px] flex flex-col flex-1 mr-auto ml-auto mt-0 bg-neutral-Magnolia`}
      >
        <div
          style={{ backgroundImage: `url(${bgSidebarDesktop.src})` }}
          className="w-full flex h-1/4 bg-cover"
        >
          <Steps />
        </div>

        <FormStep1 />
      </main>
      <Footer />
    </>
  );
}
