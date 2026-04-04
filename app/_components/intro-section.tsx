"use client";

import type { PortfolioIntroContent } from "@/types/portfolio";
import Highlight from "@/components/highlight";
import { motion, useScroll, useTransform } from "framer-motion";

interface IntroSectionProps {
    intro: PortfolioIntroContent;
}

function RevealLine({
    children,
    delayMs,
}: {
    children: React.ReactNode;
    delayMs: string;
}) {
    return (
        <span className="block overflow-hidden pb-[0.04em]">
            <span className="hero-line-reveal inline-block" style={{ animationDelay: delayMs }}>
                {children}
            </span>
        </span>
    );
}

function GridBackground() {
    return (
        <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
                backgroundImage: `
                    linear-gradient(to right, var(--intro-grid-color) 1px, transparent 1px),
                    linear-gradient(to bottom, var(--intro-grid-color) 1px, transparent 1px)
                `,
                backgroundSize: "24px 24px",
                maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 40%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 40%, transparent 100%)",
            }}
        />
    );
}

export default function IntroSection({ intro }: IntroSectionProps) {
    const { scrollY } = useScroll();

    const scale = useTransform(scrollY, [0, 600], [1, 0.95]);
    const opacity = useTransform(scrollY, [0, 600], [1, 0.5]);
    const y = useTransform(scrollY, [0, 600], [0, 60]);

    return (
        <section className="relative flex h-full min-h-full w-full items-center overflow-hidden bg-bg">
            <GridBackground />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-[calc(var(--mobile-header-offset)+1rem)] md:px-10 md:py-20">
                <motion.div
                    style={{
                        scale,
                        opacity,
                        y,
                    }}
                    className="relative flex w-full flex-col origin-center"
                >
                    <p
                        className="hero-fade-up mb-4 text-xs font-medium uppercase tracking-label-lg text-text-secondary md:mb-5"
                        style={{ animationDelay: "60ms" }}
                    >
                        {intro.eyebrow}
                    </p>

                    <h1 className="mb-6 font-clash text-[clamp(3.5rem,11vw,8rem)] font-semibold leading-[0.85] tracking-[-0.04em] text-text-primary">
                        <span className="flex flex-col gap-0">
                            <RevealLine delayMs="120ms">
                                Make <Highlight delayMs="1120ms">complex</Highlight>
                            </RevealLine>
                            <RevealLine delayMs="210ms">
                                flows <Highlight delayMs="1260ms">simple</Highlight>
                            </RevealLine>
                        </span>
                    </h1>

                    <p
                        className="hero-fade-up max-w-2xl break-keep text-base leading-relaxed text-text-secondary md:text-lg"
                        style={{ animationDelay: "280ms" }}
                    >
                        {intro.description}
                    </p>

                    <div className="hero-fade-up mt-10 h-px w-24 bg-text-primary/20 md:mt-14" style={{ animationDelay: "340ms" }} />

                    <div className="hero-fade-up mt-12 md:mt-16" style={{ animationDelay: "420ms" }}>
                        <a
                            href="#experience"
                            className="group flex items-center gap-4 text-xs font-bold uppercase tracking-label-tight text-text-primary transition-colors duration-300 hover:text-orange-strong"
                        >
                            <span>See Experience</span>
                            <span className="inline-block motion-safe:animate-bounce">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 1V11M6 11L1 6M6 11L11 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
