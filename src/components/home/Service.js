import React from "react";
import { BsFillSendFill, BsGlobe } from "react-icons/bs";
import { IoIosPhotos } from "react-icons/io";

const Service = () => {
  return (
    <div className="-mt-16 mx-6">
      <div className="bg-[#f8fafc] shadow-lg px-6 grid gap-y-6 md:grid-cols-3 gap-x-12 py-12 pos-container rounded-md">
        <div className="flex items-center gap-x-4">
          <BsFillSendFill size="30" />
          <p className="md:text-[12px] lg:text-[16px] text-[#18181B] max-w-[250px]">
            Developed with the highest care. Always updated
          </p>
        </div>
        <div className="flex items-center gap-x-4">
          <BsGlobe size="30" />
          <p className="md:text-[12px] lg:text-[16px] text-[#18181B] max-w-[250px]">
            Get free goodies from all over the world after purchase
          </p>
        </div>
        <div className="flex items-center gap-x-4">
          <IoIosPhotos size="30" />
          <p className="md:text-[12px] lg:text-[16px] text-[#18181B] max-w-[250px]">
            Save up to 10% of every purchase you made
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
