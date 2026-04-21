import type { ReactNode } from "react";
import type { PortfolioProjectContent } from "@/types/portfolio";
import {
    APPROACH_CALLOUT_CLASS_NAME,
    DetailList,
    DetailSection,
    DetailText,
    EmphasisInlineText,
    NumberedHeading,
    OVERVIEW_BLOCK_CLASS_NAME,
    OVERVIEW_CONTENT_CLASS_NAME,
} from "./detail-ui";

function OverviewBlock({
    index,
    title,
    children,
}: {
    index: number;
    title: string;
    children: ReactNode;
}) {
    return (
        <div className={OVERVIEW_BLOCK_CLASS_NAME}>
            <NumberedHeading index={index} title={title} />
            <div className={OVERVIEW_CONTENT_CLASS_NAME}>{children}</div>
        </div>
    );
}

export function OverviewSection({ project }: { project: PortfolioProjectContent }) {
    let index = 1;
    const hasSummary = Boolean(project.summaryLine || project.overview);
    const hasProblemBlock = Boolean(project.problem);
    const hasSolution = Boolean(project.solution);
    const implementationItems = project.implementation ?? [];
    const hasImplementation = implementationItems.length > 0;
    const solutionTitle = project.problem ? "해결 방식" : "구현 방식";

    if (!hasSummary && !hasProblemBlock && !hasSolution && !hasImplementation && !project.coreFeature?.length) {
        return null;
    }

    return (
        <DetailSection title="프로젝트 개요">
            <div className="flex flex-col gap-10 sm:gap-10 lg:gap-16">
                {hasSummary ? (
                    <OverviewBlock index={index++} title="요약">
                        <div className={`${APPROACH_CALLOUT_CLASS_NAME} mt-2 sm:mt-0`}>
                            <div className="absolute inset-y-0 left-0 w-[0.15rem] bg-orange-strong/80" />
                            <div className="space-y-3 pl-1 sm:space-y-4 sm:pl-2">
                                {project.overview ? (
                                    <DetailText
                                        text={project.overview}
                                        className="text-body max-w-4xl text-text-secondary"
                                    />
                                ) : null}
                            </div>
                        </div>
                    </OverviewBlock>
                ) : null}

                {hasProblemBlock ? (
                    <OverviewBlock index={index++} title="문제 정의">
                        <DetailText text={project.problem!} className="text-body" />
                    </OverviewBlock>
                ) : null}

                {hasSolution ? (
                    <OverviewBlock index={index++} title={solutionTitle}>
                        <DetailText
                            text={project.solution!}
                            className="text-body max-w-4xl text-text-primary"
                        />
                    </OverviewBlock>
                ) : null}

                {hasImplementation ? (
                    <OverviewBlock index={index++} title="구현 포인트">
                        <DetailList items={implementationItems} compact />
                    </OverviewBlock>
                ) : null}

                {project.coreFeature?.length ? (
                    <OverviewBlock index={index++} title="주요 기능">
                        <ul className="space-y-2 sm:space-y-3">
                            {project.coreFeature.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start gap-3 sm:gap-4">
                                    <svg className="mt-[0.2rem] h-4 w-4 shrink-0 text-orange-strong sm:mt-[0.25rem] sm:h-[1.15rem] sm:w-[1.15rem]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <p className="text-body min-w-0">
                                        <EmphasisInlineText text={feature} />
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </OverviewBlock>
                ) : null}
            </div>
        </DetailSection>
    );
}
