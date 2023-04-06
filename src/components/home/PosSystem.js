import React from "react";
import { AiFillCheckCircle, AiOutlineArrowRight } from "react-icons/ai";
import posSystem from "../../assets/image/pos-system.png";

const PosSystem = () => {
  return (
    <div className="px-6 md:px-8 md:py-12 md:py-16">
      <div className="grid md:flex pos-container items-center justify-around md:gap-x-6 space-y-12">
        <div className="flex justify-center order-last md:order-first">
          <img src={posSystem} alt="Payment method system" />
        </div>
        <div className="space-y-4 md:max-w-md pb-12  md:pb-0">
          <h2 className="max-w-sm text-[24px] md:text-[28px] lg:text-[35px] font-medium leading-1 text-[#12141D]">
            Keep the power of POS in your pocket
          </h2>
          <p className="text-[20px] text-[#595B61]">
            We’ve seen many reasons why having a POS can provide a better user
            experience.
          </p>
          <div className="text-[#595B61]">
            <p className="flex gap-x-2 items-center">
              <span>
                <AiFillCheckCircle />
              </span>
              <span>Run loyalty program to reward customers</span>
            </p>
            <p className="flex gap-x-2 items-center">
              <span>
                <AiFillCheckCircle />
              </span>
              <span>Keep notes on valuable customer preferences</span>
            </p>
          </div>
          <button className="flex items-center gap-x-1 text-[16px] font-medium hover:border-b border-black">
            Make your first sale
            <span>
              <AiOutlineArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PosSystem;
