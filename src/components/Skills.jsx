import React from "react";
import Java from "../assets/java-logo.svg";
import Docker from "../assets/docker-logo.svg";
import Spring from "../assets/spring-logo.svg";
import MySQL from "../assets/mysql-logo.svg";
import Git from "../assets/git-logo.svg";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-red-600 inline">
            Experience
          </p>
          <p className="py-4 ">
            These are the frameworks I've experienced with
          </p>
        </div>

        <div className="w-full grid grid-cols2 sm:grid-cols-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Java} alt="Java icon" />
            <p>Java</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={MySQL} alt="Java icon" />
            <p>MySQL</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Docker} alt="Java icon" />
            <p>Docker</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Spring} alt="Java icon" />
            <p>Spring</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Git} alt="Java icon" />
            <p>Git</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
