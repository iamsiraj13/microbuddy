import React from "react";
import processimg from "../assets/img/process.png";
const Process = () => {
  return (
    <div>
      <h2 className="text-center uppercase font-bold text-4xl text-main mb-[5rem]">
        out working process
      </h2>
      <div className="text-center pl-4 mt-4">
        <img src={processimg} alt="" className="ml-[3rem] " />
      </div>
    </div>
  );
};

export default Process;
