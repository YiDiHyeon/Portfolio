import type { ReactNode } from "react";

export const BODY_TEXT_CLASS_NAME = "text-body max-w-3xl";
export const EMPHASIZED_BODY_TEXT_CLASS_NAME = "text-body max-w-3xl text-text-primary";
export const SECTION_STACK_CLASS_NAME = "max-w-5xl";
export const SECTION_TITLE_CLASS_NAME = "text-h2";
export const SECTION_CONTENT_CLASS_NAME = "space-y-6 sm:space-y-7";
export const DECISION_STRONG_LABEL_CLASS_NAME = "text-label";
export const APPROACH_CALLOUT_CLASS_NAME =
    "relative overflow-hidden border border-black/8 bg-black/[0.025] px-6 py-5 dark:border-white/10 dark:bg-white/[0.04] sm:px-8 sm:py-6";
export const NUMBER_BADGE_CLASS_NAME =
    "text-xs font-bold tracking-tighter text-orange-strong sm:text-sm";
export const NUMBERED_HEADER_CLASS_NAME = "flex items-center gap-2.5 sm:gap-3.5";
export const NUMBERED_DIVIDER_CLASS_NAME = "h-px w-4 bg-black/10 dark:bg-white/10 sm:w-6";
export const OVERVIEW_BLOCK_CLASS_NAME = "flex flex-col space-y-2";
export const OVERVIEW_CONTENT_CLASS_NAME = "pl-0 sm:pl-[4.2rem] lg:pt-1";

export function splitParagraphs(text: string): string[] {
    return text
        .split("\n")
        .map((paragraph) => paragraph.trim())
        .filter(Boolean);
}

export function splitSentences(text: string): string[] {
    return text
        .split(/(?<=[.!?])\s+/u)
        .map((sentence) => sentence.trim())
        .filter(Boolean);
}

export function getReadableParagraphs(text: string): string[] {
    return splitParagraphs(text).flatMap((paragraph) => {
        const sentences = splitSentences(paragraph);

        if (sentences.length <= 1) {
            return [paragraph];
        }

        const chunks: string[] = [];

        for (let index = 0; index < sentences.length; index += 2) {
            chunks.push(sentences.slice(index, index + 2).join(" "));
        }

        return chunks;
    });
}

export function DetailSection({ title, children }: { title: string; children: ReactNode }) {
    return (
        <section className="border-t border-black/8 py-16 first:border-t-0 first:pt-0 dark:border-white/10 lg:py-20">
            <h2 className={`mb-6 sm:mb-10 ${SECTION_TITLE_CLASS_NAME}`}>{title}</h2>
            <div className={SECTION_CONTENT_CLASS_NAME}>{children}</div>
        </section>
    );
}

export function DetailText({
    text,
    className = BODY_TEXT_CLASS_NAME,
}: {
    text: string;
    className?: string;
}) {
    const paragraphs = getReadableParagraphs(text);

    if (!paragraphs.length) {
        return null;
    }

    if (paragraphs.length === 1) {
        return (
            <p className={className}>
                <EmphasisInlineText text={paragraphs[0]} />
            </p>
        );
    }

    return (
        <div className="space-y-3 sm:space-y-4">
            {paragraphs.map((paragraph, index) => (
                <p key={`${paragraph}-${index}`} className={className}>
                    <EmphasisInlineText text={paragraph} />
                </p>
            ))}
        </div>
    );
}

export function DetailList({
    items,
    compact = false,
}: {
    items: string[];
    compact?: boolean;
}) {
    return (
        <ul className={`max-w-3xl ${compact ? "space-y-3 sm:space-y-1" : "space-y-4 sm:space-y-5"}`}>
            {items.map((item, index) => (
                <li key={`${item}-${index}`} className="flex items-start gap-2">
                    <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-orange-strong" />
                    <div className="min-w-0 flex-1">
                        <DetailText text={item} className={BODY_TEXT_CLASS_NAME} />
                    </div>
                </li>
            ))}
        </ul>
    );
}

export function getSectionNumber(index: number): string {
    return index.toString().padStart(2, "0");
}

export function NumberBadge({ index }: { index: number }) {
    return <span className={NUMBER_BADGE_CLASS_NAME}>{getSectionNumber(index)}</span>;
}

export function NumberedHeading({
    index,
    title,
    showDivider = true,
}: {
    index: number;
    title: string;
    showDivider?: boolean;
}) {
    return (
        <div className={NUMBERED_HEADER_CLASS_NAME}>
            <NumberBadge index={index} />
            {showDivider ? <div className={NUMBERED_DIVIDER_CLASS_NAME} /> : null}
            <h3 className="text-h3">{title}</h3>
        </div>
    );
}

export function EmphasisInlineText({ text }: { text: string }) {
    const parts = text.split(/(\*\*.*?\*\*|__.*?__)/g);

    return (
        <>
            {parts.map((part, index) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                    return (
                        <strong key={`${part}-${index}`} className="font-semibold text-text-primary">
                            {part.slice(2, -2)}
                        </strong>
                    );
                }

                if (part.startsWith("__") && part.endsWith("__")) {
                    return (
                        <span
                            key={`${part}-${index}`}
                            className="underline decoration-orange-strong/80 decoration-[0.09em] underline-offset-[0.18em]"
                        >
                            {part.slice(2, -2)}
                        </span>
                    );
                }

                return <span key={`${part}-${index}`}>{part}</span>;
            })}
        </>
    );
}
