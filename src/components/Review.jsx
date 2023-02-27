import React from "react";
import sine from "../assets/img/sine.png";
import client from "../assets/img/client.png";
import { AiTwotoneStar } from "react-icons/ai";
import quote from "../assets/img/quote.png";
import quote2 from "../assets/img/quote2.png";
const Review = () => {
  return (
    <div className="my[100px] mb-[100px]">
      <div className="section-title px-[250px] flex flex-col items-end">
        <h2 className="uppercase  font-semibold " style={{ fontSize: "140px" }}>
          our client
        </h2>
        <img src={sine} alt="" className="w-[250px] -mt-[30px] " />
      </div>
      <div className="review ">
        <div className="relative px-[150px]">
          <img
            src={client}
            alt=""
            className="absolute -bottom-[50px] w-[470px] left-[350px]"
          />
          <div className="bg-[#404049] min-h-[400px] mx-[100px] px-[100px] rounded-2xl flex items-center justify-end">
            <div className="text-right max-w-sm space-y-2">
              <h3 className="text-white font-semibold text-4xl">John Doe</h3>
              <p className="text-white">Shop Name</p>
              <ul className="flex flex-row justify-end">
                <li className="text-[#FC911E]">
                  <AiTwotoneStar />
                </li>
                <li className="text-[#FC911E]">
                  <AiTwotoneStar />
                </li>
                <li className="text-[#FC911E]">
                  <AiTwotoneStar />
                </li>
                <li className="text-[#FC911E]">
                  <AiTwotoneStar />
                </li>
                <li className="text-[#FC911E]">
                  <AiTwotoneStar />
                </li>
              </ul>
              <p className="text-center text-white relative ">
                <span>
                  <img src={quote2} alt="" className="w-5" />
                </span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium maiores aliquid provident optio ullam non.
                Praesentium maiores aliquid provident optio ullam non.
                <span>
                  <img src={quote} alt="" className="w-5 absolute right-0" />
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-24 bg-[#FC911E] -z-10  rebg"></div>
      </div>
    </div>
  );
};

export default Review;
