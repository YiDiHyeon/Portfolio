import Link from "next/link";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { portfolioPageContent } from "@/lib/portfolio-content";

interface ProjectDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

interface DetailSectionProps {
    title: string;
    children: ReactNode;
}

function DetailSection({ title, children }: DetailSectionProps) {
    return (
        <section className="rounded-[2rem] border border-border bg-card-bg p-6 shadow-sm lg:p-8">
            <p className="text-label-sm font-bold uppercase tracking-label-sm text-text-secondary">
                {title}
            </p>
            <div className="mt-4">{children}</div>
        </section>
    );
}

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

    return (
        <main className="min-h-screen bg-bg text-text-primary">
            <div className="mx-auto max-w-5xl px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
                <div className="space-y-10">
                    <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-text-secondary">
                        <Link href="/" className="transition-colors hover:text-text-primary">
                            홈
                        </Link>
                        <span aria-hidden="true">/</span>
                        <Link href="/projects" className="transition-colors hover:text-text-primary">
                            프로젝트
                        </Link>
                    </div>

                    <div className="space-y-6 border-b border-border pb-8">
                        <div className="space-y-4">
                            <p className="text-label-sm font-bold uppercase tracking-label-md text-orange-strong">
                                {project.period}
                            </p>
                            <h1 className="text-4xl font-extrabold tracking-tight text-text-primary lg:text-5xl">
                                {project.title}
                            </h1>
                            <p className="break-keep text-base leading-relaxed text-text-secondary lg:text-lg">
                                {project.description}
                            </p>
                        </div>

                        <div className="grid gap-6 border-t border-border pt-6 sm:grid-cols-2">
                            <section className="space-y-2">
                                <p className="text-label-sm font-bold uppercase tracking-label-sm text-text-secondary">
                                    역할
                                </p>
                                <p className="text-sm font-semibold text-text-primary">
                                    {project.role}
                                </p>
                            </section>
                            <section className="space-y-2">
                                <p className="text-label-sm font-bold uppercase tracking-label-sm text-text-secondary">
                                    기술
                                </p>
                                <p className="break-keep text-sm leading-relaxed text-text-secondary">
                                    {project.tech.join(" / ")}
                                </p>
                            </section>
                        </div>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-2">
                        <DetailSection title="문제 상황">
                            <p className="break-keep text-base leading-relaxed text-text-secondary">
                                {project.problem}
                            </p>
                        </DetailSection>

                        <DetailSection title="해결 방식">
                            <p className="break-keep text-base leading-relaxed text-text-secondary">
                                {project.solution}
                            </p>
                        </DetailSection>
                    </div>

                    <DetailSection title="구현 포인트">
                        <ul className="space-y-3">
                            {project.implementation.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-3 break-keep text-base leading-relaxed text-text-secondary"
                                >
                                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange-strong" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </DetailSection>

                    <DetailSection title="트러블슈팅">
                        <p className="break-keep text-base leading-relaxed text-text-secondary">
                            {project.troubleshooting}
                        </p>
                    </DetailSection>
                </div>
            </div>
        </main>
    );
}
