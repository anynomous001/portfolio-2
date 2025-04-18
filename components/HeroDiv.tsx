"use client"

import React from 'react'
import { Roboto } from 'next/font/google'
import { FloatingDockDesktop } from './ui/floating-dock';
import {
    IconBrandGithub,
    IconBrandGmail,
    IconBrandLinkedin,
    IconBrandX,
    IconFile3d,
} from "@tabler/icons-react";
// import { Spotlight } from './ui/spotlight';
import { Spotlight } from "./ui/spotlight-new";
import Link from 'next/link';
import SocialSidebar from './ui/social-sidebar';
import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
} from "@/components/magicui/terminal";


const roboto = Roboto({
    weight: ['400', '700', '900'],
    subsets: ['latin'],
})

const HeroDiv = () => {
    const links = [

        {
            title: "Resume",
            icon: (
                <IconFile3d className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/resume.pdf",
        },
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/in/pritamchakroborty/",
        },
        {
            title: "E-mail",
            icon: (
                <IconBrandGmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />

            ),
            href: "mailto:chakrobortypritam1@gmail.com",
        },


        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://x.com/Pritamchak001?t=SRRGAHleTY8DEpAuJOhdqQ",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/anynomous001",
        },
    ];

    const [isOpen, setIsOpen] = React.useState<boolean>(false)

    function onClose() {
        setIsOpen(false)
    }

    return (
        <div className="relative w-full min-h-screen">
            <SocialSidebar isOpen={isOpen} onClose={onClose} />
            <Spotlight />

            <div className="w-full px-4 md:px-8 lg:px-16">

                {/* Navigation - Floating dock for larger screens */}
                <div className="hidden lg:block pt-12 lg:pt-16">
                    <FloatingDockDesktop items={links} />
                </div>

                <div className='flex flex-col'>
                    <div className="flex justify-center min-h-[60%] pt-48 lg:pt-40 lg:gap-30">
                        <div className="text-center lg:text-left pl-0 lg:pl-20">
                            <h1 className={`${roboto.className} relative z-20 bg-gradient-to-b from-black to-gray-300/80 bg-clip-text font-bold  text-transparent dark:from-white dark:to-slate-900/10
                            text-5xl sm:text-7xl md:text-[80px] lg:text-[100px] leading-tight`}>
                                <span className="block mb-2">Pritam</span>
                                <span className="block">Chakroborty</span>
                            </h1>
                            <div className="mt-6 md:mt-8 lg:mt-10 w-full max-w-3xl">
                                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl  font-semibold bg-white/90 dark:bg-transparent p-3transparentrounded-lg shadow-lg relative z-20 text-black dark:text-white">
                                    A software engineer, I build things for the web
                                </p>
                            </div>
                        </div>



                        <Terminal className='hidden lg:block'>
                            <TypingAnimation className='dark:text-white'>&gt; pnpm dlx shadcn@latest init</TypingAnimation>

                            <AnimatedSpan delay={1500} className="text-green-500">
                                <span>✔ Preflight checks.</span>
                            </AnimatedSpan>

                            <AnimatedSpan delay={2000} className="text-green-500">
                                <span>✔ Verifying framework. Found Next.js.</span>
                            </AnimatedSpan>

                            <AnimatedSpan delay={2500} className="text-green-500">
                                <span>✔ Validating Tailwind CSS.</span>
                            </AnimatedSpan>

                            <AnimatedSpan delay={3000} className="text-green-500">
                                <span>✔ Validating import alias.</span>
                            </AnimatedSpan>

                            <AnimatedSpan delay={3500} className="text-green-500">
                                <span>✔ Writing components.json.</span>
                            </AnimatedSpan>

                            <AnimatedSpan delay={4000} className="text-green-500">
                                <span>✔ Checking registry.</span>
                            </AnimatedSpan>

                            <AnimatedSpan delay={4500} className="text-green-500">
                                <span>✔ Updating tailwind.config.ts</span>
                            </AnimatedSpan>

                            <AnimatedSpan delay={5000} className="text-green-500">
                                <span>✔ Updating app/globals.css</span>
                            </AnimatedSpan>

                            <AnimatedSpan delay={5500} className="text-green-500">
                                <span>✔ Installing dependencies.</span>
                            </AnimatedSpan>

                            <AnimatedSpan delay={6000} className="text-blue-500">
                                <span>ℹ Updated 1 file:</span>
                                <span className="pl-2">- lib/utils.ts</span>
                            </AnimatedSpan>

                            <TypingAnimation delay={6500} className=" dark:text-white">
                                Success! Project initialization completed.
                            </TypingAnimation>

                            <TypingAnimation delay={7000} className="dark:text-white ">
                                You may now add components.
                            </TypingAnimation>
                        </Terminal>


                    </div>
                    <div className="lg:hidden mt-8 flex flex-col items-center gap-4 w-full px-4 pt-20">
                        <Link
                            href="/resume.pdf"
                            target="_blank"
                            className="bg-slate-900 dark:bg-white dark:text-black no-underline flex space-x-2 group cursor-pointer relative hover:shadow-2xl transition duration-200 shadow-zinc-900 p-px font-semibold text-white px-4 py-2 h-14 w-full items-center justify-center rounded-2xl text-center text-sm"
                        >
                            Resume
                        </Link>
                        <button
                            onClick={() => setIsOpen(true)}
                            className="flex h-14 w-full items-center hover:cursor-pointer justify-center rounded-2xl border border-transparent bg-white text-sm text-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200 hover:shadow-lg dark:border-neutral-600 dark:bg-black dark:text-white"
                        >
                            Connect with me
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroDiv