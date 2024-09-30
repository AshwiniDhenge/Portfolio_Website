import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
    const EducationBox = ({ degree, university, year, college }) => (
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 hover:shadow-2xl hover:border-transparent hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 transition-all duration-500 transform hover:scale-105 text-center">
            <div className="flex justify-center items-center mb-4">
                <FaGraduationCap className="text-4xl text-green-400" />
            </div>
            <h4 className="text-2xl font-extrabold text-white mb-2">
                {degree}
            </h4>
            <p className="text-xl text-gray-300 mb-2">{university}</p>
            <p className="text-lg text-gray-400">{year}</p>
            <p className="text-md text-gray-400 mt-4">{college}</p>
        </div>
    );

    return (
        <div className="bg-black text-white py-20" id="education">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <div className="mt-12">
                    {/* <h3 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 mb-12 animate-pulse">
            Education
          </h3> */}
                    <h2 className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
                        Education        
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Education Box 1 */}
                        <EducationBox
                            degree="Master of Computer Science"
                            university="RTMNU"
                            year="2021 - 2023"
                            college="Shivaji Science College, Nagpur"
                        />

                        {/* Education Box 2 */}
                        <EducationBox
                            degree="Bachelor of Computer Science"
                            university="RTMNU"
                            year="2018 - 2021"
                            college="Tai Golwalkar Science College, Ramtek"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
