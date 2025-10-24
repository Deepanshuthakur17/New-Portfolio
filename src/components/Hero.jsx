import React from "react";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    // color for theme
    // #7C3BEC
    <section
      id="home"
      className="w-full overflow-hidden h-screen hero-bg bg-cover bg-center relative flex flex-col justify-center items-center text-center"
      // style={{ backgroundImage: `url('/herobg.png')` }}
    >
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 -z-10"></div>
      <Navbar/>

      {/* Text content */}
      <div className="relative z-10 px-4 mt-40">
        <p className="text-xl md:text-2xl text-white mb-2">Hi, I'm</p>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">Deepanshu Thakur</h1>
        <h2 className="text-2xl md:text-3xl text-blue-400 mb-4">Front-End Web Developer</h2>
        <p className="text-gray-200 max-w-xl mx-auto mb-6">
          Crafting beautiful, responsive, and user-friendly web experiences with modern technologies
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="btn-grad px-6 py-3 rounded-lg transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border btn-outline border-white text-white rounded-lg hover:bg-white hover:text-black transition"
          >
            Hire Me
          </a>
        </div>
        <div className="mt-[15vw] px-[45vw] lg:mt-[8vw]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="40"
            viewBox="0 0 24 40"
            fill="none"
          >
            <rect
              x="1.5"
              y="1.5"
              width="21"
              height="37"
              rx="10.5"
              stroke="white"
              strokeWidth="3"
            />
            <circle
              cx="12"
              cy="10"
              r="2"
              fill="white"
            >
              <animate
                attributeName="cy"
                values="10;18;10"
                dur="1.2s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>

        </div>
      </div>
    </section>
  );
}
