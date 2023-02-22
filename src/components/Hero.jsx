import React from "react";

import world from "../assets/img/world.png";
const Hero = () => {
  return (
    <div className="flex items-center max-w-7xl mx-auto">
      <div className="left w-3/5">
        <h2 className="text-main text-3xl font-bold leading-[0.5px]">
          Connect to The <br />
          <span className="text-9xl">World</span>
        </h2>
      </div>
      <div className="right w-2/5">
        <img src={world} alt="" />
      </div>
    </div>
  );
};

export default Hero;
