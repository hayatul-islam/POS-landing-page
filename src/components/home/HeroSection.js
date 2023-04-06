import React from "react";
import posHero from "../../assets/image/pos-hero.png";

const HeroSection = () => {
  return (
    <div
      style={{ background: "linear-gradient(#85d8b9, #ddf5cf)" }}
      className="flex justify-around items-center px-6 md:px-8 lg:px-12 py-16 h-[100vh]"
    >
      <div className="space-y-6">
        <div>
          <h2 className="text-[24px] md:text-[40px] uppercase font-bold">
            POS System
          </h2>
          <p className="text-[20px] md:text-[30px] opacity-90">
            Made life easy by POS
          </p>
        </div>
        <p className="uppercase font-medium opacity-80">Sale, setup, Support</p>
        <button className="py-3 px-12 text-[12px] bg-[#5c5fff] hover:bg-opacity-80 rounded-full text-white uppercase">
          Learn more
        </button>
      </div>
      <div className="h-auto ">
        <img className="w-full h-full" src={posHero} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
