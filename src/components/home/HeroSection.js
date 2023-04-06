import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import posHero from "../../assets/image/pos-hero.png";

const HeroSection = () => {
  return (
    <div
      className="py-12"
      style={{ background: "linear-gradient(#85d8b9, #ddf5cf)" }}
    >
      <div className="pos-container grid md:flex justify-around items-center px-6 md:px-8 lg:px-12 py-16 gap-y-10">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-[24px] md:text-[40px] uppercase leading-10 font-bold">
              Made life <span className="block">easy by POS</span>
            </h2>
            <p className="text-[20px] md:text-[22px] opacity-90 max-w-sm">
              The point of sale or point of purchase is the time and place at
              which a retail transaction is completed.
            </p>
          </div>
          <div className="text-[#595B61]">
            <p className="flex gap-x-2 items-center">
              <span>
                <AiFillCheckCircle />
              </span>
              <span>Easy Installation at counter</span>
            </p>
            <p className="flex gap-x-2 items-center">
              <span>
                <AiFillCheckCircle />
              </span>
              <span>Monthly Automatic billing</span>
            </p>
          </div>
          <p className="uppercase font-medium opacity-80">
            Sale, setup, Support
          </p>
          <button className="py-3 px-12 text-[12px] bg-[#5c5fff] hover:bg-opacity-80 rounded-full text-white uppercase">
            Get Started
          </button>
        </div>
        <div className="h-auto ">
          <img
            className="w-[80%] mx-auto md:w-full h-full"
            src={posHero}
            alt="Banner"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
