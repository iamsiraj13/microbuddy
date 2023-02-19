import React from "react";
import one from "../assets/img/1.png";

const Feature = () => {
  return (
    <div className="py-[160px] px-[3%]">
      <div className="mb-8">
        <h2 className="text-4xl text-center text-[#645AD8]">
          Why you need to own website
        </h2>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex items-center">
          <ul className="flex flex-col space-y-3">
            <li>
              <button className="font-bold text-indigo-400">For Sell</button>{" "}
            </li>
            <li>
              <button className="font-bold">Online Bussiness</button>{" "}
            </li>
            <li>
              <button className="font-bold">For Branding</button>{" "}
            </li>
            <li>
              <button className="font-bold">Movie Server</button>{" "}
            </li>
            <li>
              <button className="font-bold">Company Profile</button>{" "}
            </li>
            <li>
              <button className="font-bold">Personal Portfolio</button>{" "}
            </li>
          </ul>
        </div>
        <div className="p-8">
          <img src={one} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Feature;
