import React from "react";
import blog1 from "../assets/img/blog1.png";
import blog2 from "../assets/img/blog2.png";
import blog3 from "../assets/img/blog3.png";
const Blog = () => {
  return (
    <div className="blog pl-[100px] mx-auto">
      <div className="grid grid-cols-3 gap-[110px]">
        <div>
          <div className="w-full">
            <img src={blog1} alt="" className="blog-img" />
          </div>
          <div className="blog-content  w-full">
            <div className="content flex flex-row space-x-5 p-6 rounded-xl -mt-8 ">
              <div className="avater w-[2.75rem] h-7 bg-pink-500 rounded-full"></div>
              <div>
                <h4 className="text-sm"> Author Name</h4>
                <h2 className="text-lg ">Blog title</h2>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  omnis molestias distinctio repellendus numquam ipsum?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full">
            <img src={blog2} alt="" className="blog-img" />
          </div>
          <div className="blog-content  w-full">
            <div className="content flex flex-row space-x-5 p-6 rounded-xl -mt-8 ">
              <div className="avater w-[2.75rem] h-7 bg-pink-500 rounded-full"></div>
              <div>
                <h4 className="text-sm"> Author Name</h4>
                <h2 className="text-lg ">Blog title</h2>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  omnis molestias distinctio repellendus numquam ipsum?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full">
            <img src={blog3} alt="" className="blog-img" />
          </div>
          <div className="blog-content  w-full">
            <div className="content flex flex-row space-x-5 p-6 rounded-xl -mt-8 ">
              <div className="avater w-[2.75rem] h-7 bg-pink-500 rounded-full"></div>
              <div>
                <h4 className="text-sm"> Author Name</h4>
                <h2 className="text-lg ">Blog title</h2>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  omnis molestias distinctio repellendus numquam ipsum?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
