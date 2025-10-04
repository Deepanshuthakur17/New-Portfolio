import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Old Portfolio Website",
      description:
        "A sleek personal portfolio built with Html, CSS and Javascript and dark mode.",
      img: "/deep.png",
      demo: "https://deepanshuthakur17.github.io/my-portfolio/",
      github: "https://github.com/yourusername/portfolio",
    },
    {
      title: "School Website",
      description:
        "A responsive and user-friendly school website built with React, TailwindCSS and Gsap optimized for performance and accessibility.",
      img: "/nps.png",
      demo: "https://nalanda-public-school.vercel.app/",
      github: "https://github.com/yourusername/school-website",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full py-20 bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6 flex flex-col justify-between h-[250px]">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 btn-grad bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>
                  {/* <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-blue-600 text-blue-600 text-sm font-medium rounded-lg hover:bg-blue-600 hover:text-white transition"
                  >
                    GitHub
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
