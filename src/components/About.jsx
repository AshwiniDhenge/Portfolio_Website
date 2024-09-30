
import React from "react";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">

          <div className="flex-1">
            <p className="text-lg leading-relaxed mb-8 text-gray-300">
              🚀 Aspiring Software Engineer | Frontend Enthusiast | Open to New Opportunities 🌐
              <br></br>
              I am motivated to kickstart my career in the tech industry and make a positive impact. With a solid foundation in programming languages like Java and hands-on experience in Frontend Development and Web Designing, I am eager to contribute my skills to meaningful projects.
              <br>
              </br>
              💻 Frontend Development | Bringing Ideas to Life 💡
              <br></br>
              I am a passionate full-stack developer focused on building modern,
              responsive web applications. With a both frontend and backend technologies,
              I strive to create seamless, efficient, and visually engaging user experiences.
              Also I completed an internship in Web Designing as a Front-End Developer.
              <br>
              </br>
              🎓 Curious Learner | Forever Student 📚
              <br></br>
              Currently, I am focusing on expanding my knowledge of Java to enhance my Full Stack Development skills. I believe in continuous learning and strive to stay updated by attending workshops, tech conferences, and engaging with the latest advancements in the field.

            </p>


          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
