import type { PortfolioProjectContent, PortfolioProjectTechnicalSolution } from "@/types/portfolio";
import {
    BODY_TEXT_CLASS_NAME,
    DECISION_STRONG_LABEL_CLASS_NAME,
    DetailSection,
    DetailText,
    EMPHASIZED_BODY_TEXT_CLASS_NAME,
    NumberBadge,
} from "./detail-ui";

interface TechnicalDecisionItemProps {
    item: PortfolioProjectTechnicalSolution;
    index: number;
}

function TechnicalDecisionField({
    label,
    text,
    emphasized = false,
}: {
    label: string;
    text: string;
    emphasized?: boolean;
}) {
    return (
        <div className="space-y-1">
            <p className={DECISION_STRONG_LABEL_CLASS_NAME}>{label}</p>
            <DetailText
                text={text}
                className={emphasized ? EMPHASIZED_BODY_TEXT_CLASS_NAME : BODY_TEXT_CLASS_NAME}
            />
        </div>
    );
}

function TechnicalDecisionItem({ item, index }: TechnicalDecisionItemProps) {
    return (
        <article className="space-y-6 pt-5 sm:space-y-7 sm:pt-6">
            <div className="flex items-center gap-2.5 sm:gap-3.5">
                <NumberBadge index={index + 1} />
                <div className="h-px w-4 bg-black/10 dark:bg-white/10 sm:w-6" />
                <h3 className="text-h3">{item.keyword}</h3>
            </div>

            <div className="space-y-6">
                <TechnicalDecisionField label="문제" text={item.problem} />
                <TechnicalDecisionField label="해결" text={item.solution} emphasized />
                <TechnicalDecisionField label="결과" text={item.result} emphasized />
            </div>
        </article>
    );
}

function getGridClassName(count: number) {
    if (count >= 3) {
        return "grid gap-8 lg:grid-cols-3 lg:gap-10";
    }

    if (count === 2) {
        return "grid gap-8 sm:grid-cols-2 lg:gap-10";
    }

    return "grid gap-8";
}

function getTechnicalSolutions(
    project: PortfolioProjectContent,
): PortfolioProjectTechnicalSolution[] {
    return (project.technicalSolutions ?? []).filter(
        (item): item is PortfolioProjectTechnicalSolution => typeof item !== "string",
    );
}

export function TechnicalDecisionsSection({ project }: { project: PortfolioProjectContent }) {
    const technicalSolutions = getTechnicalSolutions(project);

    if (!technicalSolutions.length) {
        return null;
    }

    return (
        <DetailSection title="기술적 의사결정">
            <div className={getGridClassName(technicalSolutions.length)}>
                {technicalSolutions.map((item, index) => (
                    <TechnicalDecisionItem key={item.keyword} item={item} index={index} />
                ))}
            </div>
        </DetailSection>
    );
}

export function TroubleshootingSection({ project }: { project: PortfolioProjectContent }) {
    if (!project.troubleshooting) {
        return null;
    }

    return (
        <DetailSection title="트러블슈팅">
            <DetailText text={project.troubleshooting} className="text-body max-w-4xl" />
        </DetailSection>
    );
}
