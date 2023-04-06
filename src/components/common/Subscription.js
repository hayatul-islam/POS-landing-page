import React from "react";

const Subscription = () => {
  return (
    <div className="bg-[#2d7de9] px-6">
      <div className="text-center py-8 md:py-12 text-white space-y-10 max-w-2xl mx-auto">
        <div className="space-y-2">
          <h2 className="text-[24px] md:text-[28px]">
            Square POS is a great businesses
          </h2>
          <p className="text-[16px] md:text-[18px]">
            A business uses a POS system to process card payments or other forms
            of electronic payments at a physical location
          </p>
        </div>
        <button className="py-2 w-[200px] text-[14px] border border-white rounded-full text-white">
          Subscription
        </button>
      </div>
    </div>
  );
};

export default Subscription;
