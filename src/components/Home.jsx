import React from "react";
import PictureOfMe from "../assets/NewPictureOfMe.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="flex flex-col sm:flex-row items-center">
          <div>
            <p className="text-text-red ">Hi, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
              Felix Jacobsen
            </h1>
            <h2 className="text-[#8892b0] py-4 max-w-[700px] text-4xl sm:text-7xl ">
              I'm a Full Stack Developer
            </h2>
            <h2 className="text-[#8892b0] py-4 max-w-[700px]">
              I'm a Full Stack Developer with focus on backend development,
              primarily Java.
            </h2>
            <Link to="projects" smooth={true} offset={true} duration={500}>
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-text-red hover:border-text-red">
                View my projects
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </div>

          <div className="hidden sm:block">
            <img className="" src={PictureOfMe} alt="homepic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
