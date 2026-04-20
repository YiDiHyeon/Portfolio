import type { PortfolioProjectContent } from "@/types/portfolio";
import { DetailSection, EmphasisInlineText } from "./detail-ui";

function RetrospectiveList({ items }: { items: string[] }) {
    return (
        <ul className="space-y-3 sm:space-y-1">
            {items.map((item, index) => (
                <li key={`${item}-${index}`} className="flex items-start gap-2">
                    <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-orange-strong" />
                    <div className="text-body min-w-0">
                        <EmphasisInlineText text={item} />
                    </div>
                </li>
            ))}
        </ul>
    );
}

export function RetrospectiveSection({ project }: { project: PortfolioProjectContent }) {
    const reflectionItems = project.retrospective ?? [];
    const closingNote = project.closingNote ?? null;

    if (!reflectionItems.length && !closingNote) {
        return null;
    }

    return (
        <DetailSection title="회고">
            {reflectionItems.length ? (
                <RetrospectiveList items={reflectionItems} />
            ) : null}

            {closingNote ? (
                <div className="max-w-xl pt-5 dark:border-white/10 sm:pt-6">
                    <p className="text-lg break-keep font-medium text-[#333333] dark:text-white">
                        <EmphasisInlineText text={closingNote} />
                    </p>
                </div>
            ) : null}
        </DetailSection>
    );
}
