import React from "react";
import Java from "../assets/java-logo.svg";
import Docker from "../assets/docker-logo.svg";
import Spring from "../assets/spring-logo.svg";
import MySQL from "../assets/mysql-logo.svg";
import Git from "../assets/git-logo.svg";
import TailWind from "../assets/tailwind-logo.svg";
import MongoDB from "../assets/mongodb-logo.svg";
import Html5 from "../assets/html5-logo.svg";
import ReactLogo from "../assets/react-logo.svg";
import CPlusPlus from "../assets/c++-logo.svg";
import Kubernetes from "../assets/kubernetes-logo.svg";
import OracleDB from "../assets/oracle-db-logo.svg";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-red-600 inline">
            Experience
          </p>
          <p className="py-4 ">
            These are the technologies, tools and frameworks that I have
            experience with
          </p>
        </div>

        <div className="w-full grid grid-cols2 sm:grid-cols-4 text-center py-8 gap-4">
          <div className="grid">
            <p className="text-4xl mb-4">Backend</p>
            <div className="shadow-md shadow-[#040c16]">
              <img className="w-20 mx-auto" src={Java} alt="Java icon" />
              <p>Java</p>
            </div>

            <div className="shadow-md shadow-[#040c16] ">
              <img className="w-20 mx-auto" src={Spring} alt="Java icon" />
              <p>Spring</p>
            </div>

            <div className="shadow-md shadow-[#040c16] ">
              <img className="w-20 mx-auto" src={CPlusPlus} alt="Java icon" />
              <p>C++</p>
            </div>
          </div>

          <div className="grid">
            <p className="text-4xl mb-4">Frontend</p>
            <div className="shadow-md shadow-[#040c16]">
              <img className="w-20 mx-auto" src={Html5} alt="Java icon" />
              <p>HTML5</p>
            </div>
            <div className="shadow-md shadow-[#040c16] ">
              <img className="w-20 mx-auto" src={ReactLogo} alt="Java icon" />
              <p>React</p>
            </div>
            <div className="shadow-md shadow-[#040c16] ">
              <img className="w-20 mx-auto" src={TailWind} alt="Java icon" />
              <p>Tailwind</p>
            </div>
          </div>

          <div className="grid">
            <p className="text-4xl  mb-4">Tools</p>

            <div className="shadow-md shadow-[#040c16] ">
              <img className="w-20 mx-auto" src={Docker} alt="Java icon" />
              <p>Docker</p>
            </div>

            <div className="shadow-md shadow-[#040c16] ">
              <img className="w-20 mx-auto" src={Git} alt="Java icon" />
              <p>Git</p>
            </div>

            <div className="shadow-md shadow-[#040c16] ">
              <img className="w-20 mx-auto" src={Kubernetes} alt="Java icon" />
              <p>Kubernetes</p>
            </div>
          </div>

          <div className="grid">
            <p className="text-4xl  mb-4">Databases</p>

            <div className="shadow-md shadow-[#040c16] ">
              <img className="w-20 mx-auto" src={MySQL} alt="Java icon" />
              <p>MySQL</p>
            </div>
            <div className="shadow-md shadow-[#040c16] ">
              <img className="w-20 mx-auto" src={MongoDB} alt="Java icon" />
              <p>MongoDB</p>
            </div>
            <div className="shadow-md shadow-[#040c16] ">
              <img className="w-20 mx-auto" src={OracleDB} alt="Java icon" />
              <p>OracleDB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
