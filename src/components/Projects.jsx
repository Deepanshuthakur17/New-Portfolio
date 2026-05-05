import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Loopback – Premium Feedback Tool",
      description:
        "Loopback is a production-grade feedback SaaS designed for product teams to collect, prioritize, and manage user insights with ease. Built with a focus on Premium Aesthetics, Performance, and User Experience.",
      img: "/PC-Screen.png",
      demo: "https://loopback-xi.vercel.app/",
      github: "https://github.com/Deepanshuthakur17/feedback-Internship-project",
    },
    {
      title: "Old Portfolio Website-[It's shown my Growth]",
      description:
        "A sleek personal portfolio built with Html, CSS and Javascript and dark mode.",
      img: "/deep.webp",
      demo: "https://deepanshuthakur17.github.io/my-portfolio/",
      github: "https://github.com/yourusername/portfolio",
    },
    {
      title: "School Website",
      description:
        "A responsive and user-friendly school website built with React, TailwindCSS and Gsap optimized for performance and accessibility.",
      img: "/Nalanda-Public-School.webp",
      demo: "https://nalanda-public-school.vercel.app/",
      github: "https://github.com/yourusername/school-website",
    },
    {
      title: "D17-Ai",
      description:
        "D17-AI is a futuristic, voice-powered AI assistant built with React and the Google Gemini API,It listens to your voice, understands your question, and responds with expressive speech — creating an immersive, natural conversation experience.",
      img: "/d17-ai.webp",
      demo: "https://d17-ai.vercel.app/",
      github: "https://github.com/yourusername/school-website",
    },
    {
      title: "RENTON",
      description:
        "This project is a rental-marketplace platform (“RentOn”), developed to enable users to list, browse, and rent items or properties seamlessly via a modern, responsive user interface, built with React, TailwindCSS optimized for performance and accessibility.",
      img: "/RENTON.webp",
      demo: "https://renton-rho.vercel.app/",
      github: "https://github.com/yourusername/school-website",
    },
    {
      title: "Eco-Bite",
      description:
        "EcoBite offers a range of edible cups, spoons, and plates, crafted from natural ingredients, designed to reduce waste and enhance your dining experience.",
      img: "/Eco-Bite.webp",
      demo: "https://eco-bite-beta.vercel.app/",
      github: "https://github.com/yourusername/school-website",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full py-20 bg-base-200 text-base-content transition-colors duration-300"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-600">
          Featured Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${index * 150}ms` }}
              className="bg-base-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-base-300 reveal reveal-up"
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
                  <p className="text-sm opacity-80 mb-4">
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
