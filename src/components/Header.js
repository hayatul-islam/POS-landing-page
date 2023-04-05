import React from "react";

const Header = () => {
  return (
    <div className="absolute w-full flex justify-between items-center px-6 md:px-12">
      <div className="w-[100px] h-auto">
        <img
          className="w-full h-full"
          src="https://epos.com/wp-content/uploads/2020/04/epos250x250_v1.png"
          alt=""
        />
      </div>
      <div className="flex gap-x-4">
        <button className="py-2 px-8 text-[14px] bg-[#e4f5ef] rounded-full">
          Login
        </button>
        <button className="py-2 px-5 text-[14px] bg-[#5c5fff] hover:bg-opacity-80 rounded-full text-white">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;
