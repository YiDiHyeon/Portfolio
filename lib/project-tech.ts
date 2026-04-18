import type { PortfolioProjectTech, PortfolioProjectTechGroup } from "@/types/portfolio";

export function isStructuredProjectTech(
    tech: PortfolioProjectTech,
): tech is PortfolioProjectTechGroup[] {
    const firstItem = tech[0];

    return typeof firstItem === "object" && firstItem !== null && "items" in firstItem;
}

export function getProjectTechItems(tech: PortfolioProjectTech): string[] {
    if (!isStructuredProjectTech(tech)) {
        return tech;
    }

    return tech.flatMap((group) => group.items);
}
