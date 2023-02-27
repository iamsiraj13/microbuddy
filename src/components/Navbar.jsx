import React, { useEffect } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-scroll";

const Navbar = () => {
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 100
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  return (
    <header className="header-section z-[99999[px] h-[134px] bg-white flex  flex-row  px-[100px]   items-center shadow-lg">
      <div className="left w-[100px]">
        <h2 className="text-2xl font-bold">LOGO</h2>
      </div>
      <div className="right flex-1 flex items-center justify-end space-x-4">
        <div>
          <span className="font-bold">
            <BiSearchAlt2 size={40} />
          </span>
        </div>
        <ul className="flex space-x-[45px]  ">
          <li>
            <Link
              className="text-[24px] text-[#707070] cursor-pointer"
              activeClass="active"
              to="/"
              spy={true}
              smooth={true}
              offset={-50}
              duration={1000}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-[24px] text-[#707070] cursor-pointer"
              activeClass="active"
              to="service"
              spy={true}
              smooth={true}
              offset={-190}
              duration={1000}
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              className="text-[24px] text-[#707070] cursor-pointer"
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              offset={-90}
              duration={1000}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              className="text-[24px] text-[#707070] cursor-pointer"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-180}
              duration={1000}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="text-[24px] text-[#707070] cursor-pointer"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-180}
              duration={1000}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="text-[24px] text-[#707070] cursor-pointer"
              activeClass="active"
              to="ecommerce"
              spy={true}
              smooth={true}
              offset={-180}
              duration={1000}
            >
              Ecommerce
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
