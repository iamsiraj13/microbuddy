import React from "react";

import world from "../assets/img/world.png";
const Hero = () => {
  return (
    <div className="flex items-center  px-[100px]" id="/">
      <div className="left w-3/5">
        <h2 className="banner-text text-[80px] text-[#707070] font-bold">
          Connect to The <br />
          <span className="text-[315px]">World</span>
        </h2>
      </div>
      <div className="right w-4/5">
        <img src={world} alt="" />
      </div>
    </div>
  );
};

export default Hero;
