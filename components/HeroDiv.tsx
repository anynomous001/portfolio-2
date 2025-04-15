import React from 'react'
import Link from 'next/link';
import { FaLinkedinIn, FaSquareXTwitter } from 'react-icons/fa6';
import { BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { Spotlight } from "@/components/ui/spotlight"
// import resume from '../public/resume.pdf'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: ['400', '700', '900'],
    subsets: ['latin'],
})

const HeroDiv = () => {
    return (
        <>
            <Spotlight
                className="-top-40 left-40 -md:top-120 md:left-90"
                fill="white"
            />
            <div className=''>
                <div className='w-full items-center  min-h-screen flex flex-col pt-44  '>
                    <p className={`${roboto.className} sm:text-[10rem] shadow-sm text-center leading-44 text-[30rem]  relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text  font-bold text-transparent `}>
                        {/* <p className={`${roboto.className} text-center leading-44 text-[30rem]  sm:text-[10rem] bg-gradient-to-b from-slate-500 to-neutral-500 bg-clip-text font-bold z-20 relative text-transparent`}> */}
                        <span className='block  '>Pritam</span>
                        <span className='block'>Chakroborty </span>
                    </p>
                    <p className=" text-2xl bg-white p-2 text-center sm:text-6xl relative z-20 text-black sm:mt-8 w-[75%]  font-bold ">
                        A software engineer,I build things for the web

                    </p>
                    <p className=" text-2xl sm:text-7xl relative z-20    text-transparent ">
                    </p>
                    {/* <div className='flex space-x-4'>
                    <Link href='https://x.com/Pritamchak001'><FaSquareXTwitter className='w-12 h-12 text-neutral-500 sm:w-16 sm:h-16 ' /></Link>
                    <Link href='https://github.com/anynomous001 '><BsGithub className='w-12 h-12 text-neutral-500 sm:w-16 sm:h-16 ' /></Link>
                    <a className='w-12 h-12 text-neutral-500 sm:w-16 sm:h-16 ' target="_blank" rel="noopener noreferrer">Resume</a>
                    <Link href='https://www.linkedin.com/in/pritamchakroborty/'><FaLinkedinIn className='w-12 h-12 text-neutral-500 sm:w-16 sm:h-16 ' /></Link>
                    <Link href='https://mail.google.com/mail/mu/mp/354/#pr'><MdEmail className='w-12 h-12 text-neutral-500 sm:w-16 sm:h-16 ' /></Link>
                </div> */}

                    <div className="mt-6 pt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-4">
                        <a className="bg-slate-900 dark:bg-white dark:text-black no-underline flex space-x-2 group cursor-pointer relative hover:shadow-2xl transition duration-200 shadow-zinc-900 p-px font-semibold text-white px-4 py-2 h-14 w-full items-center justify-center rounded-2xl text-center text-sm sm:w-52" target="_blank" href="https://pro.aceternity.com">
                            Resume
                        </a>
                        <a className="bg-slate-900 dark:bg-slate-100/15  hover:bg-slate-100/30 dark:text-white no-underline flex space-x-2 group cursor-pointer relative hover:shadow-2xl transition duration-200 shadow-zinc-900 p-px font-semibold text-white px-4 py-2 h-14 w-full items-center justify-center rounded-2xl text-center text-sm sm:w-52" target="_blank" href="https://pro.aceternity.com">
                            Socials
                        </a>

                    </div>
                </div>


            </div>



        </>
    )
}

export default HeroDiv