"use client";
import React, { useState } from "react";
import {
    motion,
    useTransform,
    AnimatePresence,
    useMotionValue,
    useSpring,
} from "motion/react";

export const AnimatedTooltip = ({
    items,
}: {
    items: {
        id: number;
        name: string;
        icon: React.ReactNode;
    }[];
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const springConfig = { stiffness: 100, damping: 5 };
    const x = useMotionValue(0);
    const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
    const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

    const handleMouseMove = (event: React.MouseEvent) => {
        const halfWidth = event.currentTarget.clientWidth / 2;
        x.set(event.nativeEvent.offsetX - halfWidth);
    };

    return (
        <div className="flex items-center flex-wrap">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="relative mt-4 md:mt-10 mr-2 mb-6 group"
                    onMouseEnter={() => setHoveredIndex(item.id)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence mode="wait">
                        {hoveredIndex === item.id && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                                style={{ translateX, rotate }}
                                className="absolute -top-14 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center"
                            >
                                <div className="rounded-md bg-black px-4 py-2 text-xs shadow-xl border border-white/10">
                                    <div className="relative z-30 text-sm font-bold text-white">
                                        {item.name}
                                    </div>
                                    <div className="absolute -bottom-px left-1/2 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent -translate-x-1/2" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="relative h-8 w-8 p-1 md:p-0 md:h-14 md:w-14 rounded-full bg-gray-200 dark:bg-transparent flex items-center justify-center  border-2 border-white cursor-pointer"
                    >
                        <motion.div
                            className="h-full w-full flex items-center justify-center text-neutral-500 dark:text-neutral-300"
                            onMouseMove={handleMouseMove}
                            whileHover={{ scale: 1.2 }}
                        >
                            {item.icon}
                        </motion.div>
                    </motion.div>
                </div>
            ))}
        </div>
    );
};
