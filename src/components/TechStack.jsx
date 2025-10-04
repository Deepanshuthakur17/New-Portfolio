import React from "react";

export default function TechStack() {
    const techs = [
        {
            name: "HTML5",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
            name: "CSS3",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
            name: "JavaScript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
            name: "React",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
            name: "TailwindCSS",
            icon: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg",
        },
        {
            name: "Git",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
            name: "GitHub",
            icon: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
        },
        {
            name: "Node.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
            name: "Gsap",
            icon: "https://i.postimg.cc/qBskXgRS/GSAP-Docs-Learning-10-04-2025-02-05-PM.png",
        },
        {
            name: "Daisy UI",
            icon: "https://img.daisyui.com/images/daisyui/mark-rotating.svg",
        },
    ];

    return (
        <section
            id="techstack"
            className="w-full py-20 bg-[#0B0B0E] text-white transition-colors duration-300"
        >
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase">
                    Tech Stack
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 text-center">
                    {techs.map((tech, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-[#131316] hover:scale-125 transform transition"
                        >
                            <img
                                src={tech.icon}
                                alt={tech.name}
                                className="w-16 h-16 mb-3"
                            />
                            <p className="font-medium">{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
