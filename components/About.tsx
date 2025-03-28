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
                        <div className="relative ">
                            <img
                                src={profile.src}
                                alt="Pritam Chakroborty"
                                className="w-full h-full  bg-none rounded-full shadow-lg shadow-neutral-500/50 dark:shadow-neutral-900/50"
                            />
                        </div>

                        {/* Description */}
                        <div className={`${roboto.className}relative font-extralight z-30 pt-7 text-neutral-700 dark:text-neutral-300 text-2xl md:text-3xl max-w-6xl`}>
                            <p>
                                I'm a FullStack Developer from Kolkata (India). I completed Frontend Carrer Path
                                from Scrimba in 2022 and then persued my Fullstack career from 100xdevs.
                            </p>
                            <p>
                                I learned my craft by building various projects, Scrimba's Wholesome community
                                helped me to evolve as a Developer. In my free time, I surf through internet to learn
                                more about technology. I'm currently enhancing my knowledge on realtime
                                communication (Including : voice, video and data Sharing), apart from these I like to
                                gather knowledge on businesses and politics all over the world.
                            </p>
                            <p>
                                I'm inspired by people who seek creativity in technology and keen to learn
                                something new. If that sounds like you, let's get connect and have some chat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 