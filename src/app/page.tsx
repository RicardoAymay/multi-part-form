"use client"
import { MainProvider } from "../contexts/MainContext";
import Main from "../components/Main";
import { Ubuntu } from "next/font/google";

export const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin", "cyrillic", "greek"],
  variable: "--font-ubuntu",
});
export default function Home() {

  return (
   
      <MainProvider>
       <Main/>
      </MainProvider>
    
  );
}
