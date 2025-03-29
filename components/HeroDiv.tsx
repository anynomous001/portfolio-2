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
                className="-top-40 left-40 md:top-60 md:left-80"
                fill="white"
            />
            <div className='pl-50'>
                <div className='w-full  min-h-screen flex flex-col pt-44  '>
                    <p className={`${roboto.className} sm:text-[10rem] shadow-sm leading-44 text-[30rem]  relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text  font-bold text-transparent `}>
                        <span className='block  '>Pritam</span>
                        <span className='block'>Chakroborty ,</span>
                    </p>
                    <p className=" text-2xl bg-white p-2  sm:text-6xl relative z-20 text-black sm:mt-8 w-[75%]  font-bold ">
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
                </div>


            </div>



        </>
    )
}

export default HeroDiv