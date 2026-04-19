"use client";

import { useEffect, useState, type ReactNode } from "react";
import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
    type MotionValue,
} from "framer-motion";
import {
    ENTRY_EASE,
    HERO_SCROLL_RANGE,
    SCROLL_REVEAL_DOODLES,
    SECTION_IDS,
    type ScrollRevealDoodleConfig,
    type SectionId,
    type SectionMetric,
    type SectionMetrics,
} from "./hero-doodles";

interface SketchGroupProps {
    children: ReactNode;
    delay: number;
    initialX: number;
    initialY: number;
    pageScrollY: MotionValue<number>;
    scrollOpacity: [number, number, number];
    scrollX: [number, number, number];
    scrollY: [number, number, number];
}

interface ScrollRevealStickerProps extends ScrollRevealDoodleConfig {
    metric?: SectionMetric;
    pageScrollY: MotionValue<number>;
    viewportHeight: number;
}

function GridBackground() {
    return (
        <div
            className="pointer-events-none absolute inset-0"
            style={{
                backgroundImage: `
                    linear-gradient(to right, var(--intro-grid-color) 1px, transparent 1px),
                    linear-gradient(to bottom, var(--intro-grid-color) 1px, transparent 1px)
                `,
                backgroundSize: "16px 16px",
                maskImage: "linear-gradient(to bottom, black 0%, black 72%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 72%, transparent 100%)",
            }}
        />
    );
}

function GrainOverlay() {
    return (
        <svg
            aria-hidden
            className="absolute inset-0 h-full w-full opacity-[0.14] mix-blend-multiply dark:opacity-[0.13] dark:mix-blend-screen"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <filter id="hero-paper-grain">
                <feTurbulence baseFrequency="0.72" numOctaves="4" seed="9" type="fractalNoise" />
                <feColorMatrix type="saturate" values="0" />
                <feComponentTransfer>
                    <feFuncA slope="0.15" type="linear" />
                </feComponentTransfer>
            </filter>
            <rect filter="url(#hero-paper-grain)" height="100%" width="100%" />
        </svg>
    );
}

function SketchGroup({
    children,
    delay,
    initialX,
    initialY,
    pageScrollY,
    scrollOpacity,
    scrollX,
    scrollY,
}: SketchGroupProps) {
    const x = useTransform(pageScrollY, HERO_SCROLL_RANGE, scrollX);
    const y = useTransform(pageScrollY, HERO_SCROLL_RANGE, scrollY);
    const opacity = useTransform(pageScrollY, HERO_SCROLL_RANGE, scrollOpacity);

    return (
        <motion.g
            animate={{
                opacity: 1,
                x: 0,
                y: 0,
            }}
            initial={{
                opacity: 0,
                x: initialX,
                y: initialY,
            }}
            transition={{
                delay,
                duration: 1.05,
                ease: ENTRY_EASE,
            }}
        >
            <motion.g style={{ opacity, x, y }}>
                {children}
            </motion.g>
        </motion.g>
    );
}

function createRevealRange(metric: SectionMetric | undefined, viewportHeight: number, anchorProgress: number, anchorOffset: number): [number, number, number, number] {
    if (!metric || viewportHeight <= 0) {
        return [0, 1, 2, 3];
    }

    const sectionHeight = metric.end - metric.start;
    const anchor = metric.start + sectionHeight * anchorProgress + anchorOffset;

    return [
        Math.max(0, anchor - viewportHeight * 0.72),
        Math.max(0, anchor - viewportHeight * 0.22),
        anchor + viewportHeight * 0.12,
        anchor + viewportHeight * 0.52,
    ];
}

function areSectionMetricsEqual(
    previousMetrics: SectionMetrics,
    nextMetrics: SectionMetrics,
) {
    const previousKeys = Object.keys(previousMetrics);
    const nextKeys = Object.keys(nextMetrics);

    if (previousKeys.length !== nextKeys.length) {
        return false;
    }

    return nextKeys.every((key) => {
        const previousMetric = previousMetrics[key as SectionId];
        const nextMetric = nextMetrics[key as SectionId];

        return previousMetric?.start === nextMetric?.start
            && previousMetric?.end === nextMetric?.end;
    });
}

