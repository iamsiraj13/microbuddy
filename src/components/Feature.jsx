import React from "react";
import one from "../assets/img/1.png";

const Feature = () => {
  return (
    <>
      <div className="feature-area py-20">
        <div className="max-w-7xl mx-auto">
          {/* section title */}
          <div className="section-title">
            <h2 className="text-7xl text-white w-3/6 ">
              Why you need you own website
            </h2>
          </div>
          <div className="flex items-center flex-row justify-center space-x-8">
            <div className="">
              <ul className="text-right flex flex-col justify-end space-y-3 font-semibold text-white">
                <li>For Sell</li>
                <li>Online Business</li>
                <li>For Branding</li>
                <li>Movie server</li>
                <li>Company Profile</li>
                <li>Personal Portfolio</li>
              </ul>
            </div>
            <div className="w-[500px] p-8 flex flex-shrink-0">
              <img src={one} alt="" className="ml-[288px] mt-[16px]" />
            </div>
          </div>
        </div>
      </div>
    </>
    // <div className="feature-area">
    //   <div className="max-w-7xl mx-auto">
    //     <div className="mb-8">
    //       <h2 className="text-8xl mt-12 text-white">
    //         Why you need to own website
    //       </h2>
    //     </div>
    //     <div className="grid grid-cols-2">
    //       <div className="flex items-center  ">
    //         <ul className="flex flex-col space-y-3">
    //           <li>
    //             <button className="font-bold text-indigo-400">For Sell</button>{" "}
    //           </li>
    //           <li>
    //             <button className="font-bold">Online Bussiness</button>{" "}
    //           </li>
    //           <li>
    //             <button className="font-bold">For Branding</button>{" "}
    //           </li>
    //           <li>
    //             <button className="font-bold">Movie Server</button>{" "}
    //           </li>
    //           <li>
    //             <button className="font-bold">Company Profile</button>{" "}
    //           </li>
    //           <li>
    //             <button className="font-bold">Personal Portfolio</button>{" "}
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="p-[6rem] ">
    //         <img src={one} alt="" className="ml-[35px] mt-[56px]" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Feature;
