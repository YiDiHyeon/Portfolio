"use client";

import { motion, type Variants } from "framer-motion";
import type { PortfolioProfile } from "@/types/portfolio";

interface ProfileSectionProps {
    profile: PortfolioProfile;
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
};

const lineVariants: Variants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
        scaleX: 1,
        transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
};

export default function ProfileSection({ profile }: ProfileSectionProps) {
    const chipBaseStyle = "inline-flex items-center rounded-full border border-border bg-transparent px-3 py-2 text-xs font-semibold text-text-primary/70";

    return (
        <section className="relative overflow-hidden py-24 md:py-32 lg:py-48 flex items-center">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
                className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-0 xl:gap-32"
            >
                <div className="flex flex-col justify-center">
                    <motion.div variants={itemVariants} className="space-y-10 lg:space-y-12">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] text-orange-strong">
                                    PROFILE
                                </p>
                                <motion.div variants={lineVariants} className="h-px w-8 bg-orange-strong/30" />
                            </div>
                            
                            <div className="space-y-3">
                                <h1 className="font-clash text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-text-primary md:text-6xl lg:text-[4rem] xl:text-[4rem]">
                                    {profile.displayName}
                                </h1>
                                <div className="flex items-baseline gap-3 pt-1">
                                    <span className="text-xl font-medium tracking-tight text-text-secondary opacity-60">
                                        {profile.name}
                                    </span>
                                    <div className="h-1 w-1 rounded-full bg-orange-strong/40" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 pt-4">
                            <div className="space-y-1">
                                <p className="text-lg font-bold tracking-tight text-text-primary/90">
                                    {profile.jobTitle}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-semibold tracking-tight text-text-secondary/80 leading-relaxed uppercase">
                                    경력 {profile.history} <span className="mx-2 text-border">|</span> {profile.location}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="flex flex-col justify-center space-y-16 lg:space-y-20">
                    <motion.div variants={itemVariants} className="space-y-8 group">
                        <div className="flex items-center gap-3">
                            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] text-orange-strong">
                                SUMMARY
                            </p>
                            <motion.div variants={lineVariants} className="h-px w-8 bg-orange-strong/30" />
                        </div>
                        
                        <div className="max-w-2xl space-y-1 text-xl font-medium leading-[1.45] text-text-secondary md:text-2xl md:leading-[1.35] break-keep font-pretendard-ui">
                            <p className="text-text-primary/90 underline-offset-[10px]">퍼블리싱 경험을 기반으로</p>
                            <p><span className="text-orange-strong underline underline-offset-8 decoration-1 decoration-orange-strong/20">UI/UX와 성능</span>을 함께 고려하는 프론트엔드 개발자입니다.</p>
                            <div className="h-1" />
                            <p className="text-text-primary/80">협업 과정에서의 커뮤니케이션을</p>
                            <p>가장 중요한 가치로 생각합니다.</p>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-10">
                        <div className="flex items-center gap-3">
                            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] text-orange-strong">
                                TECH STACK
                            </p>
                            <motion.div variants={lineVariants} className="h-px w-8 bg-orange-strong/30" />
                        </div>
                        
                        <div className="grid gap-10 sm:grid-cols-2 lg:gap-12">
                            {[
                                { label: "Frontend", items: ["Vue.js", "Nuxt.js", "React", "Next.js"] },
                                { label: "Language", items: ["JavaScript", "TypeScript"] },
                                { label: "Architecture & Tools", items: ["Tailwind", "Pinia", "React Query", "Zustand"] }
                            ].map((group) => (
                                <div key={group.label} className="space-y-5">
                                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-text-primary/30 flex items-center gap-2">
                                        <span className="h-1 w-1 rounded-full bg-orange-strong/30" />
                                        {group.label}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {group.items.map((skill) => (
                                            <span key={skill} className={chipBaseStyle}>
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
