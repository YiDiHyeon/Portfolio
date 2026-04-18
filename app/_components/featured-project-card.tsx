"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getProjectTechItems } from "@/lib/project-tech";
import type { PortfolioProjectContent } from "@/types/portfolio";
import ProjectCardCta from "@/app/_components/project-card-cta";

interface FeaturedProjectCardProps {
    project: PortfolioProjectContent;
    thumbnailSrc: string;
    priority?: boolean;
}

export default function FeaturedProjectCard({
    project,
    thumbnailSrc,
    priority = false,
}: FeaturedProjectCardProps) {
    const shouldReduceMotion = useReducedMotion();
    const previewTech = getProjectTechItems(project.tech).slice(0, 3);
    const cardTransition = shouldReduceMotion
        ? { duration: 0 }
        : { type: "spring" as const, stiffness: 260, damping: 24, mass: 0.75 };

    return (
        <Link
            href={`/${project.slug}`}
            scroll={false}
            className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-strong focus-visible:ring-offset-4 focus-visible:ring-offset-bg"
        >
            <motion.article
                initial="rest"
                whileHover={shouldReduceMotion ? undefined : "hover"}
                whileFocus={shouldReduceMotion ? undefined : "hover"}
                animate="rest"
                variants={{
                    rest: {
                        y: 0,
                        scale: 1,
                        boxShadow: "0 18px 36px rgba(15, 23, 32, 0.06)",
                    },
                    hover: {
                        y: 0,
                        scale: 1,
                        boxShadow: "0 24px 48px rgba(15, 23, 32, 0.1)",
                    },
                }}
                transition={cardTransition}
                className="relative isolate bg-card-bg transition-colors duration-300 md:overflow-hidden md:h-96 lg:h-[28rem] xl:h-[30rem]"
            >
                <div className="relative h-40 overflow-hidden sm:h-48 md:absolute md:inset-x-0 md:top-0 md:h-64 lg:h-72 xl:h-80">
                    <motion.div
                        variants={{
                            rest: { scale: 1, filter: "brightness(1)" },
                            hover: { scale: 1.04, filter: "brightness(0.9)" },
                        }}
                        transition={cardTransition}
                        className="absolute inset-0"
                    >
                        <Image
                            src={thumbnailSrc}
                            alt={`${project.title} 썸네일`}
                            fill
                            sizes="(max-width: 1023px) 100vw, 72vw"
                            priority={priority}
                            className="object-cover"
                        />
                    </motion.div>

                    <motion.div
                        variants={{
                            rest: { opacity: 0.12 },
                            hover: { opacity: 0.28 },
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute inset-0 bg-black"
                    />
                </div>

                <motion.div
                    variants={{
                        rest: { y: 0 },
                        hover: { y: 0 },
                    }}
                    transition={cardTransition}
                    className="relative z-10 -mt-5 flex min-h-36 flex-col bg-card-bg px-5 py-5 sm:-mt-6 sm:min-h-40 sm:px-7 sm:py-6 md:absolute md:inset-x-0 md:bottom-0 md:mt-0 md:border-t md:border-border/60 md:bg-surface md:px-7 md:py-7 lg:px-8 lg:py-8 dark:bg-[#0d1219]"
                >
                    <div className="space-y-3">
                        <div className="relative inline-block">
                            <motion.span
                                variants={{
                                    rest: { scaleX: 0.18 },
                                    hover: { scaleX: 1 },
                                }}
                                transition={cardTransition}
                                className="project-card-title-highlight absolute inset-x-0 origin-left bg-orange-soft/70"
                            />
                            <h3 className="relative text-balance text-4xl font-extrabold leading-none tracking-tight text-text-primary lg:text-[2.75rem]">
                                {project.title}
                            </h3>
                        </div>

                        <p className="max-w-xl break-keep text-sm leading-relaxed text-text-secondary line-clamp-2 sm:text-base min-h-[2.875rem] sm:min-h-[3.25rem]">
                            {project.explanation}
                        </p>

                        <p className="truncate font-mono text-label-xs font-bold uppercase tracking-label-tight text-text-secondary/78 sm:text-label-sm">
                            {previewTech.join(" · ")}
                        </p>
                    </div>

                    <motion.div
                        variants={{
                            rest: { height: 0, opacity: 0, y: 12, marginTop: 0 },
                            hover: { height: 32, opacity: 1, y: 0, marginTop: 20 },
                        }}
                        transition={cardTransition}
                        className="mt-6 hidden overflow-hidden md:block"
                    >
                        <span className="inline-flex items-center gap-3 text-sm font-semibold text-text-primary/74 transition-colors group-hover:text-orange-strong">
                            <span>View Project</span>
                            <motion.span
                                aria-hidden="true"
                                variants={{
                                    rest: { x: 0 },
                                    hover: { x: 4 },
                                }}
                                transition={cardTransition}
                            >
                                →
                            </motion.span>
                        </span>
                    </motion.div>

                    <div className="mt-6 md:hidden">
                        <ProjectCardCta />
                    </div>
                </motion.div>
            </motion.article>
        </Link>
    );
}
