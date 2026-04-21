import { notFound } from "next/navigation";
import { portfolioPageContent } from "@/lib/portfolio-content";
import ProjectDetailBackground from "./project-detail-background";
import ProjectDetailHero from "./project-detail-hero";
import ProjectDetailSections from "./project-detail-sections";
import ProjectDetailScrollTop from "./project-detail-scroll-top";

interface ProjectDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

const FEATURED_PROJECT_SLUGS = ["tarome", "chap-landing"] as const;

function getProjectBySlug(slug: string) {
    return portfolioPageContent.projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
    return portfolioPageContent.projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetailPage({
    params,
}: ProjectDetailPageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    const useCompactLayout = FEATURED_PROJECT_SLUGS.includes(
        slug as (typeof FEATURED_PROJECT_SLUGS)[number],
    );

    return (
        <main className="relative min-h-screen overflow-x-clip text-text-primary">
            <ProjectDetailScrollTop />
            <ProjectDetailBackground />
            <div className="relative z-20 my-20 md:px-6 lg:my-40 lg:px-10">
                <div className="mx-auto max-w-6xl bg-transparent p-6 sm:px-10 md:border md:border-black/6 md:bg-white md:p-8 md:shadow-[0_18px_48px_rgba(15,23,42,0.08),0_4px_12px_rgba(15,23,42,0.05),0_1px_0_rgba(255,255,255,0.82)_inset] md:dark:border-white/8 md:dark:bg-[#0d1219] md:dark:shadow-[0_22px_54px_rgba(0,0,0,0.34),0_6px_16px_rgba(0,0,0,0.2),0_1px_0_rgba(255,255,255,0.04)_inset] lg:p-14">
                    <ProjectDetailHero project={project} />
                    <div className="mt-14">
                        <ProjectDetailSections
                            project={project}
                            useCompactLayout={useCompactLayout}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
