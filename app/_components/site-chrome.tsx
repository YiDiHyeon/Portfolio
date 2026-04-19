"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";
import Nav from "@/components/nav";
import ThemeToggle from "@/components/theme-toggle";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { portfolioPageContent } from "@/lib/portfolio-content";
import { startScrollAnimation, stopActiveScrollAnimation } from "@/lib/scroll-animation";
import { sectionNavigationIds } from "@/lib/section-navigation";

export default function SiteChrome() {
    const pathname = usePathname();
    const activeSectionId = useScrollSpy(sectionNavigationIds);
    const isHomeActive = activeSectionId === "home";
    const [isDetailTopVisible, setIsDetailTopVisible] = useState(true);
    const isProjectDetailPage = portfolioPageContent.projects.some(
        (project) => pathname === `/${project.slug}`,
    );
    const logoHref = isProjectDetailPage ? "/#home" : "#home";
    const logoAriaLabel = isProjectDetailPage ? "메인 Home 섹션으로 이동" : "Home 섹션으로 이동";
    const shouldShowLogo = isProjectDetailPage ? isDetailTopVisible : isHomeActive;
    const logoVisibilityClassName = shouldShowLogo
        ? "opacity-100"
        : "pointer-events-none opacity-0";

    useEffect(() => {
        stopActiveScrollAnimation();
    }, [pathname]);

    useEffect(() => {
        if (!isProjectDetailPage) {
            return;
        }

        const handleScroll = () => {
            setIsDetailTopVisible(window.scrollY <= 16);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isProjectDetailPage]);

    const handleHomeClick = (event: MouseEvent<HTMLAnchorElement>) => {
        if (isProjectDetailPage) {
            return;
        }

        event.preventDefault();
        startScrollAnimation(0);
    };

    return (
        <>
            <div className="fixed left-8 top-8 z-50 flex flex-col items-start lg:left-12 lg:top-12">
                <Link
                    href={logoHref}
                    onClick={handleHomeClick}
                    aria-label={logoAriaLabel}
                    className={`font-nav text-sm font-bold tracking-[0.16em] text-orange-strong transition-[color,opacity] duration-300 hover:text-orange-strong ${logoVisibilityClassName}`}
                >
                    YI JI HYEON
                </Link>
            </div>

            {isProjectDetailPage ? null : (
                <Nav
                    activeId={activeSectionId}
                    className="fixed right-26 top-12 z-50 hidden gap-6 lg:flex"
                />
            )}

            <div className="fixed right-5 top-5 z-50 lg:right-10  lg:top-9 ">
                <ThemeToggle />
            </div>
        </>
    );
}
