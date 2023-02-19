import React from "react";

import heroImg from "../assets/img/hero-img.png";
const Hero = () => {
  return (
    <div className="flex items-center">
      <div className="left w-3/5">
        <h2 className="text-main text-3xl font-bold leading-[0.5px]">
          Connect to The <br />
          <span className="text-9xl">World</span>
        </h2>
      </div>
      <div className="right w-2/5">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
