import React from "react";
import sine from "../assets/img/sine.png";
const Review = () => {
  return (
    <div>
      <div className="section-title px-[100px] flex flex-col items-end">
        <h2 className="uppercase text-[140px] ">our client</h2>
        <img src={sine} alt="" className="w-402 " />
      </div>
    </div>
  );
};

export default Review;
