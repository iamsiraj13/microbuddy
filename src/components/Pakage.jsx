import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import wow from "../assets/img/wow.png";
import left from "../assets/img/left.png";
import foot from "../assets/img/footimg.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper";

export default function Pakage() {
  return (
    <section className="py-[80px] mb-[100px] max-w-7xl mx-auto">
      <div className="mb-[50px]">
        <h2 className="text-center text-4xl font-bold text-main">
          Our Pakages
        </h2>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-[#B9DD26]  pakage relative  ">
            <div className="pakage-head ">
              <div className="relative">
                <img src={wow} alt="" className="img1" />

                <img src={left} alt="" className="absolute -left-3 img2 " />
                <h4 className="text-center p-text text-white font-semibold text-4xl">
                  Silver
                </h4>
              </div>
            </div>
            <div className="mb-[54px]">
              <h3 className="text-white text-center text-8xl mt-8 mb-[50px] font-semibold">
                15'<sup>99</sup>
              </h3>
              <ul>
                <li className="text-center text-white text-lg font-semibold  border-b border-white py-4">
                  Lorem Ipsum
                </li>
                <li className="text-center text-white text-lg font-semibold  border-b border-white py-4">
                  Lorem
                </li>
                <li className="text-center text-white text-lg font-semibold  border-b border-white py-4">
                  Lorem
                </li>
                <li className="text-center text-white text-lg font-semibold  border-b border-white py-4">
                  Lorem
                </li>
                <li className="text-center text-white text-lg font-semibold   border-b border-white py-4">  </li>
              </ul>
            </div>
            <div className="realtive">
              <h4 className="text-center f-text text-white font-semibold text-3xl">
                Start
              </h4>
            </div>
            <img src={foot} alt="" className="img-foot " />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
