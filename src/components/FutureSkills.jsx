import React from "react";

export default function FutureSkills() {
    const techs = [
        {
            name: "Next.js",
            icon: "https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png",
        },
        {
            name: "Lenis",
            icon: "data:image/png;base64,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",
        },
    ];

    return (
        <section
            id="futureskills"
            className="w-full py-20 bg-[#111114] text-white transition-colors duration-300"
        >
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase">
                    Future Skills
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