function ScrollRevealSticker({
    anchorOffset,
    anchorProgress,
    background,
    className,
    entryDistance,
    exitDistance,
    floatRotation,
    floatY,
    metric,
    opacityPeak,
    pageScrollY,
    rotation,
    side,
    src,
    viewportHeight,
}: ScrollRevealStickerProps) {
    const direction = side === "left" ? -1 : 1;
    const inputRange = createRevealRange(metric, viewportHeight, anchorProgress, anchorOffset);
    const hiddenX = direction * entryDistance;
    const exitX = direction * exitDistance;
    const visibleOpacity = metric ? opacityPeak : 0;

    const opacity = useTransform(pageScrollY, inputRange, [0, visibleOpacity, visibleOpacity, 0]);
    const x = useTransform(pageScrollY, inputRange, [hiddenX, 0, 0, exitX]);
    const y = useTransform(pageScrollY, inputRange, [18, 0, 0, -12]);
    const scale = useTransform(pageScrollY, inputRange, [0.9, 1.06, 1.03, 0.94]);
    const rotate = useTransform(pageScrollY, inputRange, [rotation + direction * 7, rotation, rotation, rotation - direction * 4]);

    return (
        <motion.div
            className={`absolute ${className}`}
            style={{
                opacity,
                rotate,
                scale,
                x,
                y,
            }}
        >
            <motion.div
                animate={{
                    rotate: [0, floatRotation, 0, floatRotation * -0.45, 0],
                    y: [0, floatY, 0, floatY * -0.35, 0],
                }}
                className="h-full w-full"
                transition={{
                    duration: 16,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            >
                <div
                    className="h-full w-full mix-blend-multiply dark:mix-blend-screen"
                    style={{
                        WebkitMaskImage: `url(${src})`,
                        WebkitMaskPosition: "center",
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskSize: "contain",
                        background,
                        filter: "drop-shadow(0 20px 54px rgba(0, 0, 0, 0.12)) saturate(1.08) contrast(1.04)",
                        maskImage: `url(${src})`,
                        maskPosition: "center",
                        maskRepeat: "no-repeat",
                        maskSize: "contain",
                    }}
                />
            </motion.div>
        </motion.div>
    );
}

export default function HeroAmbientBackground() {
    const { scrollY: pageScrollY } = useScroll();
    const shouldReduceMotion = useReducedMotion();
    const [sectionMetrics, setSectionMetrics] = useState<SectionMetrics>({});
    const [viewportHeight, setViewportHeight] = useState(0);
    const [viewportWidth, setViewportWidth] = useState(0);
    const [enhancedEffectsReady, setEnhancedEffectsReady] = useState(false);

    useEffect(() => {
        if (shouldReduceMotion) {
            return;
        }

        const enableEnhancedEffects = () => {
            setEnhancedEffectsReady(true);
        };

        if (typeof window.requestIdleCallback === "function") {
            const idleId = window.requestIdleCallback(enableEnhancedEffects, {
                timeout: 360,
            });

            return () => {
                window.cancelIdleCallback(idleId);
            };
        }

        const timeoutId = window.setTimeout(enableEnhancedEffects, 220);

        return () => {
            window.clearTimeout(timeoutId);
        };
    }, [shouldReduceMotion]);

    useEffect(() => {
        if (!enhancedEffectsReady) {
            return;
        }

        let animationFrameId: number | null = null;

        const measureSections = () => {
            const nextMetrics: SectionMetrics = {};
            const nextViewportHeight = window.innerHeight;
            const nextViewportWidth = window.innerWidth;

            for (const sectionId of SECTION_IDS) {
                const element = document.getElementById(sectionId);

                if (!element) {
                    continue;
                }

                const rect = element.getBoundingClientRect();
                const start = window.scrollY + rect.top;

                nextMetrics[sectionId] = {
                    end: start + rect.height,
                    start,
                };
            }

            setSectionMetrics((previousMetrics) => (
                areSectionMetricsEqual(previousMetrics, nextMetrics)
                    ? previousMetrics
                    : nextMetrics
            ));
            setViewportHeight((previousHeight) => (
                previousHeight === nextViewportHeight ? previousHeight : nextViewportHeight
            ));
            setViewportWidth((previousWidth) => (
                previousWidth === nextViewportWidth ? previousWidth : nextViewportWidth
            ));
        };

        const scheduleMeasure = () => {
            if (animationFrameId !== null) {
                return;
            }

            animationFrameId = window.requestAnimationFrame(() => {
                animationFrameId = null;
                measureSections();
            });
        };

        measureSections();

        const observer = new ResizeObserver(scheduleMeasure);

        for (const sectionId of SECTION_IDS) {
            const element = document.getElementById(sectionId);

            if (element) {
                observer.observe(element);
            }
        }

        window.addEventListener("resize", scheduleMeasure);

        return () => {
            if (animationFrameId !== null) {
                window.cancelAnimationFrame(animationFrameId);
            }

            window.removeEventListener("resize", scheduleMeasure);
            observer.disconnect();
        };
    }, [enhancedEffectsReady]);

    const isMobileViewport = viewportWidth > 0 && viewportWidth < 768;
    const isLargeDesktopViewport = viewportWidth >= 1680;
    const shouldRenderDecorativeEffects = enhancedEffectsReady && !shouldReduceMotion;
    const shouldRenderDoodles = shouldRenderDecorativeEffects && !isMobileViewport;
    const shouldRenderGrain = shouldRenderDecorativeEffects && !isMobileViewport;
    const backgroundPreserveAspectRatio = isMobileViewport ? "xMidYMid slice" : "xMidYMid meet";
    const accentDotsOpacity = useTransform(pageScrollY, HERO_SCROLL_RANGE, [1, 0.9, 0]);
    const accentDotsY = useTransform(pageScrollY, HERO_SCROLL_RANGE, [0, -4, -28]);
    const primarySketchFilter = undefined;
    const softSketchFilter = undefined;

    return (
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-bg">
            <div className="absolute inset-0 bg-bg" />

            <GridBackground />

            <div
                className="absolute inset-0 opacity-[0.2] dark:hidden"
                style={{
                    backgroundImage: [
                        "radial-gradient(circle at 18% 18%, color-mix(in srgb, var(--hero-accent, #f2a07b) 12%, transparent), transparent 26%)",
                        "radial-gradient(circle at 82% 20%, color-mix(in srgb, var(--hero-sketch, rgba(103, 88, 73, 0.58)) 7%, transparent), transparent 24%)",
                        "radial-gradient(circle at 24% 82%, color-mix(in srgb, var(--hero-sketch, rgba(103, 88, 73, 0.58)) 6%, transparent), transparent 26%)",
                    ].join(", "),
                }}
            />

            <div
                className="absolute inset-0 hidden dark:block dark:opacity-[0.12]"
                style={{
                    backgroundImage: [
                        "radial-gradient(circle at 16% 18%, rgba(242,160,123,0.05), transparent 22%)",
                        "radial-gradient(circle at 84% 22%, rgba(231,215,185,0.04), transparent 24%)",
                        "radial-gradient(circle at 26% 82%, rgba(231,215,185,0.03), transparent 26%)",
                    ].join(", "),
                }}
            />

            <div
                className="absolute inset-0 dark:hidden"
                style={{
                    backgroundImage: [
                        "radial-gradient(ellipse 58% 42% at 50% 38%, rgba(255,255,255,0.64) 0%, rgba(255,252,247,0.34) 38%, rgba(255,248,239,0.12) 58%, rgba(255,247,238,0) 82%)",
                        "radial-gradient(ellipse 74% 56% at 50% 48%, rgba(242,160,123,0.03) 0%, rgba(242,160,123,0.018) 32%, rgba(242,160,123,0) 74%)",
                        "linear-gradient(180deg, rgba(255,252,246,0.12) 0%, rgba(255,249,241,0) 42%)",
                    ].join(", "),
                }}
            />

            <div
                className="absolute inset-0 hidden dark:block"
                style={{
                    backgroundImage: [
                        "radial-gradient(circle at 50% 42%, rgba(18,24,36,0.28) 0%, rgba(14,20,31,0.16) 22%, rgba(11,19,32,0) 40%)",
                        "radial-gradient(circle at 50% 60%, rgba(0,0,0,0.16) 0%, rgba(0,0,0,0.56) 74%, rgba(0,0,0,0.88) 100%)",
                    ].join(", "),
                }}
            />

            <div className="absolute inset-0">
                {(shouldRenderDoodles ? SCROLL_REVEAL_DOODLES : []).map((doodle) => (
                    <ScrollRevealSticker
                        key={doodle.src}
                        metric={sectionMetrics[doodle.sectionId]}
                        pageScrollY={pageScrollY}
                        viewportHeight={viewportHeight}
                        {...doodle}
                    />
                ))}
            </div>

            {shouldRenderGrain ? <GrainOverlay /> : null}

            <svg
                className="absolute inset-0 h-full w-full"
                fill="none"
                preserveAspectRatio={backgroundPreserveAspectRatio}
                shapeRendering="geometricPrecision"
                viewBox="0 0 1440 900"
                xmlns="http://www.w3.org/2000/svg"
            >
                <SketchGroup
                    delay={0.1}
                    initialX={-240}
                    initialY={-160}
                    pageScrollY={pageScrollY}
                    scrollOpacity={[1, 0.92, 0.14]}
                    scrollX={[0, -14, -170]}
                    scrollY={[0, -10, -135]}
                >
                    <g
                        filter={primarySketchFilter}
                        opacity={isLargeDesktopViewport ? 0.92 : undefined}
                        shapeRendering="geometricPrecision"
                        stroke="var(--hero-sketch, rgba(103, 88, 73, 0.58))"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                    >
                        <g transform={isMobileViewport ? "translate(40 0)" : "translate(-220 0)"}>
                            <path
                                d="M-6 154 C 62 140 120 122 176 110 C 198 104 142 148 188 154 C 248 162 314 122 372 116 C 396 112 320 156 382 160 C 446 164 510 130 572 126 C 606 124 640 123 674 124"
                                opacity="0.38"
                                strokeWidth="2.0"
                                transform="translate(334 134) scale(0.67) translate(-334 -134)"
                            />
                        </g>
                        <path
                            d="M-160 545 C -26 402 156 220 395 94"
                            opacity="0.12"
                            strokeWidth="2.1"
                        />
                    </g>
                </SketchGroup>

                <SketchGroup
                    delay={0.18}
                    initialX={250}
                    initialY={-140}
                    pageScrollY={pageScrollY}
                    scrollOpacity={[1, 0.92, 0.12]}
                    scrollX={[0, 18, 176]}
                    scrollY={[0, -8, -120]}
                >
                    <g
                        filter={primarySketchFilter}
                        opacity={isLargeDesktopViewport ? 0.92 : undefined}
                        shapeRendering="geometricPrecision"
                        stroke="var(--hero-sketch, rgba(103, 88, 73, 0.58))"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                    >
                        <path
                            d="M1182 322 C 1272 252 1368 224 1516 224"
                            opacity="0.33"
                            strokeWidth="2.2"
                            transform={isMobileViewport ? "translate(-360 -39)" : "translate(40 20)"}
                        />
                        <path
                            d="M1076 516 C 1212 472 1362 456 1510 472"
                            opacity="0.22"
                            strokeWidth="1.8"
                            transform={isMobileViewport ? "translate(-360 -39)" : "translate(40 20)"}
                        />
                        <path
                            d="M1118 590 C 1256 610 1390 584 1514 534"
                            opacity="0.16"
                            strokeWidth="1.4"
                            transform={isMobileViewport ? "translate(-360 -39)" : "translate(40 20)"}
                        />
                        <path
                            d="M1220 120 L1272 130 L1260 186 L1208 176 Z"
                            opacity="0.7"
                            strokeDasharray="10 10"
                            strokeWidth={isMobileViewport ? "1.2" : "2.3"}
                            transform={isMobileViewport ? "translate(-360 -39)" : "translate(40 20)"}
                        />
                    </g>
                </SketchGroup>

                <SketchGroup
                    delay={0.26}
                    initialX={-220}
                    initialY={190}
                    pageScrollY={pageScrollY}
                    scrollOpacity={[1, 0.88, 0.14]}
                    scrollX={[0, -22, -168]}
                    scrollY={[0, 16, 150]}
                >
                    <g
                        filter={primarySketchFilter}
                        opacity={isLargeDesktopViewport ? 0.92 : undefined}
                        shapeRendering="geometricPrecision"
                        stroke="var(--hero-sketch, rgba(103, 88, 73, 0.58))"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                    >
                        <path
                            d="M252 800 C 372 798 416 814 392 844 C 358 884 468 866 554 842 C 688 804 800 794 930 828"
                            opacity="0.2"
                            strokeWidth="2"
                            transform={isMobileViewport ? "translate(-100 0)" : "translate(-400 0)"}
                        />
                        <path
                            d="M124 640 L154 632 M140 614 L134 662"
                            opacity="0.58"
                            strokeWidth="4.1"
                            transform={isMobileViewport ? "translate(380 0)" : "translate(-100 0)"}
                        />
                    </g>
                </SketchGroup>

                <SketchGroup
                    delay={0.34}
                    initialX={260}
                    initialY={190}
                    pageScrollY={pageScrollY}
                    scrollOpacity={[1, 0.88, 0.12]}
                    scrollX={[0, 24, 182]}
                    scrollY={[0, 18, 152]}
                >
                    <g
                        filter={primarySketchFilter}
                        opacity={isLargeDesktopViewport ? 0.92 : undefined}
                        shapeRendering="geometricPrecision"
                        stroke="var(--hero-sketch, rgba(103, 88, 73, 0.58))"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                    >
                        <path
                            d="M930 678 C 970 700 1014 738 1060 754 C 1102 768 1134 760 1162 742"
                            opacity="0.48"
                            strokeDasharray="11 13"
                            strokeWidth="2.1"
                            transform={isMobileViewport ? "translate(-100 -39)" : "translate(20 20)"}
                        />
                        <path
                            d="M928 678 L948 676 L938 696"
                            opacity="0.45"
                            strokeWidth="1.8"
                            transform={isMobileViewport ? "translate(-100 -39)" : "translate(20 20)"}
                        />
                        <path d="M1362 552 L1380 552 M1371 543 L1371 561" opacity="0.42" strokeWidth="2.8"    transform={isMobileViewport ? "translate(-100 -39)" : "translate(0 20)"} />
                        <path d="M1154 734 L1214 748 L1198 814 L1138 800 Z" opacity="0.6" strokeWidth="2.4"    transform={isMobileViewport ? "translate(-100 0)" : "translate(40 20)"}/>
                        <path d="M1156 736 L1212 750 L1196 812 L1140 798 Z" opacity="0.3" strokeWidth="1.2"    transform={isMobileViewport ? "translate(-100 0)" : "translate(40 20)"}/>
                    </g>
                </SketchGroup>

                <g
                    filter={softSketchFilter}
                    opacity={isLargeDesktopViewport ? 0.88 : undefined}
                    shapeRendering="geometricPrecision"
                    stroke="var(--hero-sketch-soft, rgba(103, 88, 73, 0.32))"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                >
                    <path
                        d="M-150 780 C 40 650 196 592 328 660 C 468 732 494 880 640 954"
                        opacity="0.12"
                        strokeWidth="1.8"
                    />
                    <path
                        d="M1048 336 C 1178 260 1304 258 1430 314 C 1506 346 1580 326 1640 260"
                        opacity="0.12"
                        strokeWidth="1.6"
                    />
                </g>

                <motion.g
                    fill="var(--hero-accent, #f2a07b)"
                    style={{
                        filter: "drop-shadow(0 0 4px rgba(242, 160, 123, 0.18))",
                        opacity: accentDotsOpacity,
                        y: accentDotsY,
                    }}
                >
                    <circle cx="40" cy="70" opacity="0.46" r="2.2" />
                    <circle cx="118" cy="112" opacity="0.3" r="1.65" />
                    <circle cx="96" cy="438" opacity="0.24" r="1.7" />
                    <circle cx="154" cy="734" opacity="0.22" r="1.6" />
                    <circle cx="180" cy="258" opacity="0.32" r="2" />
                    <circle cx="248" cy="188" opacity="0.22" r="1.75" />
                    <circle cx="302" cy="612" opacity="0.24" r="1.75" />
                    <circle cx="366" cy="468" opacity="0.24" r="1.65" />
                    <circle cx="430" cy="820" opacity="0.28" r="1.85" />
                    <circle cx="548" cy="122" opacity="0.2" r="1.6" />
                    <circle cx="588" cy="704" opacity="0.28" r="1.95" />
                    <circle cx="724" cy="154" opacity="0.26" r="1.75" />
                    <circle cx="782" cy="268" opacity="0.22" r="1.75" />
                    <circle cx="844" cy="498" opacity="0.22" r="1.6" />
                    <circle cx="936" cy="612" opacity="0.22" r="1.85" />
                    <circle cx="1006" cy="198" opacity="0.24" r="1.75" />
                    <circle cx="1068" cy="742" opacity="0.32" r="1.95" />
                    <circle cx="1114" cy="312" opacity="0.28" r="1.95" />
                    <circle cx="1192" cy="118" opacity="0.28" r="1.75" />
                    <circle cx="1330" cy="142" opacity="0.32" r="1.85" />
                    <circle cx="1266" cy="346" opacity="0.22" r="1.6" />
                    <circle cx="1164" cy="684" opacity="0.32" r="1.85" />
                    <circle cx="1344" cy="438" opacity="0.28" r="1.75" />
                    <circle cx="1382" cy="748" opacity="0.28" r="1.95" />
                </motion.g>
            </svg>
        </div>
    );
}
