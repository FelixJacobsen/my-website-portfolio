import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-red-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Felix Jacobsen
        </h1>
        <h2 className="text-[#8892b0] py-4 max-w-[700px] text-4xl sm:text-7xl ">
          I'm a Full Stack Developer
        </h2>
        <h2 className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a Full Stack Developer
        </h2>
        <div>
          <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-red-600">
            View my work <HiArrowNarrowRight className="ml-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
