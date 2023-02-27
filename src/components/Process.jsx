import React from "react";
import Zoom from "react-reveal/Zoom";
// import one from "../assets/img/choose/one.png";
import two from "../assets/img/choose/two.png";
// import three from "../assets/img/choose/three.png";
import four from "../assets/img/choose/four.png";
import five from "../assets/img/choose/five.png";
import six from "../assets/img/choose/six.png";
import seven from "../assets/img/choose/seven.png";
import icon1 from "../assets/img/choose/icon1.png";
const Process = () => {
  return (
    <div className="mx-auto py-[90px] px-[100px]">
      <h2 className="text-center uppercase mb-[330px] font-bold text-4xl text-main  ">
        out working process
      </h2>
      <div className="process-wrapper">
        {/* section one */}
        <div className="flex  justify-around relative">
          {/* block 1 */}
          <Zoom duration={3000} delay={100}>
            <div className="wpimg1">
              <img src={two} alt="" className="w-full" />
              <div className="wpimg-inner">
                <img src={icon1} alt="" className="w-24" />
                <h3>Analysis</h3>
              </div>
            </div>
          </Zoom>
          {/* block 2 */}
          <Zoom duration={3000} delay={300}>
            <div className="wpimg2">
              <img src={two} alt="" className="w-full" />
              <div className="wpimg-inner ">
                <img src={icon1} alt="" className="w-24" />
                <h3>Analysis</h3>
              </div>
            </div>
          </Zoom>
          {/* block 1 */}
          <Zoom duration={3000} delay={400}>
            <div className="wpimg3">
              <img src={two} alt="" className="w-full" />
              <div className="wpimg-inner">
                <img src={icon1} alt="" className="w-24" />
                <h3>Analysis</h3>
              </div>
            </div>
          </Zoom>
        </div>
        {/* section two */}
        <div className="flex  justify-around relative">
          {/* block 1 */}

          {/* block 2 */}
          <Zoom duration={3000} delay={500}>
            <div className="wpimg4">
              <img src={four} alt="" className="w-full" />
              <div className="wpimg-inner">
                <img src={icon1} alt="" className="w-24" />
                <h3>Analysis</h3>
              </div>
            </div>
          </Zoom>
          {/* block 1 */}
        </div>
        {/* section two */}
        <div className="flex  justify-start relative">
          {/* block 2 */}
          <Zoom duration={3000} delay={600}>
            <div className="wpimg5">
              <img src={five} alt="" className="w-full" />
              <div className="wpimg-inner">
                <img src={icon1} alt="" className="w-24" />
                <h3>Analysis</h3>
              </div>
            </div>
          </Zoom>
        </div>
        <div className="flex  justify-center relative">
          {/* block 2 */}
          <Zoom duration={3000} delay={700}>
            <div className="wpimg6">
              <img src={six} alt="" className="w-full" />
              <div className="wpimg-inner ">
                <img src={icon1} alt="" className="w-24" />
                <h3>Analysis</h3>
              </div>
            </div>
          </Zoom>
        </div>
        <div className="flex  justify-end relative">
          {/* block 2 */}
          <Zoom duration={3000} delay={600}>
            <div className="wpimg7">
              <img src={seven} alt="" className="w-full" />
              <div className="wpimg-inner ">
                <img src={icon1} alt="" className="w-24" />
                <h3>Analysis</h3>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Process;
