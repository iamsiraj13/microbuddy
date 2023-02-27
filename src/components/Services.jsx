import React from "react";
import { BsCodeSlash } from "react-icons/bs";
const Services = () => {
  const service = [
    {
      title: "Web Development",
      icon: <BsCodeSlash />,
    },
    {
      title: "Web Design",
      icon: <BsCodeSlash />,
    },
    {
      title: "Ecommerce",
      icon: <BsCodeSlash />,
    },
    {
      title: "Content Writing",
      icon: <BsCodeSlash />,
    },
    {
      title: "Content Writing",
      icon: <BsCodeSlash />,
    },
    {
      title: "Content Writing",
      icon: <BsCodeSlash />,
    },
  ];

  return (
    <>
      {/* our services  */}
      <div className="section-title">
        <h2 className="text-center text-5xl font-semibold mt-4 text-[#645AD8]">
          Our Services
        </h2>
      </div>
      <div className=" bg-second py-[80px] mt-[30px] grid grid-cols-4 grid-rows-2 md:gird-cols-5 xl:grid-cols-6 sm:grid-cols-3     ">
        {service.map((serv) => (
          <div className="service relative flex items-center justify-start  ">
            <span className="w-28 h-28 rounded-full absolute shadow left-[60%] top-12 bg-white flex items-center justify-center text-4xl">
              {serv.icon}
            </span>
            <h4 className="ml-8 mt-8">{serv.title}</h4>
          </div>
        ))}
      </div>
      <div className="service-bottom"></div>
    </>
  );
};

export default Services;
