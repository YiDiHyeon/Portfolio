"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface ScrambleTextProps {
    text: string;
    delayMs?: number;
    durationMs?: number;
}

const CHARS = "!?@#$%&XYZW1234567890+-=\\/<>*[]{}";

function getInitialScrambledText(text: string) {
    let scrambledText = "";

    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i) || text.length;
        const nextIndex = (charCode + i * 7 + text.length) % CHARS.length;

        scrambledText += CHARS[nextIndex];
    }

    return scrambledText;
}

function getScrambledText(text: string) {
    let scrambledText = "";

    for (let i = 0; i < text.length; i++) {
        scrambledText += CHARS[Math.floor(Math.random() * CHARS.length)];
    }

    return scrambledText;
}

export default function ScrambleText({ text, delayMs = 0, durationMs = 800 }: ScrambleTextProps) {
    const prefersReducedMotion = useReducedMotion();

    const [displayText, setDisplayText] = useState(() => getInitialScrambledText(text));

    useEffect(() => {
        if (prefersReducedMotion) return;

        let animationFrame: number;
        let startTimestamp: number | null = null;
        let lastScrambleTime = 0;

        const animate = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const elapsed = timestamp - startTimestamp;

            if (elapsed < delayMs) {
                if (timestamp - lastScrambleTime > 50) {
                    lastScrambleTime = timestamp;
                    setDisplayText(getScrambledText(text));
                }
                animationFrame = requestAnimationFrame(animate);
                return;
            }

            const resolveElapsed = elapsed - delayMs;
            const progress = Math.min(resolveElapsed / durationMs, 1);

            if (progress >= 1) {
                setDisplayText(text);
                return;
            }

            if (timestamp - lastScrambleTime > 50) {
                lastScrambleTime = timestamp;
                let currentText = "";
                for (let i = 0; i < text.length; i++) {
                    const settleThreshold = i / text.length;
                    
                    if (progress > settleThreshold) {
                        currentText += text[i];
                    } else {
                        currentText += CHARS[Math.floor(Math.random() * CHARS.length)];
                    }
                }
                setDisplayText(currentText);
            }

            animationFrame = requestAnimationFrame(animate);
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [text, delayMs, durationMs, prefersReducedMotion]);

    if (prefersReducedMotion) {
        return <span className="inline-block text-text-primary">{text}</span>;
    }

    return (
        <span className="relative inline-block text-text-primary overflow-visible">
            <span className="invisible opacity-0">{text}</span>
            <span className="absolute inset-0 top-0 left-0" aria-hidden="true">
                {displayText}
            </span>
        </span>
    );
}
