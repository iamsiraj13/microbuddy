import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="h-[134px] bg-white flex  flex-row  px-[100px]   items-center shadow-lg">
      <div className="left w-[100px]">
        <h2 className="text-2xl font-bold">LOGO</h2>
      </div>
      <div className="right flex-1 flex items-center justify-end space-x-4">
        <div>
          <span className="font-bold">
            <BiSearchAlt2 size={40} />
          </span>
        </div>
        <ul className="flex space-x-[45px]">
          <li>
            <a href="#" className="text-[24px] text-[#707070]">
              Home
            </a>
          </li>
          <li>
            {" "}
            <a href="#" className="text-[24px] text-[#707070]">
              Service
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#" className="text-[24px] text-[#707070]">
              Pricing
            </a>{" "}
          </li>
          <li>
            <a href="#" className="text-[24px] text-[#707070]">
              About Us
            </a>{" "}
          </li>
          <li>
            <a href="#" className="text-[24px] text-[#707070]">
              Contact
            </a>{" "}
          </li>
          <li>
            <a href="#" className="text-[24px] text-[#707070]">
              Ecommerce
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
