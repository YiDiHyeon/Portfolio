"use client";

import { useEffect, useState } from "react";

const SCROLL_TOP_BUTTON_THRESHOLD = 600;

export default function ProjectDetailScrollTop() {
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    useEffect(() => {
        // Next.js 라우터와 브라우저의 Scroll Anchoring 충돌로 진입 시 하단으로 스크롤이 고정되는 버그 방지
        window.scrollTo(0, 0);
        const timer = setTimeout(() => window.scrollTo(0, 0), 100);

        const handleScroll = () => {
            setIsButtonVisible(window.scrollY >= SCROLL_TOP_BUTTON_THRESHOLD);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            clearTimeout(timer);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScrollTop = () => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: prefersReducedMotion ? "auto" : "smooth",
        });
    };

    return (
        <button
            type="button"
            aria-label="페이지 최상단으로 이동"
            onClick={handleScrollTop}
            className={`fixed right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-black/8 bg-[#ffffff00] text-text-primary shadow-[0_10px_28px_rgba(15,23,42,0.12)] backdrop-blur-sm transition-all duration-300 hover:border-orange-strong hover:text-orange-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-strong/45 dark:border-white/12 dark:bg-[#101720]/88 sm:right-6 ${isButtonVisible ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
            style={{
                bottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)",
            }}
        >
            <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12 18V6M12 6L7 11M12 6L17 11"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                />
            </svg>
        </button>
    );
}
