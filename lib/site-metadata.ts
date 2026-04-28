import { portfolioPageContent } from "@/lib/portfolio-content";

export const siteName = "이지현 포트폴리오";
export const siteTitle = "이지현 | Frontend Developer";
export const siteDescription = "운영 가능한 UI를 만드는 프론트엔드 개발자 포트폴리오";
export const siteUrl = "https://yijihyeon.com";
export const siteOrigin = new URL(siteUrl);

export function getProjectBySlug(slug: string) {
    return portfolioPageContent.projects.find((project) => project.slug === slug);
}

export function getProjectPageTitle(projectTitle: string) {
    return `${projectTitle} | ${siteName}`;
}
