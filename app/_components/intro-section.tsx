"use client";

import { animate, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import ScrambleText from "@/components/scramble-text";
import type { PortfolioIntroContent } from "@/types/portfolio";

interface IntroSectionProps {
    intro: PortfolioIntroContent;
}

const HERO_TIMING = {
    eyebrow: 60,
    line1: 140,
    complex: 260,
    line2: 320,
    simply: 460,
    divider: 700,
    cta: 820,
} as const;

function RevealLine({
    children,
    delayMs,
}: {
    children: ReactNode;
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

export default function IntroSection({ intro }: IntroSectionProps) {
    const { scrollY } = useScroll();
    const shouldReduceMotion = useReducedMotion();
    const [shouldAnimateHeroText, setShouldAnimateHeroText] = useState(false);

    const scale = useTransform(scrollY, [0, 600], [1, 0.95]);
    const opacity = useTransform(scrollY, [0, 600], [1, 0.5]);
    const y = useTransform(scrollY, [0, 600], [0, 60]);

    useEffect(() => {
        if (shouldReduceMotion) {
            return;
        }

        const enableHeroTextAnimation = () => {
            setShouldAnimateHeroText(window.innerWidth >= 768);
        };

        if (typeof window.requestIdleCallback === "function") {
            const idleId = window.requestIdleCallback(enableHeroTextAnimation, {
                timeout: 280,
            });

            return () => {
                window.cancelIdleCallback(idleId);
            };
        }

        const timeoutId = window.setTimeout(enableHeroTextAnimation, 180);

        return () => {
            window.clearTimeout(timeoutId);
        };
    }, [shouldReduceMotion]);

    const handleProfileClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();

        const profileSection = document.getElementById("projects");

        if (!profileSection) {
            return;
        }

        const targetPosition = profileSection.getBoundingClientRect().top + window.scrollY;

        animate(window.scrollY, targetPosition, {
            type: "spring",
            stiffness: 50,
            damping: 14,
            mass: 0.8,햐
            restDelta: 0.5,
            onUpdate: (latest) => window.scrollTo(0, latest),
        });
    };

    return (
        <section className="relative flex h-full min-h-full w-full items-center overflow-hidden">
            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 pt-[calc(var(--mobile-header-offset)+1rem)] md:px-10 md:py-18">
                <motion.div
                    style={{
                        scale,
                        opacity,
                        y,
                    }}
                    className="relative flex w-full origin-center flex-col items-center text-center"
                >
                    <p
                        className="hero-fade-up mb-3 text-xl font-medium uppercase tracking-label-md text-text-secondary md:mb-4 md:text-3xl"
                        style={{ animationDelay: `${HERO_TIMING.eyebrow}ms` }}
                    >
                        {intro.eyebrow}
                    </p>

                    <h1 className="mb-5 font-general-sans text-[2.75rem] font-semibold leading-[0.95] tracking-normal text-text-primary sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem]">
                        <span className="flex flex-col gap-0">
                            <RevealLine delayMs={`${HERO_TIMING.line1}ms`}>
                                Make <ScrambleText text="complex" delayMs={HERO_TIMING.complex} durationMs={420} enabled={shouldAnimateHeroText} />
                            </RevealLine>
                            <RevealLine delayMs={`${HERO_TIMING.line2}ms`}>
                                flows work <ScrambleText text="simply" delayMs={HERO_TIMING.simply} durationMs={420} enabled={shouldAnimateHeroText} />
                            </RevealLine>
                        </span>
                    </h1>

                    <div
                        className="hero-fade-up mt-8 h-px w-20 bg-text-primary/20 md:mt-10"
                        style={{ animationDelay: `${HERO_TIMING.divider}ms` }}
                    />

                    <div
                        className="hero-fade-up mt-10 md:mt-12"
                        style={{ animationDelay: `${HERO_TIMING.cta}ms` }}
                    >
                        <a
                            href="#projects"
                            onClick={handleProfileClick}
                            className="group flex items-center justify-center gap-3 text-[0.7rem] font-bold uppercase tracking-label-tight text-text-primary transition-colors duration-300 hover:text-orange-strong md:text-xs"
                        >
                            <span>See Projects</span>
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
