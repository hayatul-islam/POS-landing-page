import React from "react";
import AboutUs from "../components/home/AboutUs";
import HeroSection from "../components/home/HeroSection";
import ServicePlan from "../components/home/ServicePlan";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicePlan />
      <AboutUs />
    </div>
  );
};

export default Home;
