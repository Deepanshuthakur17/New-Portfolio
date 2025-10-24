import React from "react";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="w-full py-20 bg-[#111114] text-white transition-colors duration-300"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Image */}
          <div className="flex justify-center lg:-mt-24">
            <img
              src="/profile.jpg" // replace with your image
              alt="Deepanshu Thakur"
              className="w-64 h-64 hover:scale-125 transition-all ease-in object-cover rounded-2xl shadow-lg border-4 border-blue-600"
            />
          </div>

          {/* Right Side - Text */}
          <div>
            <p className="text-lg leading-relaxed mb-6 px-5 py-3 rounded-lg shadow-md bg-[#0B0B0E] text-center">
              I'm a passionate <span className="font-semibold uppercase text-[#D3FD50]">Front-End Web Developer</span> 
              &nbsp;with a keen eye for design and a love for creating seamless digital experiences. 
              With expertise in modern web technologies, I transform ideas into elegant, 
              functional websites.
            </p>
            <p className="text-lg leading-relaxed mb-8 px-5 py-3 rounded-lg shadow-md bg-[#0B0B0E] text-center">
              My approach combines clean code with beautiful design, ensuring every project 
              is both visually stunning and technically robust. I'm constantly learning and 
              adapting to new technologies to deliver the best solutions.
            </p>

            {/* Key Highlights */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="lg:hover:scale-125 transition-all ease-in text-center p-4 rounded-lg shadow-md bg-[#131316]">
                <h4 className="font-semibold text-lg mb-2">Clean Code</h4>
                <p className="text-sm">Writing maintainable and scalable code</p>
              </div>
              <div className="lg:hover:scale-125 transition-all ease-in text-center p-4 rounded-lg shadow-md bg-[#131316]">
                <h4 className="font-semibold text-lg mb-2">Modern Design</h4>
                <p className="text-sm">Creating beautiful user interfaces</p>
              </div>
              <div className="lg:hover:scale-125 transition-all ease-in text-center p-4 rounded-lg shadow-md bg-[#131316]">
                <h4 className="font-semibold text-lg mb-2">Performance</h4>
                <p className="text-sm">Optimizing for speed and efficiency</p>
              </div>
            </div>

            {/* Download CV Button */}
            <a
              href="/Deepanshu_Thakur_Resume.pdf" // replace with your actual CV file
              download
              className="px-6 py-3 font-bold hover:scale-125 transition-all ease-in bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 hover:text-black inline-flex items-center gap-2"
            >
              {/* SVG Download Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v12m0 0l-4-4m4 4l4-4m-9 8h10a2 2 0 002-2v-2a2 2 0 00-2-2H7a2 2 0 00-2 2v2a2 2 0 002 2z"
                />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
