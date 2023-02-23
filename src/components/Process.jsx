import React from "react";
import gp1 from "../assets/img/choose/gp1.png";
import icon1 from "../assets/img/choose/icon1.png";
const Process = () => {
  return (
    <div className="mx-auto py-[90px] px-[100px]">
      <h2 className="text-center uppercase mb-[330px] font-bold text-4xl text-main  ">
        out working process
      </h2>
      <div className="process-wrapper">
        {/* section one */}
        <div className="flex  justify-around relative">
          {/* block 1 */}
          <div className="wpimg1">
            <img src={gp1} alt="" className="w-full" />
            <div className="wpimg-inner">
              <img src={icon1} alt="" className="w-24" />
              <h3>Analysis</h3>
            </div>
          </div>
          {/* block 2 */}
          <div className="wpimg2">
            <img src={gp1} alt="" className="w-full" />
            <div className="wpimg-inner2 ">
              <img src={icon1} alt="" className="w-24" />
              <h3>Analysis</h3>
            </div>
          </div>
          {/* block 1 */}
          <div className="wpimg3">
            <img src={gp1} alt="" className="w-full" />
            <div className="wpimg-inner">
              <img src={icon1} alt="" className="w-24" />
              <h3>Analysis</h3>
            </div>
          </div>
        </div>
        {/* section two */}
        <div className="flex  justify-around relative">
          {/* block 1 */}

          {/* block 2 */}
          <div className="wpimg4">
            <img src={gp1} alt="" className="w-full" />
            <div className="wpimg-inner ">
              <img src={icon1} alt="" className="w-24" />
              <h3>Analysis</h3>
            </div>
          </div>
          {/* block 1 */}
        </div>
        {/* section two */}
        <div className="flex  justify-start relative">
          {/* block 2 */}
          <div className="wpimg5">
            <img src={gp1} alt="" className="w-full" />
            <div className="wpimg-inner ">
              <img src={icon1} alt="" className="w-24" />
              <h3>Analysis</h3>
            </div>
          </div>
        </div>
        <div className="flex  justify-center relative">
          {/* block 2 */}
          <div className="wpimg6">
            <img src={gp1} alt="" className="w-full" />
            <div className="wpimg-inner ">
              <img src={icon1} alt="" className="w-24" />
              <h3>Analysis</h3>
            </div>
          </div>
        </div>
        <div className="flex  justify-end relative">
          {/* block 2 */}
          <div className="wpimg7">
            <img src={gp1} alt="" className="w-full" />
            <div className="wpimg-inner ">
              <img src={icon1} alt="" className="w-24" />
              <h3>Analysis</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
