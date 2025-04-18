import { IconBrandGmail, IconFile3d } from "@tabler/icons-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";



const Footer = () => {

    return (

        <footer className="flex justify-center items-center w-full text-slate-200 h-[300px] py-8 px-4 md:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto">
                <div className="relative z-20 flex flex-col items-center gap-6 text-xl font-extralight">
                    {/* Contact Information */}
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">

                        <div className="flex justify-center">
                            Connect with me
                        </div>

                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-6">
                        <a href="https://github.com/anynomous001" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            <FaGithub className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/pritamchakroborty/" className="hover:text-white transition-colors">
                            <FaLinkedin className="w-6 h-6" />
                        </a>
                        <a href="https://x.com/Pritamchak001?t=SRRGAHleTY8DEpAuJOhdqQ" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            <FaXTwitter className="w-6 h-6" />
                        </a>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            <IconFile3d className="w-6 h-6" />
                        </a>
                        <a href="mailto:chakrobortypritam1@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            <IconBrandGmail className="w-6 h-6" />
                        </a>
                    </div>



                    {/* Tagline */}
                    <div className="text-center mt-4">
                        <p className="text-gray-400 italic">
                            &quot;Building the future, one product at a time.&quot;
                        </p>
                        <div className="w-12 h-0.5 bg-gray-600 mx-auto mt-2"></div>
                        {/* <p className="text-sm text-gray-500 dark:text-gray-400">
                            Built with &quot;made with love&quot; by &quot;Pritam&quot;
                        </p> */}
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;