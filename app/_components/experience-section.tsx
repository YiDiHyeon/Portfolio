"use client";

import SectionHeading from "@/app/_components/section-heading";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import type { PortfolioExperienceItem } from "@/types/portfolio";

interface ExperienceSectionProps {
    experiences: PortfolioExperienceItem[];
}

interface ExperienceItemProps {
    experience: PortfolioExperienceItem;
    isLast: boolean;
}

function ExperienceItem({ experience, isLast }: ExperienceItemProps) {
    const trackRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: trackRef,
        offset: ["start center", "end center"],
    });

    const [start, end] = experience.period.split(" ~ ");

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15 }
                }
            }}
            className="grid lg:grid-cols-[1fr_3fr] gap-12 lg:gap-16 border-b border-white/5 pb-24 md:pb-32 last:border-0 last:pb-0"
        >
            <div className={`flex flex-col self-start md:gap-2 lg:gap-6 ${isLast ? "" : "lg:sticky lg:top-32 lg:h-fit"}`}>
                <motion.div 
                    variants={{
                        hidden: { opacity: 0, y: 24 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                    }}
                    className="space-y-4"
                >
                    <p className="text-label-xs font-bold uppercase tracking-label-tight text-orange-strong">
                        Professional Path
                    </p>
                    <p className="text-xl lg:text-2xl font-bold tracking-tight text-text-primary leading-snug">
                        {start} <span className="text-orange-strong/50 mx-1">—</span>
                        <br className="hidden md:block" />
                        {end || ""}
                    </p>
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 24 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                    }}
                >
                    <h3 className="text-2xl font-extrabold text-text-primary">
                        {experience.company}
                        <span className="hidden md:block text-xs opacity-20 font-bold uppercase tracking-widest text-text-tertiary">
                            {experience.companyEn}
                        </span>
                    </h3>
                    <p className="hidden md:block text-xl font-bold text-text-tertiary mt-2">
                        {experience.team}
                    </p>
                    <p className=" mt-1 text-base text-text-secondary">
                        {experience.role}
                    </p>
                </motion.div>
            </div>

            <div className="space-y-20 pt-4 lg:pt-0">
                <div ref={trackRef} className="relative space-y-24 pb-6 pl-6 lg:pl-8">
                    <div className="absolute left-0 top-2 -bottom-2 w-px bg-border/50" />

                    <motion.div
                        style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
                        className="absolute left-0 top-2 -bottom-2 w-px bg-orange-strong"
                    />

                    {experience.projects.map((project, projectIndex) => (
                        <motion.div
                            key={`${experience.company}-${project.name}-${projectIndex}`}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                            }}
                            className="relative z-20"
                        >
                            {projectIndex === experience.projects.length - 1 && (
                                <div className="absolute top-2 -bottom-6 -left-6 w-px bg-border/50 lg:-left-8" />
                            )}

                            <div className="absolute top-2 h-2 w-2 rounded-full bg-bg z-30 flex items-center justify-center left-[calc(-1.5rem-3.5px)] lg:left-[calc(-2rem-3.5px)]">
                                <motion.div 
                                    initial={{ backgroundColor: "var(--color-border)", scale: 1 }}
                                    whileInView={{ backgroundColor: "var(--color-orange-strong)", scale: 1.3 }}
                                    viewport={{ once: false, margin: "0px 0px -50% 0px" }}
                                    transition={{ duration: 0.15 }}
                                    className="w-full h-full rounded-full" 
                                />
                            </div>

                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <p className="text-label-xs font-bold uppercase tracking-label-tight text-orange-strong">
                                        {String(projectIndex + 1).padStart(2, "0")}
                                    </p>

                                    <h4 className="text-2xl md:text-2xl lg:text-3xl font-black tracking-tighter text-text-primary leading-[1.15] break-keep">
                                        {project.name}
                                    </h4>
                                </div>

                                {project.keyPoints.length > 0 && (
                                <div className="font-mono text-xs font-bold uppercase tracking-widest text-text-secondary break-words md:text-label-md">
                                        {project.keyPoints.map((tag, tagIndex) => (
                                            <span key={tag}>
                                                {tag}
                                                {tagIndex < project.keyPoints.length - 1 && (
                                                    <span className="text-orange-strong font-black mx-2 md:mx-3 text-[1.2em] align-middle">
                                                        ·
                                                    </span>
                                                )}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <ul className="space-y-3 pt-4">
                                    {project.points.map((point, pointIndex) => (
                                        <li
                                            key={`${project.name}-${pointIndex}`}
                                            className="text-sm md:text-base leading-relaxed text-text-secondary flex items-start gap-3 break-keep font-medium"
                                        >
                                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange-strong/60" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
    return (
        <section className="relative z-20 overflow-x-clip border-t border-white/5 shadow-section dark:border-white/10">
            <div className="absolute inset-0 bg-bg/92 sm:bg-bg/82 -z-20" />
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-transparent to-bg -z-10" />
            <div className="absolute inset-x-0 top-40 bottom-0 bg-bg -z-10" />

            <div className="absolute top-0 left-1/2 h-px w-3/4 max-w-xl -translate-x-1/2 bg-gradient-to-r from-transparent via-orange-strong/60 to-transparent" />

            <div className="mx-auto max-w-7xl px-6 pt-20 pb-32 md:pb-40 lg:px-10 lg:pt-32 lg:pb-[25vh] relative z-10">
                <SectionHeading
                    eyebrow="Professional Journey"
                    title="Experience."
                    className="mb-12 space-y-3 md:mb-14 md:space-y-4 lg:mb-16"
                />

                <div className="space-y-32 mt-16 md:mt-24">
                    {experiences.map((experience, experienceIndex) => (
                        <ExperienceItem
                            key={`${experience.company}-${experienceIndex}`}
                            experience={experience}
                            isLast={experienceIndex === experiences.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
