import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="h-[100px] bg-white flex  flex-row    items-center">
      <div className="left w-[100px]">
        <h2 className="text-2xl font-bold">LOGO</h2>
      </div>
      <div className="right flex-1 flex items-center justify-end space-x-4">
        <div>
          <span className="font-bold">
            <BiSearchAlt2 />
          </span>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            {" "}
            <a href="#">Service</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Pricing</a>{" "}
          </li>
          <li>
            <a href="#">About Us</a>{" "}
          </li>
          <li>
            <a href="#">Contact</a>{" "}
          </li>
          <li>
            <a href="#">Ecommerce</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
