import React from "react";
const Services = () => {
  return (
    <>
      {/* our services  */}
      <div className=" bg-second py-[80px] mt-[30px] grid grid-cols-4 max-w-7xl mx-auto">
        <div className="service relative flex items-center justify-start ">
          <span className="w-24 h-24 rounded-full absolute shadow right-0 top-10 bg-white"></span>
          <h4 className="ml-8 mt-8">Web Developement</h4>
        </div>
        <div className="service relative flex items-center justify-start ">
          <span className="w-24 h-24 shadow rounded-full absolute right-0 top-10 bg-white"></span>
          <h4 className="ml-8 mt-8">Web Developement</h4>
        </div>
        <div className="service relative flex items-center justify-start ">
          <span className="w-24 h-24 rounded-full absolute shadow right-0 top-10 bg-white"></span>
          <h4 className="ml-8 mt-8">Web Developement</h4>
        </div>
        <div className="service relative flex items-center justify-start ">
          <span className="w-24 h-24 rounded-full absolute shadow right-0 top-10 bg-white"></span>
          <h4 className="ml-8 mt-8">Web Developement</h4>
        </div>
      </div>
      <div className="service-bottom"></div>
    </>
  );
};

export default Services;
