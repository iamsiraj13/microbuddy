import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import one from "../assets/img/choose/1.png";
import two from "../assets/img/choose/2.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay } from "swiper";

export default function App() {
  return (
    <section className="py-[80px]">
      <div className="mt-8">
        <h2 className="capitalize text-4xl font-bold text-center text-main">
          Why you choose us
        </h2>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="p-8">
            <img src={one} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-8">
            <img src={two} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-8">
            <img src={one} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-8">
            <img src={two} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
