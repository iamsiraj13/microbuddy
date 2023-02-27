import React from "react";
// Import Swiper React components
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import wow from "../assets/img/wow.png";
import left from "../assets/img/left.png";
import foot from "../assets/img/footimg.png";

export default function Pakage() {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    infinite: true,
    pauseOnHover: true,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const pakages = [1, 2, 3, 4, 5, 6];
  return (
    <section className="px-[100px] mb-[100px] pt-[100px]" id="pricing">
      <div className="">
        <h2 className="text-center text-[70px] font-bold text-[#645AD8]">
          Our Pakages
        </h2>
      </div>

      {/* <div> */}
      <Slider {...settings}>
        {pakages.map((pakage) => (
          <div className="gap-4 flex flex-col items-center">
            <div className="card-head w-full h-[290px] relative  ">
              <h2 className="absolute top-[50%] left-[50%] translate-x-[-50%] -translate-y-1/2 text-white font-semibold text-4xl text-center">
                Silver
              </h2>
              <img src={left} className="leftshdw" alt="" />
              <img src={wow} alt="wow" />
            </div>
            <div className="card  pt-[209px] pb-[50px] bg-[#F26522]">
              <p className="text-[130px] text-center text-white relative">
                10
                <sup className="text-[60px] sup ">,99</sup>
              </p>
              <ul>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ul>
            </div>
            <div className="card-footer  relative ">
              <h4 className="uppercase  absolute left-[50%] top-[50%] text-[50px] text-bold text-white">
                start
              </h4>
              <img src={foot} alt="" />
            </div>
          </div>
        ))}
      </Slider>
      {/* </div> */}
    </section>
  );
}
