import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
const Footer = () => {
  return (
    <div className="footer">
      <div className="max-w-7xl  mx-auto f-content">
        <div className="flex flex-row space-x-8  ">
          {/* logo and description  */}
          <div className="w-1/4 z-10">
            <h3 className="uppercase text-4xl mb-7">logo</h3>
            <p className="text-white text-sm mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              delectus cumque ipsam, possimus culpa dolores.
            </p>
            <div className="socila icon">
              <ul className="flex flex-row space-x-4">
                <li>
                  <a href="/">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* footer menus */}
          <div className="w-1/4 z-10">
            <h3 className="text-xl mb-4">Links</h3>
            <ul className="flex flex-col space-y-3 ">
              <li>
                <a href="/" className="text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="/" className="text-sm">
                  Meet Our Team
                </a>
              </li>
              <li>
                <a href="/" className="text-sm">
                  News and Media
                </a>
              </li>
              <li>
                <a href="/" className="text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="/" className="text-sm">
                  Contacts
                </a>
              </li>
            </ul>
          </div>

          {/* newsletter */}
          <div className="w-1/4 z-10">
            <div>
              {" "}
              <h3 className="text-xl mb-8">Newsletter</h3>
              <p className="text-sm w-100">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Explicabo, cum!
              </p>
              <div className="mt-4 flex items-center rounded-lg ">
                <input
                  type="text"
                  placeholder="Email"
                  className="p-2 h-[40px]"
                />
                <span className="bg-[#3590F6] px-3 py-2 h-[40px]">
                  <FiSend />
                </span>
              </div>
            </div>
          </div>

          <div className="w-1/4 z-10">
            <h3 className="text-xl mb-4">contact</h3>
            <div>
              <p className="mb-2">+88 2043 0982</p>
              <p className="mb-2">User@gmail.com</p>
              <p className="mb-2">
                Block F, Banasree, <br /> Rampura, Dhaka.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
