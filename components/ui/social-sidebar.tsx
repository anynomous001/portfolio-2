'use client'

import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import { HiMail } from "react-icons/hi"
import {

    IconFile3d,
} from "@tabler/icons-react";

interface SocialSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const socialLinks = [
    {
        name: 'Resume',
        icon: <IconFile3d className="w-6 h-6" />,
        href: '/resume.pdf'
    },
    {
        name: 'GitHub',
        icon: <FaGithub className="w-6 h-6" />,
        href: 'https://github.com/anynomous001'
    },
    {
        name: 'LinkedIn',
        icon: <FaLinkedin className="w-6 h-6" />,
        href: 'https://www.linkedin.com/in/pritamchakroborty/'
    },
    {
        name: 'Twitter',
        icon: <FaXTwitter className="w-6 h-6" />,
        href: 'https://x.com/Pritamchak001?t=SRRGAHleTY8DEpAuJOhdqQ'
    },
    {
        name: 'Email',
        icon: <HiMail className="w-6 h-6" />,
        href: 'mailto:Chakrobortypritam1@gmail.com'
    }
]

const SocialSidebar = ({ isOpen, onClose }: SocialSidebarProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", damping: 20 }}
                        className="fixed right-0 top-0 h-full w-[300px] bg-white/10 backdrop-blur-md border-l border-neutral-200/10 p-6 shadow-xl z-50"
                    >
                        <div className="flex flex-col gap-8">
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl font-bold text-white">Connect With Me</h2>
                                <button
                                    onClick={onClose}
                                    className="text-white hover:text-neutral-300 hover:cursor-pointer transition-colors"
                                >
                                    ✕
                                </button>
                            </div>

                            <div className="flex flex-col gap-4">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-white hover:text-neutral-300 transition-colors p-3 rounded-lg hover:bg-white/5"
                                    >
                                        {link.icon}
                                        <span className="text-lg">{link.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default SocialSidebar