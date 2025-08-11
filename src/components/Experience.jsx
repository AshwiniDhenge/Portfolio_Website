import React from "react";

const internships = [
  {
    id: 1,
    position: "Web Development Intern",
    company: "Octanet Services Pvt Ltd.",
    location: "Maharashtra",
    period: "May 2024 - Aug 2024",
    technologies: "Html, Tailwind CSS, React.js, JavaScript, Auth0",
    description: "Design and development of user-friendly web applications. Utilized HTML, Tailwind CSS, and React.js to create visually appealing and responsive layouts, ensuring an optimal user experience across various devices. ",
  },
  {
    id: 2,
    position: "Web Development Intern",
    company: "Code Clause",
    location: "Maharashtra",
    period: "Aug 2023 - Sep 2023",
    technologies: "Html, CSS, JavaScript, Bootstrap, React.js",
    description: "Designed different static websites as an intern front-end developer.",
  },
  {
    id: 3,
    position: "Web Development Intern",
    company: "Prodigy Infotech Pvt Ltd.",
    location: "Maharashtra",
    period: "Aug 2023 - Sep 2023",
    technologies: "Html, CSS, JavaScript",
    description: "Designed and implemented elements of web design and frontend development basics during the early stage of the internship.",
  },
];

const Experience = () => {
  return (
    <div className="bg-black text-white py-20" id="experience">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Internships Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
            Internship Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {internships.map((internship) => (
              <div
                key={internship.id}
                className="bg-gray-900 p-8 rounded-xl hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out"
              >
                <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  {internship.position}
                </h3>
                <p className="text-gray-400 mb-2">
                  <span className="font-semibold text-gray-300">{internship.company}</span> - {internship.location}
                </p>
                <p className="text-gray-500 mb-4">{internship.period}</p>
                <div className="mb-4">
                  <span className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {internship.technologies}
                  </span>
                </div>
                {internship.description && (
                  <p className="text-gray-300 italic border-l-4 border-green-500 pl-4">
                    {internship.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
