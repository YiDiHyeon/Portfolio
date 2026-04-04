export interface PortfolioProfile {
    displayName: string;
    jobTitle: string;
    githubUrl: string;
    email: string;
}

export interface PortfolioIntroContent {
    eyebrow: string;
    description: string;
}

export interface PortfolioExperienceProject {
    name: string;
    keyPoints: string[];
    points: string[];
}

export interface PortfolioExperienceItem {
    company: string;
    companyEn: string;
    period: string;
    team: string;
    role: string;
    projects: PortfolioExperienceProject[];
}

export interface PortfolioProjectContent {
    slug: string;
    title: string;
    description: string;
    explanation: string;
    hoverText: string;
    thumbnailSrc?: string;
    role: string;
    period: string;
    tech: string[];
    problem: string;
    solution: string;
    implementation: string[];
    troubleshooting: string;
}

export interface PortfolioFooterContent {
    githubUrl: string;
    email: string;
    resumeUrl?: string;
}

export interface PortfolioPageContent {
    profile: PortfolioProfile;
    intro: PortfolioIntroContent;
    experiences: PortfolioExperienceItem[];
    projects: PortfolioProjectContent[];
    footer: PortfolioFooterContent;
}
