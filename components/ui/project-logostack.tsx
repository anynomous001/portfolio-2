"use client"
import React from 'react'
import {
    SiTypescript, SiNextdotjs, SiReact, SiPostgresql, SiMongodb, SiExpress,
    SiAmazon, SiDocker, SiNginx, SiTailwindcss, SiRecoil, SiRedux,
    SiReactrouter, SiOpenai, SiVercel, SiRedis, SiNodedotjs, SiEslint,
    SiCss3, SiTurborepo, SiZapier, SiGooglesheets, SiSlack, SiGmail, SiApachekafka, SiPrisma, SiJsonwebtokens
} from 'react-icons/si';
interface ProjectLogoStackProps {
    onMouseMove: (event: any) => void,
    height: number,
    width: number,
    alt: string,
}


// const LogoStack = [{
//     title: NextJS,
//     icon: <SiNextdotjs className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text" title="Next.js" />
// },

// {

// }
// ]

//     < SiNextdotjs className = "bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text" title = "Next.js" />
//                         <SiReact className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text" title="React" />
//                         <SiTypescript className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text" title="TypeScript" />
//                         <SiTailwindcss className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text" title="TailwindCSS" />
//                         <SiOpenai className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text" title="OpenAI" />
//                         <SiRedis className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text" title="Redis" />
//                         <SiNodedotjs className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text" title="Node.js" />
//                         <SiVercel className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text" title="Vercel" />
//                         <SiEslint className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text" title="ESLint" />
//                         <SiTurborepo className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text" title="Turbopack" />




const ProjectLogoStack = ({ onMouseMove, height, width, alt }: ProjectLogoStackProps) => {
    return (
        <div className="relative !m-0 h-14 w-14 rounded-full border-2 border-white object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105">

            ProjectLogoStack
        </div>
    )
}

export default ProjectLogoStack