export type SectionId = "home" | "profile" | "experience" | "projects" | "footer";

export interface SectionMetric {
    end: number;
    start: number;
}

export type SectionMetrics = Partial<Record<SectionId, SectionMetric>>;

export interface ScrollRevealDoodleConfig {
    anchorOffset: number;
    anchorProgress: number;
    background: string;
    className: string;
    entryDistance: number;
    exitDistance: number;
    floatRotation: number;
    floatY: number;
    opacityPeak: number;
    rotation: number;
    sectionId: SectionId;
    side: "left" | "right";
    src: string;
}

export const SECTION_IDS: SectionId[] = ["home", "profile", "experience", "projects", "footer"];
export const HERO_SCROLL_RANGE: [number, number, number] = [0, 180, 620];
export const ENTRY_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const SCROLL_REVEAL_DOODLES: ScrollRevealDoodleConfig[] = [
    {
        src: "/dddoodle-pack/misc/misc-1.svg",
        sectionId: "profile",
        side: "left",
        className:
            "left-[-2.75rem] top-[19%] h-[8.5rem] w-[8.5rem] md:left-[-2.25rem] md:h-[10.5rem] md:w-[10.5rem] lg:left-[-3.75rem] lg:top-[16%] lg:h-[15rem] lg:w-[15rem] xl:left-[2%] xl:h-[17rem] xl:w-[17rem]",
        background:
            "radial-gradient(circle at 42% 35%, color-mix(in srgb, var(--hero-accent) 28%, white 72%) 0%, color-mix(in srgb, var(--hero-sketch) 86%, transparent) 62%, color-mix(in srgb, var(--hero-sketch-soft) 78%, transparent) 100%)",
        anchorProgress: 0.24,
        anchorOffset: -48,
        entryDistance: 240,
        exitDistance: 140,
        floatRotation: 4,
        floatY: -10,
        opacityPeak: 0.32,
        rotation: -11,
    },
    {
        src: "/dddoodle-pack/arrows/arrow-2.svg",
        sectionId: "profile",
        side: "right",
        className:
            "right-[-1.75rem] top-[25%] h-[5.25rem] w-[5.25rem] md:right-[-1rem] md:h-[6.5rem] md:w-[6.5rem] lg:right-[-2.75rem] lg:top-[23%] lg:h-[8.5rem] lg:w-[8.5rem] xl:right-[3%] xl:h-[9.5rem] xl:w-[9.5rem]",
        background:
            "linear-gradient(160deg, color-mix(in srgb, var(--hero-accent) 92%, white 8%) 0%, color-mix(in srgb, var(--hero-accent) 52%, var(--hero-sketch) 48%) 100%)",
        anchorProgress: 0.54,
        anchorOffset: 24,
        entryDistance: 280,
        exitDistance: 176,
        floatRotation: -5,
        floatY: -7,
        opacityPeak: 0.5,
        rotation: 12,
    },
    {
        src: "/dddoodle-pack/misc/misc-24.svg",
        sectionId: "experience",
        side: "right",
        className:
            "right-[-3.25rem] top-[35%] h-[9rem] w-[9rem] md:right-[-2.5rem] md:h-[11rem] md:w-[11rem] lg:right-[-5rem] lg:top-[31%] lg:h-[16rem] lg:w-[16rem] xl:right-[1%] xl:h-[18rem] xl:w-[18rem]",
        background:
            "radial-gradient(circle at 36% 34%, color-mix(in srgb, var(--hero-accent) 20%, transparent) 0%, color-mix(in srgb, var(--hero-sketch) 88%, transparent) 58%, color-mix(in srgb, var(--hero-sketch-soft) 86%, transparent) 100%)",
        anchorProgress: 0.28,
        anchorOffset: -60,
        entryDistance: 260,
        exitDistance: 150,
        floatRotation: -4,
        floatY: -11,
        opacityPeak: 0.3,
        rotation: 10,
    },
    {
        src: "/dddoodle-pack/misc/misc-15.svg",
        sectionId: "experience",
        side: "left",
        className:
            "left-[-1.25rem] top-[43%] h-[5rem] w-[5rem] md:left-[-0.75rem] md:h-[6rem] md:w-[6rem] lg:left-[-2rem] lg:top-[41%] lg:h-[7.75rem] lg:w-[7.75rem] xl:left-[5%] xl:h-[8.75rem] xl:w-[8.75rem]",
        background:
            "linear-gradient(180deg, color-mix(in srgb, var(--hero-accent) 88%, white 12%) 0%, color-mix(in srgb, var(--hero-sketch) 76%, var(--hero-accent) 24%) 100%)",
        anchorProgress: 0.58,
        anchorOffset: 0,
        entryDistance: 240,
        exitDistance: 164,
        floatRotation: 5,
        floatY: 8,
        opacityPeak: 0.48,
        rotation: -18,
    },
    {
        src: "/dddoodle-pack/misc/misc-8.svg",
        sectionId: "projects",
        side: "left",
        className:
            "left-[-3rem] top-[58%] h-[8.75rem] w-[8.75rem] md:left-[-2rem] md:h-[10.75rem] md:w-[10.75rem] lg:left-[-4.5rem] lg:top-[54%] lg:h-[15rem] lg:w-[15rem] xl:left-[1%] xl:h-[17rem] xl:w-[17rem]",
        background:
            "radial-gradient(circle at 40% 30%, color-mix(in srgb, var(--hero-accent) 24%, transparent) 0%, color-mix(in srgb, var(--hero-sketch-soft) 82%, transparent) 56%, color-mix(in srgb, var(--hero-sketch) 78%, transparent) 100%)",
        anchorProgress: 0.24,
        anchorOffset: -32,
        entryDistance: 260,
        exitDistance: 156,
        floatRotation: 4,
        floatY: -8,
        opacityPeak: 0.28,
        rotation: -9,
    },
    {
        src: "/dddoodle-pack/arrows/arrow-12.svg",
        sectionId: "projects",
        side: "right",
        className:
            "right-[-1.25rem] top-[60%] h-[5.25rem] w-[5.25rem] md:right-[-0.5rem] md:h-[6.25rem] md:w-[6.25rem] lg:right-[-1.5rem] lg:top-[57%] lg:h-[8rem] lg:w-[8rem] xl:right-[7%] xl:h-[9rem] xl:w-[9rem]",
        background:
            "linear-gradient(180deg, color-mix(in srgb, var(--hero-accent) 94%, white 6%) 0%, color-mix(in srgb, var(--hero-accent) 66%, var(--hero-sketch) 34%) 100%)",
        anchorProgress: 0.5,
        anchorOffset: 20,
        entryDistance: 230,
        exitDistance: 148,
        floatRotation: -5,
        floatY: -7,
        opacityPeak: 0.52,
        rotation: 16,
    },
    {
        src: "/dddoodle-pack/misc/misc-25.svg",
        sectionId: "footer",
        side: "right",
        className:
            "right-[-3.5rem] top-[75%] h-[8.5rem] w-[8.5rem] md:right-[-2.5rem] md:h-[10.5rem] md:w-[10.5rem] lg:right-[-4.5rem] lg:top-[70%] lg:h-[14rem] lg:w-[14rem] xl:right-[0.5%] xl:h-[16rem] xl:w-[16rem]",
        background:
            "radial-gradient(circle at 36% 32%, color-mix(in srgb, var(--hero-accent) 18%, transparent) 0%, color-mix(in srgb, var(--hero-sketch) 86%, transparent) 56%, color-mix(in srgb, var(--hero-sketch-soft) 88%, transparent) 100%)",
        anchorProgress: 0.34,
        anchorOffset: -20,
        entryDistance: 270,
        exitDistance: 164,
        floatRotation: -4,
        floatY: -8,
        opacityPeak: 0.26,
        rotation: 12,
    },
    {
        src: "/dddoodle-pack/misc/misc-32.svg",
        sectionId: "footer",
        side: "left",
        className:
            "left-[-3rem] top-[77%] h-[7.75rem] w-[7.75rem] md:left-[-2rem] md:h-[9.25rem] md:w-[9.25rem] lg:left-[-4rem] lg:top-[74%] lg:h-[13rem] lg:w-[13rem] xl:left-[1.5%] xl:h-[15rem] xl:w-[15rem]",
        background:
            "radial-gradient(circle at 44% 32%, color-mix(in srgb, var(--hero-accent) 18%, transparent) 0%, color-mix(in srgb, var(--hero-sketch-soft) 80%, transparent) 54%, color-mix(in srgb, var(--hero-sketch) 72%, transparent) 100%)",
        anchorProgress: 0.68,
        anchorOffset: 12,
        entryDistance: 250,
        exitDistance: 144,
        floatRotation: 4,
        floatY: 7,
        opacityPeak: 0.24,
        rotation: -8,
    },
];
