import React from "react";

export default function TechStack() {
  const techs = [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", rating: 5 },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", rating: 5 },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", rating: 4.5 },
    { name: "TypeScript", icon: "/Typescript_logo_2020.svg.webp", rating: 2.5 },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", rating: 4 },
    { name: "Next", icon: "https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png", rating: 3 },
    { name: "TailwindCSS", icon: "/download.png", rating: 5 },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", rating: 4 },
    { name: "GitHub", icon: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png", rating: 3.5 },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", rating: 3 },
    { name: "Gsap", icon: "https://i.ibb.co/GNNRcMW/GSAP-Docs-Learning-10-24-2025-09-52-PM.png", rating: 2.5 },
    { name: "Daisy UI", icon: "https://img.daisyui.com/images/daisyui/mark-rotating.svg", rating: 4 },
    { name: "C", icon: "https://img.icons8.com/?size=48&id=40670&format=png", rating: 2.5 },
    { name: "vercel", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-vtiBy89TRfu4e7bC7WJpf1IX1TPuOvyhJw&s", rating: 4 },
    { name: "Capacitor.js", icon: "/Capciter,js.jpg", rating: 3 },
  ];

  const Star = ({ filled, half }) => (
    <div className="relative w-5 h-5 inline-block">
      {/* Base gray star */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="absolute inset-0 text-gray-500 opacity-40"
      >
        <path
          fillRule="evenodd"
          d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"
          clipRule="evenodd"
        />
      </svg>

      {/* Filled star */}
      {(filled || half) && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="absolute inset-0 text-yellow-400"
          style={
            half
              ? { clipPath: "inset(0 50% 0 0)" } // show only half filled
              : {}
          }
        >
          <path
            fillRule="evenodd"
            d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </div>
  );

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<Star key={i} filled />);
      } else if (rating >= i - 0.5) {
        stars.push(<Star key={i} half />);
      } else {
        stars.push(<Star key={i} />);
      }
    }
    return <div className="flex justify-center mt-2">{stars}</div>;
  };

  return (
    <section id="techstack" className="w-full py-20 bg-base-200 text-base-content transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
          Tech Stack
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 text-center">
          {techs.map((tech, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${index * 50}ms` }}
              className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-base-100 hover:scale-110 transform transition border border-base-300 reveal reveal-up"
            >
              <img src={tech.icon} alt={tech.name} className="w-16 h-16 mb-3 object-contain" loading="lazy" />
              <p className="font-medium uppercase">{tech.name}</p>
              {renderStars(tech.rating)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
