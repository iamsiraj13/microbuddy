import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderimg from "../assets/img/slider.png";

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 1700,
      fade: true,
      arrows: false,
    };
    return (
      <div className="choose-area relative">
        <h2 className="text-[70px] absolute left-10 font-semibold">
          Why you choose us
        </h2>
        <div className="relative z-10">
          <div
            className=" w-[50%] absolute top-0 right-0 slidertwo"
            style={{ zIndex: -10 }}
          >
            <Slider
              asNavFor={this.state.nav1}
              ref={(slider) => (this.slider2 = slider)}
              slidesToShow={3}
              swipeToSlide={true}
              focusOnSelect={true}
              className="gap-8"
              {...settings}
            >
              <div className="sliderimg">
                <img src={sliderimg} alt="" />
              </div>
              <div className="sliderimg">
                <img src={sliderimg} alt="" />
              </div>
              <div className="sliderimg">
                <img src={sliderimg} alt="" />
              </div>
            </Slider>
          </div>

          <div className="slideone px-[100px] z-20 ">
            <Slider
              asNavFor={this.state.nav2}
              ref={(slider) => (this.slider1 = slider)}
              {...settings}
              className="z-10 relative"
            >
              <div className="slidefirst">
                <h3 className="text-7xl text-[#FFC955] font-bold  ">
                  Expert{" "}
                  <span className="block text-[#645AD8]  font-normal text-[150px]">
                    Team
                  </span>
                </h3>
              </div>
              <div className="slidefirst">
                <h3 className="text-7xl text-[#FFC955] font-bold  ">
                  Speacialist
                </h3>
              </div>
              <div className="slidefirst">
                <h3 className="text-7xl text-[#FFC955] font-bold  ">
                  Developer{" "}
                  <span className="block text-[#645AD8] font-semibold text-[150px]">
                    Team
                  </span>
                </h3>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
