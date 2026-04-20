"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { getProjectTechItems } from "@/lib/project-tech";
import type { PortfolioProjectContent } from "@/types/portfolio";
import ProjectCardCta from "@/app/_components/project-card-cta";

interface StandardProjectCardProps {
    project: PortfolioProjectContent;
}

export default function StandardProjectCard({ project }: StandardProjectCardProps) {
    const shouldReduceMotion = useReducedMotion();
    const previewTech = getProjectTechItems(project.tech).slice(0, 3);
    const cardTransition = shouldReduceMotion
        ? { duration: 0 }
        : { type: "spring" as const, stiffness: 320, damping: 28, mass: 0.7 };

    return (
        <Link
            href={`/${project.slug}`}
            className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-strong focus-visible:ring-offset-4 focus-visible:ring-offset-bg"
        >
            <motion.article
                initial="rest"
                whileHover={shouldReduceMotion ? undefined : "hover"}
                whileFocus={shouldReduceMotion ? undefined : "hover"}
                animate="rest"
                variants={{
                    rest: { y: 0, scale: 1 },
                    hover: { y: 0, scale: 1 },
                }}
                transition={cardTransition}
                className="flex h-full min-h-48 flex-col bg-card-bg transition-colors duration-300 sm:min-h-52 lg:min-h-56 "
                style={{
                    boxShadow: "0 12px 32px rgba(15, 23, 32, 0.05)",
                }}
            >
                <motion.div
                    variants={{
                        rest: { y: 0 },
                        hover: { y: 0 },
                    }}
                    transition={cardTransition}
                    className="relative z-10 flex h-full flex-col bg-card-bg px-5 py-5 sm:px-7 sm:py-6 lg:px-8 lg:py-7 dark:bg-[#0d1219]"
                >
                    <div className="flex-1 space-y-3">
                        <div className="relative inline-block">
                            <motion.span
                                aria-hidden="true"
                                variants={{
                                    rest: { scaleX: 0.18 },
                                    hover: { scaleX: 1 },
                                }}
                                transition={cardTransition}
                                className="project-card-title-highlight absolute inset-x-0 origin-left bg-orange-soft/70"
                            />
                            <h3 className="relative text-[2.25rem] font-extrabold leading-none tracking-tight text-text-primary sm:text-4xl lg:text-[2rem]">
                                {project.title}
                            </h3>
                        </div>

                        <p className="max-w-xl break-keep text-sm leading-relaxed text-text-secondary sm:text-base">
                            {project.explanation}
                        </p>

                        <p className="font-mono text-label-xs font-bold uppercase tracking-label-tight text-text-secondary/78 sm:text-label-sm">
                            {previewTech.join(" · ")}
                        </p>
                    </div>

                    <motion.div
                        variants={{
                            rest: { opacity: 0, y: 12 },
                            hover: { opacity: 1, y: 0 },
                        }}
                        transition={cardTransition}
                        className="mt-6 hidden overflow-hidden md:block"
                    >
                        <ProjectCardCta />
                    </motion.div>

                    <div className="mt-6 md:hidden">
                        <ProjectCardCta />
                    </div>
                </motion.div>
            </motion.article>
        </Link>
    );
}
