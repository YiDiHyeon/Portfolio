"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { PortfolioProjectContent } from "@/types/portfolio";

interface ProjectCardProps {
    project: PortfolioProjectContent;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const shouldReduceMotion = useReducedMotion();

    const transition = shouldReduceMotion
        ? { duration: 0 }
        : { type: "spring" as const, stiffness: 320, damping: 30, mass: 0.8 };

    return (
        <motion.article
            initial="rest"
            whileHover={shouldReduceMotion ? undefined : "hover"}
            whileFocus={shouldReduceMotion ? undefined : "hover"}
            whileTap={shouldReduceMotion ? undefined : "hover"}
            variants={{
                rest: { y: 0, scale: 1 },
                hover: { y: -4, scale: 1.01 },
            }}
            transition={transition}
            className="group relative min-h-64 overflow-hidden bg-card-bg shadow-sm transition-colors duration-300 hover:bg-surface"
        >
            <Link
                href={`/projects/${project.slug}`}
                className="absolute inset-0 z-20 outline-none"
                aria-label={`${project.title} 상세 보기`}
            />

            <div className="relative z-10 flex h-full flex-col justify-between p-7 md:p-8">
                <div className="space-y-4">
                    <motion.h3
                        variants={{
                            rest: { y: 0 },
                            hover: { y: -2 },
                        }}
                        transition={transition}
                        className="text-4xl font-extrabold leading-tight tracking-tight text-text-primary md:text-5xl"
                    >
                        {project.title}
                    </motion.h3>

                    <p className="max-w-2xl break-keep text-base leading-relaxed text-text-secondary md:text-lg">
                        {project.explanation}
                    </p>

                    <p className="text-sm font-semibold uppercase tracking-label-tight text-text-secondary/80">
                        {project.tech.slice(0, 4).join(" · ")}
                    </p>
                </div>

                <div className="mt-8 flex items-end justify-between gap-6">
                    <motion.p
                        variants={{
                            rest: { opacity: 0, y: 10 },
                            hover: { opacity: 1, y: 0 },
                        }}
                        transition={{ ...transition, delay: 0.03 }}
                        className="hidden max-w-xl break-keep text-sm leading-relaxed text-text-secondary md:block"
                    >
                        {project.hoverText}
                    </motion.p>

                    <motion.div
                        variants={{
                            rest: { x: 0 },
                            hover: { x: 4 },
                        }}
                        transition={transition}
                        className="ml-auto flex shrink-0 items-center gap-2 text-sm font-bold uppercase tracking-label-tight text-orange-strong"
                    >
                        <span>View Project</span>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </motion.div>
                </div>
            </div>

            <motion.div
                variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 },
                }}
                transition={{ duration: 0.35 }}
                className="pointer-events-none absolute -bottom-20 -right-20 z-0 h-60 w-60 bg-orange-soft/15 blur-3xl"
            />
        </motion.article>
    );
}
