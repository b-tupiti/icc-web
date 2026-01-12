"use client";

import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Portfolio from "./components/portfolio";
import Process from "./components/process";
import Services from "./components/services";

export default function Home() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <Services/>
     <Portfolio/>
     <Process/>
     <Footer/>
    </>
  );
}