import React from "react";
import WorkImage from "../assets/workImg.jpeg";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-red-600">
            Work
          </p>
          <p className="py-6">Checkout some of my recent work</p>
        </div>

        {/* Container*/}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid item*/}
          <div
            style={{ backgroundImage: `url(${WorkImage})` }}
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

          {/* Grid item*/}
          <div
            style={{ backgroundImage: `url(${WorkImage})` }}
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

          {/* Grid item*/}
          <div
            style={{ backgroundImage: `url(${WorkImage})` }}
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

          {/* Grid item*/}
          <div
            style={{ backgroundImage: `url(${WorkImage})` }}
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
