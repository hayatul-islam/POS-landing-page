import React from "react";

const ServicePlan = () => {
  return (
    <div className="flex justify-center gap-x-12 -mt-16">
      <div className="shadow-lg bg-white border p-6 rounded-lg w-[200px]">
        <span className="text-[12px] uppercase opacity-50">More than</span>
        <h2 className="text-[30px] text-[#2b4057] font-bold">40 POS</h2>
        <p className="text-[14px] uppercase opacity-90 font-medium">
          Already set up
        </p>
      </div>
      <div className="shadow-lg bg-white border p-6 rounded-lg w-[200px]">
        <span className="text-[12px] uppercase opacity-50">Price</span>
        <h2 className="text-[30px] text-[#2b4057] font-bold">$300.00</h2>
        <p className="text-[14px] uppercase opacity-90 font-medium">
          Unlimited plan
        </p>
      </div>
      <div className="shadow-lg bg-white border p-6 rounded-lg w-[200px]">
        <span className="text-[12px] uppercase opacity-50">Set up</span>
        <h2 className="text-[30px] text-[#2b4057] font-bold">in 3 days</h2>
        <p className="text-[14px] uppercase opacity-90 font-medium">
          In your store
        </p>
      </div>
    </div>
  );
};

export default ServicePlan;
