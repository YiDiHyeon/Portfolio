"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
    eyebrow: string;
    title: string;
    className?: string;
}

export default function SectionHeading({
    eyebrow,
    title,
    className = "",
}: SectionHeadingProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.55 }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.08,
                    },
                },
            }}
            className={`${className} !space-y-0 md:!space-y-4`}
        >
            <div className="hidden overflow-hidden md:block">
                <motion.p
                    variants={{
                        hidden: { y: "110%" },
                        visible: {
                            y: 0,
                            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                        },
                    }}
                    className="section-kicker"
                >
                    {eyebrow}
                </motion.p>
            </div>
            <div className="overflow-hidden">
                <motion.h2
                    variants={{
                        hidden: { y: "110%" },
                        visible: {
                            y: 0,
                            transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
                        },
                    }}
                    className="section-display-title"
                >
                    {title}
                </motion.h2>
            </div>
        </motion.div>
    );
}
