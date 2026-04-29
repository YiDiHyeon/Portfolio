"use client";

import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/app/_components/section-heading";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import type { PortfolioExperienceItem } from "@/types/portfolio";

interface ExperienceSectionProps {
    experiences: PortfolioExperienceItem[];
}

const EXPERIENCE_PROJECT_CTA_CLASS_NAME =
    "group inline-flex items-center gap-1.5 rounded-full border border-black/10 px-3 py-1.5 text-xs font-semibold tracking-[0.01em] text-text-primary transition-colors hover:border-orange-strong hover:text-orange-strong dark:border-white/12";

interface ExperienceItemProps {
    experience: PortfolioExperienceItem;
}

function ExperienceItem({ experience }: ExperienceItemProps) {
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
            className="grid gap-10 border-b border-white/5 pb-14 md:pb-24 lg:grid-cols-[1fr_3fr] lg:gap-16 last:border-0 last:pb-0"
        >
            <div className={`flex flex-col self-start md:gap-2 lg:gap-4`}>
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
                    <p className="text-xl font-bold tracking-tight text-text-primary leading-snug">
                        {start} <span className="text-orange-strong/50 mx-1">—</span> {end || ""}
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
                    <p className="mt-5 max-w-sm text-sm leading-relaxed text-text-secondary/80 break-keep md:text-sm">
                        {experience.companyDescription}
                    </p>
                </motion.div>
            </div>

            <div className="space-y-14 pt-3 md:space-y-16 lg:pt-0">
                <div ref={trackRef} className="relative space-y-18 pb-4 pl-6 md:space-y-20 md:pb-6 lg:pl-8 lg:space-y-24">
                    <div className="absolute left-0 top-2 -bottom-2 w-px bg-border/50" />

                    <motion.div
                        style={{
                            scaleY: scrollYProgress,
                            transformOrigin: "top",
                            zIndex: 99,
                            bottom: "-100px",
                        }}
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

                                    <div className="flex flex-col items-start gap-3 md:flex-row md:items-end md:gap-4">
                                        <h4 className="text-2xl md:flex-1 md:text-2xl lg:text-3xl font-black tracking-tighter text-text-primary leading-[1.15] break-keep">
                                            {project.name}
                                        </h4>
                                    </div>
                                </div>

                                {project.keyPoints.length > 0 && (
                                <div className="font-mono text-xs font-bold uppercase tracking-widest text-text-secondary break-words md:text-label-md">
                                        {project.keyPoints.map((tag, tagIndex) => (
                                            <span key={tag}>
                                                {tag}
                                                {tagIndex < project.keyPoints.length - 1 && (
                                                    <span className="text-orange-strong font-black mx-2 md:mx-3 text-[1.2em] align-middle wrap-break-word">
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
                                {project.url && (
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={EXPERIENCE_PROJECT_CTA_CLASS_NAME}
                                            >
                                                <span>서비스 바로가기</span>
                                                <ArrowUpRight
                                                    aria-hidden="true"
                                                    className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 "
                                                    strokeWidth={2}
                                                />
                                            </a>
                                        )}
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
        <section className="relative z-20 overflow-x-clip">
            <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-28 md:pb-40 lg:px-10 lg:pt-32 lg:pb-48">
                <SectionHeading
                    eyebrow="Professional Journey"
                    title="Experience"
                    className="mb-12 space-y-3 md:mb-14 md:space-y-4 lg:mb-16"
                />

                <div className="mt-14 space-y-18 md:mt-20 md:space-y-24 lg:mt-24 lg:space-y-32">
                    {experiences.map((experience, experienceIndex) => (
                        <ExperienceItem
                            key={`${experience.company}-${experienceIndex}`}
                            experience={experience}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
