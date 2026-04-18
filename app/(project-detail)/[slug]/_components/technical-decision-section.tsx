import type { PortfolioProjectContent, PortfolioProjectTechnicalSolution } from "@/types/portfolio";
import {
    BODY_TEXT_CLASS_NAME,
    DECISION_STRONG_LABEL_CLASS_NAME,
    DetailSection,
    DetailText,
    EMPHASIZED_BODY_TEXT_CLASS_NAME,
    NumberBadge,
    splitSentences,
} from "./detail-ui";

interface TechnicalDecisionBlock {
    title: string;
    problem: string;
    solution: string;
    result: string;
}

function isStructuredTechnicalSolution(
    item: string | PortfolioProjectTechnicalSolution,
): item is PortfolioProjectTechnicalSolution {
    return typeof item !== "string";
}

function buildFallbackTechnicalDecisionBlocks(
    project: PortfolioProjectContent,
    items: string[],
): TechnicalDecisionBlock[] {
    const troubleshootingSentences = splitSentences(project.troubleshooting);
    const troubleshootingProblem = troubleshootingSentences[0] ?? project.problem;
    const troubleshootingResult =
        troubleshootingSentences.slice(1).join(" ").trim() || project.solution;
    const lastOutcome = project.outcomes?.length
        ? project.outcomes[project.outcomes.length - 1]
        : undefined;
    const primarySolution = items.slice(0, 2).join("\n");
    const secondarySolution = items.slice(2).join("\n") || project.solution;
    const primaryResult =
        project.outcomes?.[0]
        ?? project.outcomes?.[1]
        ?? troubleshootingResult;
    const secondaryResult =
        project.outcomes?.[1]
        ?? lastOutcome
        ?? troubleshootingResult;

    const blocks: TechnicalDecisionBlock[] = [];

    if (primarySolution) {
        blocks.push({
            title: "Decision 01",
            problem: troubleshootingProblem,
            solution: primarySolution,
            result: primaryResult,
        });
    }

    if (secondarySolution) {
        blocks.push({
            title: "Decision 02",
            problem: project.problem,
            solution: secondarySolution,
            result: secondaryResult,
        });
    }

    if (!blocks.length) {
        blocks.push({
            title: "Decision 01",
            problem: troubleshootingProblem,
            solution: troubleshootingResult,
            result: primaryResult,
        });
    }

    return blocks.slice(0, 2);
}

function getTechnicalDecisionBlocks(project: PortfolioProjectContent): TechnicalDecisionBlock[] {
    if (!project.technicalSolutions?.length) {
        const troubleshootingSentences = splitSentences(project.troubleshooting);

        return [
            {
                title: "Decision 01",
                problem: troubleshootingSentences[0] ?? project.problem,
                solution: troubleshootingSentences.slice(1).join(" ").trim() || project.solution,
                result: project.outcomes?.[0] ?? project.solution,
            },
        ];
    }

    const firstItem = project.technicalSolutions[0];

    if (isStructuredTechnicalSolution(firstItem)) {
        return project.technicalSolutions
            .filter(isStructuredTechnicalSolution)
            .slice(0, 2)
            .map((item) => ({
                title: item.keyword,
                problem: item.problem,
                solution: item.solution,
                result: item.result,
            }));
    }

    return buildFallbackTechnicalDecisionBlocks(
        project,
        project.technicalSolutions.filter((item): item is string => typeof item === "string"),
    );
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

function TechnicalDecisionItem({
    block,
    index,
}: {
    block: TechnicalDecisionBlock;
    index: number;
}) {
    return (
        <article className="space-y-6 pt-5 sm:space-y-7 sm:pt-6">
            <div className="flex items-center gap-2.5 sm:gap-3.5">
                <NumberBadge index={index + 1} />
                <div className="h-px w-4 bg-black/10 dark:bg-white/10 sm:w-6" />
                <h3 className="text-h3">
                    {block.title}
                </h3>
            </div>

            <div className="space-y-6">
                <TechnicalDecisionField label="문제" text={block.problem} />
                <TechnicalDecisionField label="해결" text={block.solution} emphasized />
                <TechnicalDecisionField label="결과" text={block.result} emphasized />
            </div>
        </article>
    );
}

export function TechnicalDecisionsSection({ project }: { project: PortfolioProjectContent }) {
    const decisionBlocks = getTechnicalDecisionBlocks(project);

    return (
        <DetailSection title="기술적 의사결정">
            <div className="grid gap-8 sm:grid-cols-2 lg:gap-10">
                {decisionBlocks.map((block, index) => (
                    <TechnicalDecisionItem key={block.title} block={block} index={index} />
                ))}
            </div>
        </DetailSection>
    );
}
