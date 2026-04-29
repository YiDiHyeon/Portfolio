export interface PortfolioProfileSkillGroup {
    label: string;
    items: string[];
}

export interface PortfolioProfileLinks {
    github: string;
    email: string;
    blog?: string;
}

export interface PortfolioProfile {
    displayName: string;
    name: string;
    history: string;
    jobTitle: string;
    tagline: string;
    summary: string[];
    skills: PortfolioProfileSkillGroup[];
    links: PortfolioProfileLinks;
    location?: string;
}

export interface PortfolioIntroContent {
    eyebrow: string;
    description: string;
}

export interface PortfolioExperienceProject {
    name: string;
    keyPoints: string[];
    points: string[];
    url?: string;
}

export interface PortfolioExperienceItem {
    company: string;
    companyEn: string;
    companyDescription: string;
    period: string;
    team: string;
    role: string;
    projects: PortfolioExperienceProject[];
}

export interface PortfolioProjectDetailItem {
    title: string;
    description: string;
    imageAlt?: string;
    imageSrc?: string;
    imageSrcs?: string[];
}

export interface PortfolioProjectTechnicalSolution {
    keyword: string;
    problem: string;
    solution: string;
    result: string;
}

export interface PortfolioProjectTechGroup {
    title: string;
    items: string[];
}

export type PortfolioProjectTech = string[] | PortfolioProjectTechGroup[];

export interface PortfolioProjectResponsibilityGroup {
    title: string;
    items?: string[];
}

export type PortfolioProjectResponsibilities =
    | string[]
    | PortfolioProjectResponsibilityGroup[];

export interface PortfolioProjectContent {
    slug: string;
    title: string;
    description: string;
    explanation: string;
    hoverText: string;
    heroEyebrow?: string;
    thumbnailSrc?: string;
    devicePreviewSrc?: string;
    projectUrl?: string;
    role: string;
    period: string;
    platform?: string;
    agency?: string;
    team?: string;
    tech: PortfolioProjectTech;
    problem?: string;
    solution?: string;
    implementation?: string[];
    troubleshooting?: string;
    overview?: string;
    summaryLine?: string;
    goals?: string[];
    coreFeature?: string[];
    responsibilities?: PortfolioProjectResponsibilities;
    keyDesigns?: PortfolioProjectDetailItem[];
    technicalSolutions?: string[] | PortfolioProjectTechnicalSolution[];
    outcomes?: string[];
    retrospective?: string[];
    closingNote?: string;
}

export interface PortfolioFooterContent {
    links: PortfolioProfileLinks;
    resumeUrl?: string;
}

export interface PortfolioPageContent {
    profile: PortfolioProfile;
    intro: PortfolioIntroContent;
    experiences: PortfolioExperienceItem[];
    projects: PortfolioProjectContent[];
    footer: PortfolioFooterContent;
}

export interface FeaturedProjectsContent {
    id: string;
    company: string;
    title: string;
    summary: string;
    period: string;
    role: string;
    contribution?: string;
    team?: string;
    platform?: string;
    techStack: string[];
    overview: string[];
    keyFeatures: string[];
    responsibilities: string[];
    challenges: {
        title: string;
        description: string;
    }[];

    implementation: string[];
    outcome: string[];
    links?: {
        label: string;
        url: string;
    }[];
}
