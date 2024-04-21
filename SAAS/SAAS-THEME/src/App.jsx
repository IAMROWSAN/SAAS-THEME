import React from "react";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Details from "./Components/Details";
import Pricing from "./Components/Pricing";
import Testimonials from "./Components/Testimonials";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";

export default function App(){
  return(
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <Details/>
    <Pricing/>
    <Testimonials/>
    <Newsletter/>
    <Footer/>
    </>
  )
}