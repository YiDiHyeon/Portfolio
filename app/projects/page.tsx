import Link from "next/link";
import ProjectCard from "@/components/project-card";
import { portfolioPageContent } from "@/lib/portfolio-content";

export default function ProjectsPage() {
    const projects = portfolioPageContent.projects;

    return (
        <main className="min-h-screen bg-bg text-text-primary">
            <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20 xl:px-10">
                <div className="border-b border-border pb-8">
                    <Link
                        href="/"
                        className="inline-flex text-sm font-semibold text-text-secondary transition-colors hover:text-text-primary"
                    >
                        홈으로 돌아가기
                    </Link>

                    <div className="mt-6 space-y-4">
                        <p className="section-kicker">Selected Work</p>
                        <h1 className="section-display-title">Projects.</h1>
                        <p className="max-w-2xl break-keep text-base leading-relaxed text-text-secondary md:text-lg">
                            프로젝트마다 해결한 문제와 설계 의도를 바로 확인할 수 있도록 정리했습니다.
                        </p>
                    </div>
                </div>

                <div className="mt-10 flex max-w-4xl flex-col gap-7 md:gap-8 lg:gap-10">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </div>
        </main>
    );
}
