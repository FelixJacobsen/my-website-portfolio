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
import Kubernetes from "../assets/kubernetes-logo.svg";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold border-b-4 border-red-600 inline">
            Experience
          </p>
          <p className="py-4 ">
            These are the technologies, tools and frameworks that I have
            experience with
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center py-8 gap-4">
          <div className="grid gap-6">
            <p className="text-lg sm:text-4xl lg:text-2xl mb-4">Backend</p>
            <div className="shadow-2xl">
              <img className="w-20 mx-auto" src={Java} alt="Java icon" />
              <p>Java</p>
            </div>
            <div className="shadow-2xl">
              <img className="w-20 mx-auto" src={Spring} alt="Spring icon" />
              <p>Spring</p>
            </div>
          </div>

          <div className="grid gap-6">
            <p className="text-lg sm:text-xl lg:text-2xl mb-4">Frontend</p>
            <div className="shadow-2xl">
              <img className="w-20 mx-auto" src={Html5} alt="HTML5 icon" />
              <p>HTML5</p>
            </div>
            <div className="shadow-2xl">
              <img className="w-20 mx-auto" src={ReactLogo} alt="React icon" />
              <p>React</p>
            </div>
            <div className="shadow-2xl">
              <img
                className="w-20 mx-auto"
                src={TailWind}
                alt="Tailwind icon"
              />
              <p>Tailwind</p>
            </div>
          </div>

          <div className="grid gap-6">
            <p className="text-lg sm:text-xl lg:text-2xl mb-4">Tools</p>
            <div className="shadow-2xl">
              <img className="w-20 mx-auto" src={Docker} alt="Docker icon" />
              <p>Docker</p>
            </div>
            <div className="shadow-2xl">
              <img className="w-20 mx-auto" src={Git} alt="Git icon" />
              <p>Git</p>
            </div>
            <div className="shadow-2xl">
              <img
                className="w-20 mx-auto"
                src={Kubernetes}
                alt="Kubernetes icon"
              />
              <p>Kubernetes</p>
            </div>
          </div>

          <div className="grid gap-6">
            <p className="text-lg sm:text-xl lg:text-2xl mb-4">Databases</p>
            <div className="shadow-2xl">
              <img className="w-20 mx-auto" src={MySQL} alt="MySQL icon" />
              <p>MySQL</p>
            </div>
            <div className="shadow-2xl">
              <img className="w-20 mx-auto" src={MongoDB} alt="MongoDB icon" />
              <p>MongoDB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
