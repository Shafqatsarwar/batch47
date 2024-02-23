import Hero from "@/components/Hero";
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import Footer from "@/components/Footer";
import React from "react";
import Image from "next/image";

export default function Home() {
  return (
<div className="min h-screen mt-10">
      <Header/>
      <Hero/>
      <Input/>
      <Footer/>
      </div>

  );
};

//<main className="flex min-h-screen flex-col items-center justify-between p-24">
      //<div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        //<p className="flex">Next js batch 47 project </p>
      //</div>
    //</main>