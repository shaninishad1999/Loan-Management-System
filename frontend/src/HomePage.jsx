import React from "react";
import About from "./section/About";
import HowToApply from "./section/HowToApply";
import WhyChooseLoan from "./section/WhyChooseLoan";
import HeroSection from "./section/HeroSection";

const HomePage = () => {
  return (
    <>
      <div className=" max-w-7xl mx-auto lg:mt-20 md:mt-14 space-y-20 ">
        <HeroSection />
        <About />
        <HowToApply />
        <WhyChooseLoan />
      </div>
    </>
  );
};

export default HomePage;
