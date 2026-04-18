import type { PortfolioProjectContent } from "@/types/portfolio";
import { DetailList, DetailSection } from "./detail-ui";

export function OutcomeSection({ project }: { project: PortfolioProjectContent }) {
    if (!project.outcomes?.length) {
        return null;
    }

    return (
        <DetailSection title="결과">
            {project.outcomes?.length ? (
                <DetailList items={project.outcomes.slice(0, 4)} compact />
            ) : null}
        </DetailSection>
    );
}
