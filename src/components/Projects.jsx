import React from "react";
import ComingSoonImage from "../assets/coming-soon.jpg";
import PlantUML from "../assets/PlantUML.png";
import MyPortfolio from "../assets/MyPortfolio.png";

const Work = () => {
  return (
    <div name="projects" className="w-full md:h-screen text-black ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4  border-text-red">
            Projects
          </p>
          <p className="py-6">
            Here is my personal projects displayed. More will be added soon!
          </p>
        </div>

        {/* Container*/}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid item*/}
          <div
            style={{ backgroundImage: `url(${PlantUML})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto custom-div"
          >
            {/* Hover effects*/}

            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                PlantUML-Converter
              </span>
              <div className="pt-8 text-center">
                <a href="#">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large">
                    Demo
                  </button>
                </a>
                <a href="#">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item*/}
          <div
            style={{ backgroundImage: `url(${MyPortfolio})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto custom-div"
          >
            {/* Hover effects*/}

            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                My portfolio
              </span>
              <div className="pt-8 text-center">
                <a href="#">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/FelixJacobsen/my-website-portfolio.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item*/}
          <div
            style={{ backgroundImage: `url(${ComingSoonImage})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto custom-div"
          >
            {/* Hover effects*/}

            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                Application
              </span>
              <div className="pt-8 text-center">
                <a href="#">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large">
                    Demo
                  </button>
                </a>
                <a href="#">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
