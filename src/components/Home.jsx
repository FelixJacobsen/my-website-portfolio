import React from "react";
import PictureOfMe from "../assets/PictureOfMe.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="flex flex-col sm:flex-row items-center">
          <div>
            <p className="text-red-600 ">Hi, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
              Felix Jacobsen
            </h1>
            <h2 className="text-[#8892b0] py-4 max-w-[700px] text-4xl sm:text-7xl ">
              I'm a Full Stack Developer
            </h2>
            <h2 className="text-[#8892b0] py-4 max-w-[700px]">
              I am a full-stack developer, specializing in backend development
              with a focus on Java.
            </h2>
            <Link to="projects" smooth={true} offset={true} duration={500}>
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-red-600">
                View my projects
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </div>

          <div className="hidden sm:block">
            <img
              className=" object-cover object-center sm:ml-8"
              src={PictureOfMe}
              alt="homepic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
