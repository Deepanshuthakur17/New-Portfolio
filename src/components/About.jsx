import React, { useState, useEffect } from "react";

export default function AboutMe() {
  const images = ["/profile.webp", "/profile-2.jpeg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === 0 ? 1 : 0));
    }, 3000); // Switch every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="w-full py-20 bg-base-100 text-base-content transition-colors duration-300"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 reveal reveal-up">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Image with Smoother Animation */}
          <div className="flex justify-center lg:-mt-24 relative w-64 h-64 mx-auto group reveal reveal-left">
            <div className="absolute inset-0 rounded-2xl border-4 border-blue-600 animate-pulse opacity-20"></div>
            {images.map((src, index) => (
              <img
                key={src}
                src={src}
                alt="Deepanshu Thakur"
                className={`absolute inset-0 w-64 h-64 object-cover rounded-2xl shadow-2xl border-4 border-blue-600 transition-all duration-[1500ms] ease-in-out ${
                  currentImageIndex === index 
                    ? "opacity-100 scale-100 rotate-0 blur-none z-10" 
                    : "opacity-0 scale-105 rotate-1 blur-sm z-0"
                } group-hover:scale-110 transform`}
              />
            ))}
          </div>

          {/* Right Side - Text */}
          <div className="reveal reveal-right">
            <p className="text-lg md:text-xl leading-relaxed mb-6 px-6 py-4 rounded-2xl shadow-xl bg-base-200 text-center font-light border border-base-300">
              I'm a passionate <span className="font-bold uppercase text-primary tracking-tighter">Front-End Web Developer</span> 
              &nbsp;with a keen eye for design and a love for creating seamless digital experiences. 
              With expertise in modern web technologies, I transform ideas into elegant, 
              functional websites.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-8 px-6 py-4 rounded-2xl shadow-xl bg-base-200 text-center font-light border border-base-300">
              My approach combines clean code with beautiful design, ensuring every project 
              is both visually stunning and technically robust. I'm constantly learning and 
              adapting to new technologies to deliver the best solutions.
            </p>

            {/* Key Highlights */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="lg:hover:scale-125 transition-all ease-in text-center p-4 rounded-lg shadow-md bg-base-300">
                <h3 className="font-semibold text-lg mb-2">Clean Code</h3>
                <p className="text-sm">Writing maintainable and scalable code</p>
              </div>
              <div className="lg:hover:scale-125 transition-all ease-in text-center p-4 rounded-lg shadow-md bg-base-300">
                <h3 className="font-semibold text-lg mb-2">Modern Design</h3>
                <p className="text-sm">Creating beautiful user interfaces</p>
              </div>
              <div className="lg:hover:scale-125 transition-all ease-in text-center p-4 rounded-lg shadow-md bg-base-300">
                <h3 className="font-semibold text-lg mb-2">Performance</h3>
                <p className="text-sm">Optimizing for speed and efficiency</p>
              </div>
            </div>

            {/* Download CV Button */}
            <a
              href="/Deepanshu_Thakur_Resume.pdf" // replace with your actual CV file
              download
              className="px-4 py-3 lg:px-6 font-bold hover:scale-125 transition-all ease-in bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 hover:text-black inline-flex items-center gap-2"
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
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
