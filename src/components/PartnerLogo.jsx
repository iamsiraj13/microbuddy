import React from "react";
import apple from "../assets/img/apple.png";
const PartnerLogo = () => {
  return (
    <div className="px-[100px]">
      <div className="flex justify-between items-center">
        <h2 className="text-[#645AD8] text-5xl font-semibold">Our client</h2>
        <div className="flex flex-row space-x-3">
          <img src={apple} alt="" />
          <img src={apple} alt="" />
          <img src={apple} alt="" />
          <img src={apple} alt="" />
          <img src={apple} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PartnerLogo;
