import { SiTypescript, SiNextdotjs, SiReact, SiPostgresql, SiMongodb, SiExpress, SiAmazon, SiDocker, SiNginx, SiTailwindcss, SiRecoil, SiRedux } from 'react-icons/si';

const TechStack = () => {
    const technologies = [
        // Row 1
        [
            { icon: SiTypescript, name: 'Typescript' },
            { icon: SiNextdotjs, name: 'Next.js' },
            { icon: SiReact, name: 'React' },
        ],
        // Row 2
        [
            { icon: SiPostgresql, name: 'PostgreSQL' },
            { icon: SiMongodb, name: 'MongoDB' },
            { icon: SiExpress, name: 'Express' },
        ],
        // Row 3
        [
            { icon: SiAmazon, name: 'AWS' },
            { icon: SiDocker, name: 'Docker' },
            { icon: SiNginx, name: 'Nginx' },
        ],
        // Row 4
        [
            { icon: SiTailwindcss, name: 'Tailwind' },
            { icon: SiRecoil, name: 'Recoil' },
            { icon: SiRedux, name: 'Redux' },
        ],
    ];

    return (
        <section className="w-full   text-white py-20 px-4 md:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl z-20 md:text-5xl font-bold text-center mb-16 text-[#E6C07B]">
                    MY TECHSTACK
                </h2>

                <div className="grid gap-8">
                    {technologies.map((row, rowIndex) => (
                        <div key={rowIndex} className="grid grid-cols-3 gap-4 border-b border-gray-800 last:border-0 pb-8 last:pb-0">
                            {row.map((tech, techIndex) => {
                                const Icon = tech.icon;
                                return (
                                    <div
                                        key={techIndex}
                                        className="flex flex-col items-center justify-center gap-4 p-6 transition-transform hover:scale-110"
                                    >
                                        <Icon className="w-12 z-20 h-12 md:w-16 md:h-16 text-[#E6C07B]" />
                                        <span className="text-sm md:text-base text-gray-300">{tech.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack; 