import React, { useEffect, useState } from "react";
import one from "../assets/img/slider/one.png";
import two from "../assets/img/slider/two.png";
import three from "../assets/img/slider/three.png";
import four from "../assets/img/slider/four.png";
import five from "../assets/img/slider/five.png";
import six from "../assets/img/slider/six.png";

const Feature = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderData = [
    {
      title: "For Sell",
      image: one,
    },
    {
      title: "Online Business",
      image: two,
    },
    {
      title: "For Branding",
      image: three,
    },
    {
      title: "Movie Server",
      image: four,
    },
    {
      title: "Company Profile",
      image: five,
    },
    {
      title: "Personal Portfolio",
      image: six,
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((activeIndex + 1) % sliderData.length);
    }, 1000000);
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
          <div className="flex items-center flex-row justify-center mt-[-219px]">
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

            <div className="w-[500px] mt-[-25px]">
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
