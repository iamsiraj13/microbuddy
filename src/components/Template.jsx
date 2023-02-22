import React from "react";
import templateimg from "../assets/img/template.png";
const Template = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-3 gap-5">
        <div className="p-4">
          <h5 className="text-main font-semibold mb-[50px]">Ecommerce</h5>
          <img src={templateimg} alt="" />
        </div>
        <div className="p-4">
          <h5 className="text-main font-semibold mb-[50px]">Blog</h5>
          <img src={templateimg} alt="" />
        </div>
        <div className="p-4">
          <h5 className="text-main font-semibold mb-[50px]">Agency</h5>
          <img src={templateimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Template;
