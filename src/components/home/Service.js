import React from "react";
import { BsFillSendFill, BsGlobe } from "react-icons/bs";
import { IoIosPhotos } from "react-icons/io";

const Service = () => {
  return (
    <div className="-mt-12 mx-6">
      <div className="bg-[#f8fafc] shadow-lg px-6 grid gap-y-6 md:grid-cols-3 gap-x-12 py-12 pos-container">
        <div className="flex items-center gap-x-4">
          <div className="w-[50px] h-[50px] flex justify-center items-center rounded-[50%] bg-black">
            <BsFillSendFill size="20" color="white" />
          </div>
          <p className="text-[#18181B] max-w-[250px]">
            Developed with the highest care. Always updated
          </p>
        </div>
        <div className="flex items-center gap-x-4">
          <div className="w-[50px] h-[50px] flex justify-center items-center rounded-[50%] bg-black">
            <BsGlobe size="20" color="white" />
          </div>
          <p className="text-[#18181B] max-w-[250px]">
            Get free goodies from all over the world after purchase
          </p>
        </div>
        <div className="flex items-center gap-x-4">
          <div className="w-[50px] h-[50px] flex justify-center items-center rounded-[50%] bg-black">
            <IoIosPhotos size="20" color="white" />
          </div>
          <p className="text-[#18181B] max-w-[250px]">
            Save up to 10% of every purchase you made
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
