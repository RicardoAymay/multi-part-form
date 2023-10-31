"use client"
import { MainProvider } from "../contexts/MainContext";
import Main from "../components/Main/Main";

export default function Home() {

  return (
   
    <MainProvider>
       <Main/>
    </MainProvider>    
  );
}
