"use client";

import { Project, projects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Timeline } from "./ui/timeline";
import { Button } from "./ui/button";
import quizOne from '.././public/quizOne.jpeg'
import quizTwo from '.././public/quizTwo.jpeg'
import playTMOne from '.././public/playTMOne.jpeg'
import readium from '.././public/readiumOne.jpg'
import playTMTwo from '.././public/playTMTwo.png'
import portfolioOne from '.././public/portfolioOne.jpeg'
import portfolioTwo from '.././public/portfolioTwo.jpeg'
import {
    SiTypescript, SiNextdotjs, SiReact, SiPostgresql, SiMongodb, SiExpress,
    SiAmazon, SiDocker, SiNginx, SiTailwindcss, SiRecoil, SiRedux,
    SiReactrouter,
    SiCss3
} from 'react-icons/si';
import { motion } from "framer-motion";

const Projects = () => {
    const data = [
        {
            title: "2024",
            content: (
                <div className="space-y-2">
                    <div>
                        <p className=" text-2xl sm:text-[2.5rem] bg-gradient-to-b from-blue-500 to-neutral-500 bg-clip-text font-bold">
                            PlayTM
                        </p>
                    </div>

                    <div>
                        <p className=" relative font-extralight z-30 text-neutral-700 dark:text-neutral-300 text-xl md:text-2xl max-w-6xl">
                            A light replica of how payTm works, like adding money to your wallet, sending money to a friend,
                            adding benefieciaries, requesting a friend for money.
                            Not only that you can aslo check your balance and history of your wallet.
                        </p>
                    </div>

                    <span className="flex items-center w-full pt-6 gap-4 relative font-extralight text-neutral-700 dark:text-neutral-300 text-2xl md:text-3xl max-w-6xl">
                        <SiTypescript className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text" />
                        <SiNextdotjs className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text" />
                        <SiNginx className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text" />
                        <SiAmazon className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text" />
                        <SiExpress className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text" />
                        <SiPostgresql className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text" />
                        <SiRecoil className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text" />
                        <SiTailwindcss className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text" />
                        <SiDocker className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text" />
                    </span>

                    <div className="flex gap-4 pt-4 relative z-30">
                        <button className="px-4 py-2 text-xl font-bold rounded-2xl text-[#457FDE]  bg-white transform hover:cursor-pointer  hover:scale-105 hover:bg-slate-200   transition-all duration-300">
                            <Link href="https://playTM.vercel.app"
                                target="_blank">
                                Live
                            </Link>
                        </button>
                        <button className="px-4 py-2 text-xl font-bold rounded-2xl bg-[#457FDE]  text-white transform hover:cursor-pointer hover:scale-105 hover:bg-[#457FDE]   transition-all duration-300">
                            <Link
                                href="https://github.com/yourusername/playTM"
                                target="_blank"
                            >
                                Github
                            </Link>
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <Image
                            src={playTMOne}
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={playTMTwo}
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="https://assets.aceternity.com/templates/startup-3.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="https://assets.aceternity.com/templates/startup-4.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Early 2024",
            content: (
                <div className="space-y-2">
                    <div>
                        <p className=" text-2xl sm:text-[2.5rem] bg-gradient-to-b from-blue-500 to-neutral-500 bg-clip-text font-bold">
                            Readium
                        </p>
                    </div>

                    <div>
                        <p className=" relative font-extralight z-30 text-neutral-700 dark:text-neutral-300 text-xl md:text-2xl max-w-6xl">
                            A light replica of how Medium works, like posting your blogs, you have a favourite blog want to mark it as favourite we got you,
                            you will have your profile where you can see your posts with the faourite ones that you marked,
                            Apart from these feature we have also integrated sharing feature here you can share blogs on any socials that you like.
                        </p>
                    </div>

                    <span className="flex items-center w-full pt-6  gap-4 relative font-extralight z-30 text-neutral-700 dark:text-neutral-300 text-2xl md:text-3xl max-w-6xl">
                        <SiReact className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text" />
                        <SiTypescript className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text" />
                        <SiAmazon className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text" />
                        <SiExpress className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text" />
                        <SiRecoil className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text" />
                        <SiTailwindcss className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text" />
                        <SiDocker className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text" />
                        <SiMongodb className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text" />
                    </span>

                    <div className="flex gap-4 pt-4 relative z-30">
                        <button className="px-4 py-2 text-xl font-bold rounded-2xl text-[#457FDE]  bg-white transform hover:cursor-pointer  hover:scale-105 hover:bg-slate-200   transition-all duration-300">
                            <Link href="https://playTM.vercel.app"
                                target="_blank">
                                Live
                            </Link>
                        </button>
                        <button className="px-4 py-2 text-xl font-bold rounded-2xl bg-[#457FDE]  text-white transform hover:cursor-pointer hover:scale-105 hover:bg-[#457FDE]   transition-all duration-300">
                            <Link
                                href="https://github.com/yourusername/playTM"
                                target="_blank"
                            >
                                Github
                            </Link>
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <Image
                            src={readium}
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={readium}
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="https://assets.aceternity.com/templates/startup-3.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="https://assets.aceternity.com/templates/startup-4.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div className="space-y-2">
                    <div>
                        <p className=" text-2xl sm:text-[2.5rem] bg-gradient-to-b from-blue-500 to-neutral-500 bg-clip-text font-bold">
                            Quizzicle
                        </p>
                    </div>

                    <div>
                        <p className=" relative font-extralight z-30 text-neutral-700 dark:text-neutral-300 text-xl md:text-2xl max-w-6xl">
                            A quiz platform where you can create your own quiz and test your knowledge on a variety of topics.
                        </p>
                    </div>

                    <span className="flex items-center w-full pt-6  gap-4 relative font-extralight z-30 text-neutral-700 dark:text-neutral-300 text-2xl md:text-3xl max-w-6xl">
                        <SiReact className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text" />
                        <SiReactrouter className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text" />
                        <SiCss3 className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text" />
                    </span>

                    <div className="flex gap-4 pt-4 relative z-30">
                        <button className="px-4 py-2 text-xl font-bold rounded-2xl text-[#457FDE]  bg-white transform hover:cursor-pointer  hover:scale-105 hover:bg-slate-200   transition-all duration-300">
                            <Link href="https://playTM.vercel.app"
                                target="_blank">
                                Live
                            </Link>
                        </button>
                        <button className="px-4 py-2 text-xl font-bold rounded-2xl bg-[#457FDE]  text-white transform hover:cursor-pointer hover:scale-105 hover:bg-[#457FDE]   transition-all duration-300">
                            <Link
                                href="https://github.com/yourusername/playTM"
                                target="_blank"
                            >
                                Github
                            </Link>
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <Image
                            src={quizOne}
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={quizTwo}
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="https://assets.aceternity.com/templates/startup-3.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="https://assets.aceternity.com/templates/startup-4.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
    ];
    return (

        <div data-aos="fade-up">
            <Timeline data={data} />
        </div>
    );
};

export default Projects;