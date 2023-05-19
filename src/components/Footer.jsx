import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div name="home" className="w-full h-[400px] sm:h-[200px]">
      <div className="flex flex-col justify-center h-full">
        <div className="flex flex-col items-center">
          <div className="flex flex-col mt-6 space-y-4 mb-8">
            <ul className="flex space-x-4">
              <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] transition-all duration-200 hover:ml-0 bg-blue-600">
                <a
                  className="flex justify-between items-center w-full text-gray-300"
                  href="https://www.linkedin.com/in/felix-jacobsen-446083232/"
                >
                  Linkedin <FaLinkedin size={30} />
                </a>
              </li>
              <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] transition-all duration-200 hover:ml-0 bg-[#333333]">
                <a
                  className="flex justify-between items-center w-full text-gray-300"
                  href="https://github.com/FelixJacobsen"
                >
                  Github <FaGithub size={30} />
                </a>
              </li>
              <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] transition-all duration-200 hover:ml-0 bg-[#6fc2b0]">
                <a
                  className="flex justify-between items-center w-full text-gray-300"
                  href="/"
                >
                  Email <HiOutlineMail size={30} />
                </a>
              </li>
              <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] transition-all duration-200 hover:ml-0 bg-[#565f69]">
                <a
                  className="flex justify-between items-center w-full text-gray-300"
                  href="/"
                >
                  Resume <BsFillPersonLinesFill size={30} />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl">
              © Created by Felix Jacobsen using React & Tailwind
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
