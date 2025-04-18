"use client";

import Image from "next/image";
import Link from "next/link";
import { Timeline } from "./ui/timeline";
import quizOne from '.././public/quizOne.jpeg';
import quizTwo from '.././public/quizTwo.jpeg';
import playTMOne from '.././public/playTMOne.jpeg';
import readium from '.././public/readiumOne.jpg';
import playTMTwo from '.././public/playTMTwo.png';
import PictureWhisperAI1 from '@/public/PictureWhisperAI-1.jpeg';
import PictureWhisperAI3 from '@/public/PictureWhisperAI-3.jpeg';
import zapier1 from '@/public/zapier1.jpeg';
import zapier2 from '@/public/zapier2.jpeg';
import { pictureWhisperLinks, playTMLinks, quizzicleLinks, readiumLinks, workflowAutomationLinks } from '@/components/ui/project-logostack';

import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const Projects = () => {
    const data = [
        {
            title: "2025",
            content: (
                <div className="space-y-2">
                    <div>
                        <p className="text-2xl sm:text-[2.5rem] bg-gradient-to-b from-blue-500 to-neutral-500 bg-clip-text font-bold lg:text-[3rem] md:text-2xl sm:text-xl">
                            PictureWhisperAI
                        </p>
                    </div>

                    <div>
                        <p className="relative font-extralight z-30 text-neutral-700 dark:text-neutral-300 text-xl md:text-2xl max-w-6xl">
                            This project appears to be an AI-powered image analysis application called `&quot;`PictureWhisper`&quot;` built with Next.js. It allows users to upload images and receive detailed AI-generated descriptions of their content. The application implements rate limiting for API calls and uses OpenAI`&apos;`s API for image analysis.
                        </p>
                    </div>

                    <AnimatedTooltip items={pictureWhisperLinks} />
                    <div className="flex gap-4 pt-4 relative z-30">
                        <button className="px-4 py-2 text-xl font-bold rounded-2xl text-[#457FDE] bg-white transform hover:cursor-pointer hover:scale-105 hover:bg-slate-200 transition-all duration-300">
                            <Link href="https://playTM.vercel.app" target="_blank">
                                Live
                            </Link>
                        </button>
                        <button className="px-4 py-2 text-xl font-bold rounded-2xl bg-[#457FDE] text-white transform hover:cursor-pointer hover:scale-105 hover:bg-[#457FDE] transition-all duration-300">
                            <Link href="https://github.com/yourusername/playTM" target="_blank">
                                Github
                            </Link>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4   pt-4">
                        <Image
                            src={PictureWhisperAI3}
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />

                        <Image
                            src={PictureWhisperAI1}
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
            title: "Early 2025",
            content: (
                <div className="space-y-2">
                    <div>
                        <p className="text-2xl sm:text-[2.5rem] bg-gradient-to-b from-blue-500 to-neutral-500 bg-clip-text font-bold lg:text-[2.5rem] md:text-2xl sm:text-xl">
                            Workflow Automation Suite
                        </p>
                    </div>

                    <div>
                        <p className="relative font-extralight z-30 text-neutral-700 dark:text-neutral-300 text-xl md:text-lg sm:text-base max-w-6xl">
                            A robust enterprise-grade automation system built with Next.js and Node.js, leveraging Apache Kafka for event streaming
                            and message queues. Features include webhook integrations, Prisma ORM with PostgreSQL for data persistence,
                            and JWT authentication for secure API access. The system handles high-throughput data processing with
                            real-time event handling and automated workflow orchestration.
                        </p>
                    </div>

                    <AnimatedTooltip items={workflowAutomationLinks} />

                    <div className="flex gap-4 pt-4 relative z-30">
                        <button className="px-4 py-2 text-xl font-bold rounded-2xl text-[#457FDE] bg-white transform hover:cursor-pointer hover:scale-105 hover:bg-slate-200 transition-all duration-300">
                            <Link href="https://zapier-automation.vercel.app"
                                target="_blank">
                                Live
                            </Link>
                        </button>
                        <button className="px-4 py-2 text-xl font-bold rounded-2xl bg-[#457FDE] text-white transform hover:cursor-pointer hover:scale-105 hover:bg-[#457FDE] transition-all duration-300">
                            <Link
                                href="https://github.com/yourusername/zapier-automation"
                                target="_blank"
                            >
                                Github
                            </Link>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4   pt-4">
                        <Image
                            src={zapier1}
                            alt="Zapier automation workflow"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={zapier2}
                            alt="Zapier integration dashboard"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: " 2024",
            content: (
                <div className="space-y-2">
                    <div>
                        <p className="text-2xl sm:text-[2.5rem] bg-gradient-to-b from-blue-500 to-neutral-500 bg-clip-text font-bold lg:text-[2.5rem] md:text-2xl sm:text-xl">
                            Readium
                        </p>
                    </div>

                    <div>
                        <p className="relative font-extralight z-30 text-neutral-700 dark:text-neutral-300 text-xl md:text-lg sm:text-base max-w-6xl">
                            A light replica of how Medium works, like posting your blogs, you have a favourite blog want to mark it as favourite we got you,
                            you will have your profile where you can see your posts with the faourite ones that you marked,
                            Apart from these feature we have also integrated sharing feature here you can share blogs on any socials that you like.
                        </p>
                    </div>

                    <AnimatedTooltip items={readiumLinks} />

                    <div className="flex gap-4 pt-4 relative z-30">
                        <button className="px-4 py-2 text-xl font-bold rounded-2xl text-[#457FDE] bg-white transform hover:cursor-pointer hover:scale-105 hover:bg-slate-200 transition-all duration-300">
                            <Link href="https://playTM.vercel.app"
                                target="_blank">
                                Live
                            </Link>
                        </button>
                        <button className="px-4 py-2 text-xl font-bold rounded-2xl bg-[#457FDE] text-white transform hover:cursor-pointer hover:scale-105 hover:bg-[#457FDE] transition-all duration-300">
                            <Link
                                href="https://github.com/yourusername/playTM"
                                target="_blank"
                            >
                                Github
                            </Link>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4   pt-4">
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
                    </div>
                </div>
            ),
        },
        {
            title: "Mid 2024",
            content: (
                <div className="space-y-2">
                    <div>
                        <p className="text-2xl sm:text-[2.5rem] bg-gradient-to-b from-blue-500 to-neutral-500 bg-clip-text font-bold lg:text-[2.5rem] md:text-2xl sm:text-xl">
                            PlayTM
                        </p>
                    </div>

                    <div>
                        <p className="relative font-extralight z-30 text-neutral-700 dark:text-neutral-300 text-xl md:text-lg sm:text-base max-w-6xl">
                            A light replica of how payTm works, like adding money to your wallet, sending money to a friend,
                            adding benefieciaries, requesting a friend for money.
                            Not only that you can aslo check your balance and history of your wallet.
                        </p>
                    </div>

                    <AnimatedTooltip items={playTMLinks} />

                    <div className="flex gap-4 pt-4 relative z-30">
                        <button className="px-4 py-2 text-xl font-bold rounded-2xl text-[#457FDE] bg-white transform hover:cursor-pointer hover:scale-105 hover:bg-slate-200 transition-all duration-300">
                            <Link href="https://playTM.vercel.app" target="_blank">
                                Live
                            </Link>
                        </button>
                        <button className="px-4 py-2 text-xl font-bold rounded-2xl bg-[#457FDE] text-white transform hover:cursor-pointer hover:scale-105 hover:bg-[#457FDE] transition-all duration-300">
                            <Link href="https://github.com/yourusername/playTM" target="_blank">
                                Github
                            </Link>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4   pt-4">
                        <Image
                            src={playTMOne}
                            alt="PlayTM dashboard"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={playTMTwo}
                            alt="PlayTM transactions"
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
                        <p className="text-2xl sm:text-[2.5rem] bg-gradient-to-b from-blue-500 to-neutral-500 bg-clip-text font-bold lg:text-[2.5rem] md:text-2xl sm:text-xl">
                            Quizzicle
                        </p>
                    </div>

                    <div>
                        <p className="relative font-extralight z-30 text-neutral-700 dark:text-neutral-300 text-xl md:text-lg sm:text-base max-w-6xl">
                            A quiz platform where you can create your own quiz and test your knowledge on a variety of topics.
                        </p>
                    </div>

                    <AnimatedTooltip items={quizzicleLinks} />

                    <div className="flex gap-4 pt-4 relative z-30">
                        <button className="px-4 py-2 text-xl font-bold rounded-2xl text-[#457FDE] bg-white transform hover:cursor-pointer hover:scale-105 hover:bg-slate-200 transition-all duration-300">
                            <Link href="https://playTM.vercel.app"
                                target="_blank">
                                Live
                            </Link>
                        </button>
                        <button className="px-4 py-2 text-xl font-bold rounded-2xl bg-[#457FDE] text-white transform hover:cursor-pointer hover:scale-105 hover:bg-[#457FDE] transition-all duration-300">
                            <Link
                                href="https://github.com/yourusername/playTM"
                                target="_blank"
                            >
                                Github
                            </Link>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4   pt-4">
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
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full flex justify-center">
            <div className="w-[80%]" data-aos="fade-up">
                <Timeline data={data} />
            </div>
        </div>

    );
};

export default Projects;