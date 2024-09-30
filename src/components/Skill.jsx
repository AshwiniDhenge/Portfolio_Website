
import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaGitAlt, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiSpringboot, SiMysql } from "react-icons/si";

const skill = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Java", icon: <FaJava className="text-red-600" /> },
  { name: "JDBC", icon: <SiMysql className="text-blue-600" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
  { name: "GitHub", icon: <FaGitAlt className="text-orange-400" /> },
{ name: "MySQL", icon: <SiMysql className="text-blue-500" /> },

];

const Skill = () => {
  return (
    <div className="bg-black text-white py-20" id="skill">
      {/* Skills Section */}
      <div className="mt-20">
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
          My Skills
        </h2>
        
        {/* First Block (Top) */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {skill.slice(0, 5).map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 text-gray-300 px-6 py-4 rounded-lg flex flex-col items-center justify-center 
              shadow-lg transform transition-transform hover:scale-110 duration-300 hover:bg-gradient-to-r from-green-400 to-blue-500"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <span className="text-lg font-medium">{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Second Block (Bottom) */}
        <div className="flex flex-wrap justify-center gap-6">
          {skill.slice(5).map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 text-gray-300 px-6 py-4 rounded-lg flex flex-col items-center justify-center 
              shadow-lg transform transition-transform hover:scale-110 duration-300 hover:bg-gradient-to-r from-green-400 to-blue-500"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <span className="text-lg font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
