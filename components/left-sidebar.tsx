"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import Nav from "@/components/nav";
import ThemeToggle from "@/components/theme-toggle";
import { portfolioPageContent } from "@/lib/portfolio-content";

const profile = portfolioPageContent.profile;

const profileRevealDelay = {
    nameStart: 80,
    nameKo: 620,
    job: 760,
    nav: 1380,
    links: 1520,
} as const;

function getRevealStyle(delay: number) {
    return {
        animationDelay: `${delay}ms`,
    };
}

const ProfileContent = () => (
    <section>
        <p
            className="sidebar-reveal mb-2 hidden text-xs font-medium uppercase tracking-label-lg text-text-secondary lg:block"
            style={getRevealStyle(profileRevealDelay.nameStart)}
        >
            PROFILE
        </p>

        <h1
            className="sidebar-reveal mb-1 hidden text-2xl font-extrabold tracking-tight text-orange-strong lg:block xl:text-3xl"
            style={getRevealStyle(profileRevealDelay.nameKo)}
        >
            {profile.displayName}
        </h1>

        <h2
            className="sidebar-reveal mb-3 text-sm font-medium text-text-primary lg:mt-0 xl:text-base"
            style={getRevealStyle(profileRevealDelay.job)}
        >
            {profile.jobTitle}
        </h2>
    </section>
);

export default function LeftSidebar() {
    const [isMobileHeaderVisible, setIsMobileHeaderVisible] = useState(true);
    const [isAtTop, setIsAtTop] = useState(true);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        let lastScrollY = window.scrollY;
        const threshold = 10;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollDelta = currentScrollY - lastScrollY;
            const nextIsAtTop = currentScrollY <= 24;

            setIsAtTop(nextIsAtTop);

            if (Math.abs(scrollDelta) < threshold) {
                return;
            }

            if (nextIsAtTop) {
                setIsMobileHeaderVisible(true);
            } else {
                setIsMobileHeaderVisible(scrollDelta < 0);
            }

            lastScrollY = currentScrollY;
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const mobileHeaderItemTransition = shouldReduceMotion
        ? { duration: 0 }
        : {
            type: "spring" as const,
            stiffness: 380,
            damping: 28,
            mass: 0.9,
        };

    return (
        <>
            <aside className="hidden min-h-0 border-r border-border bg-sidebar lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:flex lg:h-screen lg:w-[var(--sidebar-width)] lg:flex-col lg:justify-between">
                <div className="min-h-0 overflow-y-auto p-8 space-y-10 xl:p-10 xl:space-y-12">
                    <ProfileContent />

                    <section className="sidebar-reveal border-t border-border/50 pt-4" style={getRevealStyle(profileRevealDelay.nav)}>
                        <Nav className="flex-col gap-5" />
                    </section>
                </div>

                <div
                    className="sidebar-reveal flex items-center justify-between bg-sidebar p-6 shrink-0 xl:p-8"
                    style={getRevealStyle(profileRevealDelay.links)}
                >
                    <ThemeToggle />
                </div>
            </aside>

            <header
                className={`pointer-events-none fixed inset-x-0 top-0 z-50 lg:hidden transition-transform duration-300 ease-out ${
                    isMobileHeaderVisible ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                {isAtTop ? (
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-[calc(env(safe-area-inset-top,0px)+4.75rem)] bg-gradient-to-b from-bg via-bg/90 to-transparent" />
                ) : null}
                <div className={`relative flex w-full px-6 pb-3 pt-[calc(env(safe-area-inset-top,0px)+0.75rem)] ${isAtTop ? "items-center justify-between gap-4" : "justify-end"}`}>
                    {isAtTop ? (
                        <motion.div
                            initial={shouldReduceMotion ? false : { opacity: 0, y: -10, filter: "blur(6px)" }}
                            animate={{
                                opacity: isMobileHeaderVisible ? 1 : 0.92,
                                y: isMobileHeaderVisible ? 0 : -6,
                                filter: shouldReduceMotion ? "none" : "blur(0px)",
                            }}
                            transition={mobileHeaderItemTransition}
                            className="pointer-events-auto"
                        >
                            <Link href="/" className="text-xl font-extrabold tracking-tight text-orange-strong">
                                {profile.displayName}
                            </Link>
                        </motion.div>
                    ) : null}
                    <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, y: -12, rotate: -8 }}
                        animate={{
                            opacity: isMobileHeaderVisible ? 1 : 0.88,
                            y: isMobileHeaderVisible ? 0 : -8,
                            rotate: isMobileHeaderVisible ? 0 : -4,
                        }}
                        transition={{
                            ...mobileHeaderItemTransition,
                            delay: shouldReduceMotion ? 0 : 0.06,
                        }}
                        className="pointer-events-auto"
                    >
                        <ThemeToggle />
                    </motion.div>
                </div>
            </header>
        </>
    );
}
