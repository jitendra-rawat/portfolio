import react from "../assets/react.png";
import next from "../assets/nextjs.png";
import reactnative from "../assets/react.svg";
import js from "../assets/javascript.png";
import ts from "../assets/typescript.svg";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import express from "../assets/express.png";

import ai from "../assets/ai.webp";

import mysql from "../assets/mysql.png";
import sql from "../assets/sql.webp";

const Skills = () => {
  const frontendSkills = [
    { name: "ReactJS", image: react, color: "bg-blue-100" },
    { name: "NextJS", image: next, color: "bg-gray-100" },
    { name: "React Native", image: reactnative, color: "bg-blue-50" },
    { name: "TypeScript", image: ts, color: "bg-amber-100" },
    { name: "JavaScript", image: js, color: "bg-yellow-50" },
    { name: "Tailwind CSS", image: tailwind, color: "bg-teal-50" },
  ];

  const backendSkills = [
    { name: "GenAI", image: ai, color: "bg-red-50" },
    { name: "NodeJS", image: node, color: "bg-green-100" },
    { name: "ExpressJS", image: express, color: "bg-gray-50" },

    { name: "SQL", image: sql, color: "bg-yellow-50" },
    { name: "MySQL", image: mysql, color: "bg-blue-50" },
  ];

  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
      <div className="text-center mb-16">
        <p className="text-lg font-poppins text-gray-500 mb-2">Explore My</p>
        <h2 className="text-4xl font-bold font-poppins bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Technical Skills
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Frontend Skills */}
        <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold font-poppins text-gray-800 mb-2">
              Frontend Development
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {frontendSkills.map((skill, index) => (
              <div
                key={index}
                className={`flex flex-col items-center p-4 rounded-xl ${skill.color} transition-all duration-300 hover:scale-105`}
              >
                <div className="w-16 h-16 mb-3 flex items-center justify-center">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-lg font-medium font-poppins text-gray-700">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold font-poppins text-gray-800 mb-2">
              Backend Development
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {backendSkills.map((skill, index) => (
              <div
                key={index}
                className={`flex flex-col items-center p-4 rounded-xl ${skill.color} transition-all duration-300 hover:scale-105`}
              >
                <div className="w-16 h-16 mb-3 flex items-center justify-center">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-lg font-medium font-poppins text-gray-700">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating background elements */}
      <div className="absolute left-0 right-0 -z-10 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-blue-400 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full bg-purple-400 blur-3xl"></div>
      </div>
    </section>
  );
};

export default Skills;
