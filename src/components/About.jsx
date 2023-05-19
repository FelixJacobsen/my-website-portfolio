import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div name="about" className="w-full h-screen  text-black ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000x] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-600">
              About me
            </p>
          </div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-rioght text-4xl font-bold">
            <p>
              Hello! I'm Felix, This is my website to showcase my skills and my
              personal projects
            </p>
          </div>
          <div>
            <p>
              I have recently graduated from a two-year program in Java
              development. The education was full-stack and has given me the
              opportunity to work with backend as well as frontend.
              <br />
              <br />
              All projects displayed on the website are created by me and are
              showcased to demonstrate my programming skills.
              <br />
              <br />I am looking for opportunities in Java/React, if you are
              looking for a committed developer, do not hesitate to{" "}
              <Link className="cursor-pointer font-bold" to="contact">
                contact
              </Link>{" "}
              me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
