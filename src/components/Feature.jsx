import React, { useEffect, useState } from "react";
import one from "../assets/img/1.png";

const Feature = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderData = [
    {
      title: "For Sell",
      image: one,
    },
    {
      title: "Online Business",
      image: one,
    },
    {
      title: "For Branding",
      image: one,
    },
    {
      title: "Movie Server",
      image: one,
    },
    {
      title: "Company Profile",
      image: one,
    },
    {
      title: "Personal Portfolio",
      image: one,
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((activeIndex + 1) % sliderData.length);
    }, 1500);
    return () => clearInterval(intervalId);
  }, [activeIndex, sliderData.length]);

  const handleMenuClick = (index) => {
    setActiveIndex(index);
  };
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
                {sliderData.map((item, index) => (
                  <li
                    key={index}
                    className={
                      activeIndex === index ? "menu-item active" : "menu-item"
                    }
                    onClick={() => handleMenuClick(index)}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-[500px] p-8 flex flex-shrink-0">
              {/* <img src={one} alt="" className="ml-[288px] mt-[16px]" /> */}
              <img
                src={sliderData[activeIndex].image}
                alt={sliderData[activeIndex].title}
                className="ml-[288px] mt-[16px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
