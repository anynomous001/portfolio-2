import Image from 'next/image'
import profile from "../public/profile.jpg"
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: ["100", '200', '400', '700', '900'],
    subsets: ['latin'],
})

const About = () => {
    return (
        <section className="min-h-screen w-full z-30   py-20 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col gap-4">

                    <div className="space-y-2">
                        <p className="relative z-30  bg-gradient-to-b from-blue-500 to-neutral-500 bg-clip-text text-transparent text-5xl md:text-7xl lg:text-8xl font-bold">
                            Nice to meet you !
                        </p>
                    </div>

                    {/* Main content */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 space-x-16 items-center">
                        <div className="relative flex justify-center items-center ">
                            <Image
                                src={profile}
                                alt="Pritam Chakroborty"
                                className="w-[80%] h-[80%]  bg-none rounded-full shadow-2xl shadow-neutral-500 dark:shadow-neutral-900/50"
                                width={176}
                                height={176}
                                priority
                            />
                        </div>

                        {/* Description */}
                        <div className={`${roboto.className} relative font-extralight z-30 pt-7  text-neutral-700 dark:text-neutral-300 text-2xl md:text-3xl max-w-6xl`}>
                            <p>
                                I&apos;m a FullStack Developer from Kolkata (India). I completed Frontend Career Path
                                from Scrimba in 2022 and then started my Fullstack career from 100xdevs. Recently
                                I completed AI Engineer Path from scrimba and building projects on it.
                            </p>
                            <br />
                            <p>
                                In this fast paced era of technology my go to method for keeping my toe ahead is building
                                projects. I&apos;m currently enhancing my knowledge on Generative AI, I really found it fascinating
                                and on my way to explore more about vector database, embeddings and lot more.

                            </p>
                            <br />
                            <p>
                                I&apos;m inspired by people who seek creativity in technology and keen to learn
                                something new. If that sounds like you, let&apos;s get connect and have some chat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;