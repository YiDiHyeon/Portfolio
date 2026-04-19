"use client";

import type { MouseEvent } from "react";
import { startScrollAnimation } from "@/lib/scroll-animation";
import { sectionNavigationItems } from "@/lib/section-navigation";

interface NavProps {
    activeId: string;
    onClick?: () => void;
    className?: string;
}

function getSectionTargetY(id: string, element: HTMLElement) {
    if (id === "home") {
        return 0;
    }

    if (id === "profile") {
        return window.innerHeight;
    }

    return element.offsetTop;
}

export default function Nav({ activeId, onClick, className = "" }: NavProps) {
    const hasScrollSurface = activeId !== "home";

    const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
        event.preventDefault();

        const element = document.getElementById(id);
        if (element) {
            const targetY = getSectionTargetY(id, element);

            startScrollAnimation(targetY);
        }

        onClick?.();
    };

    return (
        <nav className={`font-nav flex-row px-2 transition-[background] duration-300 ${hasScrollSurface ? "nav-scroll-surface" : "bg-transparent"} ${className}`}>
            {sectionNavigationItems.map((link) => {
                const isActive = activeId === link.id;

                return (
                    <div key={link.href} className="flex flex-col">
                        <a
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.id)}
                            className={`group relative z-10 w-fit text-sm font-medium leading-none tracking-[0.01em] transition-colors duration-300 ${isActive
                                ? "text-orange-strong"
                                : "font-bold text-text-primary/70"
                                }`}
                        >
                            <span className="relative z-10">
                                {link.name}
                            </span>
                            <span className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
                        </a>
                    </div>
                );
            })}
        </nav>
    );
}
