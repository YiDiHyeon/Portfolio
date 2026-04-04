import type { ReactNode } from "react";

interface HighlightProps {
    children: ReactNode;
    delayMs?: string;
}

export default function Highlight({ children, delayMs = "0ms" }: HighlightProps) {
    return (
        <span className="hero-highlight-shell relative inline-block whitespace-nowrap">
            <span className="hero-highlight-text">{children}</span>
            <span
                aria-hidden="true"
                className="hero-emphasis-bar hero-emphasis-bar-geometry absolute z-0"
                style={{ animationDelay: delayMs }}
            />
        </span>
    );
}
