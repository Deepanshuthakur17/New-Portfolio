import React from "react";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    // color for theme
    // #7C3BEC
    <section
      id="home"
      className="w-full overflow-hidden h-screen hero-bg bg-cover bg-center relative flex flex-col justify-center items-center text-center"
      // style={{ backgroundImage: `url('/herobg.webp')` }}
    >
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 -z-10"></div>
      <Navbar/>

      {/* Text content */}
      <div className="relative z-10 px-4 mt-20 md:mt-40">
        <p className="text-lg md:text-xl font-medium text-white/90 mb-4 tracking-widest uppercase">Hi, I'm</p>
        <h1 className="text-5xl md:text-8xl font-black text-white mb-4 tracking-tighter leading-none">
          Deepanshu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-100">Thakur</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-blue-300 mb-8 tracking-tight uppercase">
          Front-End Web Developer
        </h2>
        <p className="text-gray-100/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Crafting high-performance, visually stunning digital experiences with modern web technologies and a focus on user-centric design.
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
