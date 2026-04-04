"use client";

import type { MouseEvent } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import useThemeStore from "@/store/theme";

interface NavProps {
    onClick?: () => void;
    className?: string;
}

interface NavLinkItem {
    name: string;
    href: string;
    id: string;
    description: string;
}

const navLinks: NavLinkItem[] = [
    {
        name: "Intro",
        href: "#intro",
        id: "intro",
        description: "복잡한 서비스 흐름을\n운영 가능한 UI로 정리합니다.",
    },
    {
        name: "Experience",
        href: "#experience",
        id: "experience",
        description: "실무 경험과 핵심 강점을\n간결하게 정리했습니다.",
    },
    {
        name: "Projects",
        href: "#projects",
        id: "projects",
        description: "대표 프로젝트를 선별해\n상세 페이지로 연결합니다.",
    },
];

export default function Nav({ onClick, className = "" }: NavProps) {
    const activeId = useScrollSpy(["intro", "experience", "projects"]);
    const theme = useThemeStore((state) => state.theme);

    const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
        event.preventDefault();

        const element = document.getElementById(id);
        if (element) {
            const scroller = window;
            const currentScrollPos = window.scrollY;

            let targetY = 0;

            if (id !== "intro") {
                const rect = element.getBoundingClientRect();
                targetY = rect.top + window.scrollY;
            }

            animate(currentScrollPos, targetY, {
                type: "spring",
                stiffness: 50,
                damping: 14,
                mass: 0.8,
                restDelta: 0.5,
                onUpdate: (latest) => scroller.scrollTo(0, latest),
            });
        }

        onClick?.();
    };

    const highlightColor = theme === "dark" ? "bg-sky-soft/50" : "bg-yellow-soft/80";

    return (
        <nav className={`relative flex ${className}`}>
            {navLinks.map((link) => {
                const isActive = activeId === link.id;

                return (
                    <div key={link.href} className="flex flex-col gap-2">
                        <motion.a
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.id)}
                            initial="rest"
                            whileHover="hover"
                            className={`group relative z-10 font-bold transition-colors duration-300 py-2 lg:py-1 px-2 lg:px-0 w-fit ${isActive
                                ? "text-text-primary"
                                : "text-text-secondary hover:text-text-primary"
                                }`}
                        >
                            <span className="relative z-10">
                                {link.name}
                            </span>

                            {isActive && (
                                <motion.span
                                    key={`active-${link.id}`}
                                    className={`absolute left-2 lg:left-0 bottom-[18%] z-[-1] h-[45%] ${highlightColor}`}
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{
                                        duration: 0.8,
                                        ease: "easeInOut"
                                    }}
                                />
                            )}

                            {!isActive && (
                                <motion.span
                                    className={`absolute left-2 lg:left-0 bottom-[18%] z-[-1] h-[45%] ${highlightColor} opacity-40`}
                                    variants={{
                                        rest: { width: 0 },
                                        hover: { width: "100%" }
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeOut"
                                    }}
                                />
                            )}
                        </motion.a>

                        <div className="hidden lg:block">
                            <AnimatePresence>
                                {isActive && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0, x: -5 }}
                                        animate={{ opacity: 1, height: "auto", x: 0 }}
                                        exit={{ opacity: 0, height: 0, x: -5 }}
                                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                                        className="pl-4 lg:pl-0 overflow-hidden"
                                    >
                                        <p className="text-sm leading-relaxed text-text-secondary/70 whitespace-pre-line font-medium break-keep">
                                            {link.description}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                );
            })}
        </nav>
    );
}
