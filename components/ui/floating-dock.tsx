'use client'

/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "@/lib/utils";
// import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
    AnimatePresence,
    MotionValue,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";

export const FloatingDockDesktop = ({
    items,
    className,
}: {
    items: { title: string; icon: React.ReactNode; href: string }[];
    className?: string;
}) => {
    const mouseY = useMotionValue(Infinity);

    return (
        <motion.div
            onMouseMove={(e) => mouseY.set(e.clientY)}
            onMouseLeave={() => mouseY.set(Infinity)}
            className={cn(
                "fixed left-8 top-0 h-screen hidden md:flex flex-col items-center justify-center  ",
                "bg-gray-50 dark:bg-transparent py-4 px-3 ",
                className
            )}
            style={{
                width: "88px", // Match expanded icon size + padding
                marginLeft: "-24px" // Compensate for icon expansion
            }}
        >
            <div className="space-y-4">
                {items.map((item) => (
                    <VerticalIconContainer mouseY={mouseY} key={item.title} {...item} />
                ))}
            </div>
        </motion.div>
    );
};


function VerticalIconContainer({
    mouseY,
    title,
    icon,
    href,
}: {
    mouseY: MotionValue;
    title: string;
    icon: React.ReactNode;
    href: string;
}) {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseY, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
        return val - bounds.y - bounds.height / 2;
    });

    const sizeTransform = useTransform(distance, [-150, 0, 150], [60, 100, 60]);
    const iconSizeTransform = useTransform(distance, [-150, 0, 150], [28, 48, 28]);

    const size = useSpring(sizeTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    const iconSize = useSpring(iconSizeTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    const [hovered, setHovered] = useState(false);

    return (
        <Link href={href}>
            <motion.div
                ref={ref}
                style={{ width: size, height: size }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center my-2 relative"
            >
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 2 }}
                            className="absolute left-full ml-2 px-2 py-1 whitespace-nowrap rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 text-sm"
                        >
                            {title}
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.div
                    style={{ width: iconSize, height: iconSize }}
                    className="flex items-center justify-center"
                >
                    {icon}
                </motion.div>
            </motion.div>
        </Link>
    );
}
