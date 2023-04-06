import React from "react";
import AboutUs from "../components/home/AboutUs";
import HeroSection from "../components/home/HeroSection";
import PaymentMethod from "../components/home/PaymentMethod";
import PosSystem from "../components/home/PosSystem";
import ServicePlan from "../components/home/ServicePlan";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicePlan />
      <AboutUs />
      <PaymentMethod />
      <PosSystem />
    </div>
  );
};

export default Home;
