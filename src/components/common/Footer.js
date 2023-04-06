import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import logo from "../../assets/image/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#226cd0] py-6 px-6 rounded-b-[10px] ">
      <div className="pos-container grid md:grid-cols-3 gap-y-6 py-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <img className="w-[100px] h-auto" src={logo} alt="Logo" />
            <p className="text-white opacity-60 max-w-[300px]">
              A point of sale, or point of purchase, is where you ring up
              customers.
            </p>
          </div>
          <address>
            <p className="flex items-center gap-x-1 text-[16px]">
              <span className="text-white font-medium">Phone:</span>
              <span className="text-white opacity-60">0123456789</span>
            </p>
            <p className="flex items-center gap-x-1 text-[16px]">
              <span className="text-white font-medium">Fax:</span>
              <span className="text-white opacity-60">00002224440</span>
            </p>
            <p className="flex items-center gap-x-1 text-[16px]">
              <span className="text-white font-medium">Email:</span>
              <span className="text-white opacity-60">example@gmail.com</span>
            </p>
          </address>
        </div>
        <div className="space-y-4">
          <h4 className="text-white opacity-80 uppercase text-[20px] font-medium">
            Product
          </h4>
          <div>
            <p className="text-white opacity-60">Point of sale</p>
            <p className="text-white opacity-60">POS Terminal</p>
            <p className="text-white opacity-60">Barcode scanner</p>
            <p className="text-white opacity-60">Receipt Printer</p>
            <p className="text-white opacity-60">Cash register</p>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-white opacity-80 uppercase text-[20px] font-medium">
            Contract with us
          </h4>
          <div className="flex gap-x-2">
            <FaFacebookSquare
              className="cursor-pointer hover:opacity-80"
              color="white"
              size="24"
            />
            <FaTwitterSquare
              className="cursor-pointer hover:opacity-80"
              color="white"
              size="24"
            />
            <FaInstagramSquare
              className="cursor-pointer hover:opacity-80"
              color="white"
              size="24"
            />
          </div>
        </div>
      </div>
      <div className="pos-container text-end pt-2">
        <p className="text-white opacity-50">
          Copyrights &#169; 2023 | Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Footer;
