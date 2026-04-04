"use client";

import FeaturedProjectCard from "@/app/_components/featured-project-card";
import SectionHeading from "@/app/_components/section-heading";
import StandardProjectCard from "@/app/_components/standard-project-card";
import { motion } from "framer-motion";
import type { PortfolioProjectContent } from "@/types/portfolio";

interface ProjectsSectionProps {
    projects: PortfolioProjectContent[];
}

const featuredProjectSlugs = ["tarome", "chap-landing"] as const;
const standardProjectSlugs = ["nova-admin", "portfolio"] as const;
const projectListReveal = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
} as const;

const projectCardReveal = {
    hidden: { opacity: 0, y: 36 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    },
} as const;

function getOrderedProjects(
    projects: PortfolioProjectContent[],
    slugs: readonly string[],
) {
    return slugs.flatMap((slug) => {
        const project = projects.find((item) => item.slug === slug);
        return project ? [project] : [];
    });
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
    const featuredProjects = getOrderedProjects(projects, featuredProjectSlugs);
    const standardProjects = getOrderedProjects(projects, standardProjectSlugs);

    return (
        <section className="border-t border-border bg-bg">
            <div className="mx-auto max-w-7xl px-6 pt-20 pb-32 md:pb-40 lg:px-10 lg:pt-32 lg:pb-24">
                <SectionHeading
                    eyebrow="Selected Work"
                    title="Projects."
                    className="mb-12 space-y-3 md:mb-14 md:space-y-4 lg:mb-16"
                />

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={projectListReveal}
                    className="mt-16 grid gap-6 md:mt-24 md:gap-8 lg:grid-cols-2 lg:gap-10"
                >
                    {featuredProjects.map((project) => {
                        if (!project.thumbnailSrc) {
                            return null;
                        }

                        return (
                            <motion.div key={project.slug} variants={projectCardReveal}>
                                <FeaturedProjectCard
                                    project={project}
                                    thumbnailSrc={project.thumbnailSrc}
                                    priority={project.slug === featuredProjectSlugs[0]}
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={projectListReveal}
                    className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-2 lg:gap-8"
                >
                    {standardProjects.map((project) => (
                        <motion.div key={project.slug} variants={projectCardReveal}>
                            <StandardProjectCard project={project} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
