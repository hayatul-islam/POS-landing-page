import React from "react";
import { AiFillCheckCircle, AiOutlineArrowRight } from "react-icons/ai";
import paymentMethod from "../../assets/image/paymentMethod.png";

const PaymentMethod = () => {
  return (
    <div className="bg-[#f8fafc] px-6 md:px-8 py-12 md:py-16">
      <div className="md:flex pos-container items-center justify-around md:gap-x-6 space-y-12">
        <div className="space-y-4 md:max-w-md">
          <h2 className="max-w-sm text-[24px] md:text-[28px] lg:text-[35px] font-medium leading-1 text-[#12141D]">
            Payment is the easiest with many options
          </h2>
          <p className="text-[20px] text-[#595B61]">
            Credit cards are easily the most secure and safe payment method to
            use when you shop online.
          </p>
          <div className="text-[#595B61]">
            <p className="flex gap-x-2 items-center">
              <span>
                <AiFillCheckCircle />
              </span>
              <span>Accept any method of payment</span>
            </p>
            <p className="flex gap-x-2 items-center">
              <span>
                <AiFillCheckCircle />
              </span>
              <span>Apply discounts and issue refunds</span>
            </p>
          </div>
          <button className="flex items-center gap-x-1 text-[16px] font-medium hover:border-b border-black">
            Make your first sale
            <span>
              <AiOutlineArrowRight />
            </span>
          </button>
        </div>
        <div className="flex justify-center">
          <img src={paymentMethod} alt="Payment method system" />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
