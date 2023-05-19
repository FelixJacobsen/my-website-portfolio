import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen  text-black ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000x] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-600">
              About
            </p>
          </div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-rioght text-4xl font-bold">
            <p>
              Hello! I'm Felix, nice to meet you. This is my website to showcase
              my skills and my personal projects
            </p>
          </div>
          <div>
            <p>
              I have recently graduated from a two-year program in Java
              development. The education was full-stack and has given me the
              opportunity to work with both frontend and backend development.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
