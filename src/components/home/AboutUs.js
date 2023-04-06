import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import dataAnalisys from "../../assets/image/data-analysis.png";

const AboutUs = () => {
  return (
    <div className=" px-6 md:px-8 py-12 md:py-16">
      <div className="md:flex pos-container items-center justify-around md:gap-x-6 space-y-12">
        <div className="flex justify-center">
          <img src={dataAnalisys} alt="About of POS" />
        </div>
        <div className="space-y-4 md:max-w-md">
          <p className="text-[#2d2dc5] font-bold">About Us</p>
          <h2 className=" text-[24px] md:text-[28px] lg:text-[35px] font-medium leading-1 text-[#12141D]">
            Best Solution For Your Online Point of Sale
          </h2>
          <p className="text-[20px] text-[#595B61]">
            The point of sale or point of purchase is the time and place at
            which a retail transaction is completed. At the point of sale, the
            merchant calculates the amount owed by the customer, indicates that
            amount, may prepare an invoice for the customer.
          </p>
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

export default AboutUs;
