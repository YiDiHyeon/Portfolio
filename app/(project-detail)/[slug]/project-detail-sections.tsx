import type { PortfolioProjectContent } from "@/types/portfolio";
import { SECTION_STACK_CLASS_NAME } from "./_components/detail-ui";
import { OverviewSection } from "./_components/overview-section";
import { CoreDesignSection } from "./_components/core-design-section";
import {
    TechnicalDecisionsSection,
    TroubleshootingSection,
} from "./_components/technical-decision-section";
import { OutcomeSection } from "./_components/outcome-section";
import { RetrospectiveSection } from "./_components/retrospective-section";

interface ProjectDetailSectionsProps {
    project: PortfolioProjectContent;
    useCompactLayout: boolean;
}

export default function ProjectDetailSections({
    project,
    useCompactLayout,
}: ProjectDetailSectionsProps) {
    return (
        <div className={SECTION_STACK_CLASS_NAME}>
            <OverviewSection project={project} />

            {project.keyDesigns?.length ? (
                <CoreDesignSection items={project.keyDesigns} showImages={useCompactLayout} />
            ) : null}

            <TechnicalDecisionsSection project={project} />
            <TroubleshootingSection project={project} />
            <OutcomeSection project={project} />
            <RetrospectiveSection project={project} />
        </div>
    );
}
