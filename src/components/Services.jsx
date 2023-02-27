import React from "react";
import Slider from "react-slick";
import { BsCodeSlash } from "react-icons/bs";
const Services = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: false,
  };
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
      <section className="py-[79px]" id="service">
        <div className="section-title">
          <h2 className="text-center text-5xl font-semibold text-[#645AD8]">
            Our Services
          </h2>
        </div>

        <div className="service-bottom">
          <Slider {...settings}>
            {service.map((serv) => (
              <div className=" bg-second pt-[50px] mt-[30px]">
                <div className="service relative flex items-center justify-start  ">
                  <span className="w-28 h-28 rounded-full absolute shadow-xl left-[60%] top-12 bg-white flex items-center justify-center text-4xl">
                    {serv.icon}
                  </span>
                  <h4 className="ml-8 mt-8">{serv.title}</h4>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Services;
