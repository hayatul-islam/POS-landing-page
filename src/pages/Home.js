import React from "react";
import AboutUs from "../components/home/AboutUs";
import HeroSection from "../components/home/HeroSection";
import PaymentMethod from "../components/home/PaymentMethod";
import PosSystem from "../components/home/PosSystem";
import PosVideo from "../components/home/PosVideo";
import Service from "../components/home/Service";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Service />
      {/* <ServicePlan /> */}
      <AboutUs />
      <PaymentMethod />
      <PosSystem />
      <PosVideo />
    </div>
  );
};

export default Home;
