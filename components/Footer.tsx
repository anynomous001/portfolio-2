import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiDocument, HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";

const Footer = () => {
    return (
        <footer className="w-full  text-white/80 py-8 px-4 md:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center gap-6 text-sm">
                    {/* Contact Information */}
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        {/* Address */}
                        <div className="flex items-center gap-2">
                            <HiLocationMarker className="w-4 h-4" />
                            <span>Ichapur, Kolkata - 743144, West Bengal</span>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-2">
                            <HiPhone className="w-4 h-4" />
                            <span>9874353532</span>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-2">
                            <HiMail className="w-4 h-4" />
                            <span>Chakrobortypritam12@gmail.com</span>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-6">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            <FaGithub className="w-6 h-6" />
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            <FaLinkedin className="w-6 h-6" />
                        </a>
                        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            <FaXTwitter className="w-6 h-6" />
                        </a>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            <HiDocument className="w-6 h-6" />
                        </a>
                    </div>

                    {/* Tagline */}
                    <div className="text-center mt-4">
                        <p className="text-gray-400 italic">
                            "Building the future, one line of code at a time."
                        </p>
                        <div className="w-12 h-0.5 bg-gray-600 mx-auto mt-2"></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 