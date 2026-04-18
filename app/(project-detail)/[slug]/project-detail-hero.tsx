import Link from "next/link";
import { getProjectTechItems } from "@/lib/project-tech";
import type { PortfolioProjectContent } from "@/types/portfolio";

interface ProjectDetailHeroProps {
    project: PortfolioProjectContent;
}

const HERO_BREADCRUMB_LINK_CLASS_NAME =
    "font-satoshi text-xs text-text-secondary/60 transition-colors hover:text-text-secondary";
const HERO_BREADCRUMB_DIVIDER_CLASS_NAME =
    "text-text-secondary/60";
const HERO_BREADCRUMB_ROW_CLASS_NAME =
    "flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-medium tracking-[0.01em] sm:gap-x-4 sm:text-xs";
const META_LABEL_CLASS_NAME =
    "text-label";
const META_VALUE_CLASS_NAME =
    "text-body break-keep text-text-primary";
const TECH_TAG_CLASS_NAME =
    "font-satoshi inline-flex items-center rounded-full border border-black/10 bg-black/[0.02] px-3 py-1 text-tag text-text-primary dark:border-white/12 dark:bg-white/[0.03]";
const HERO_CTA_CLASS_NAME =
    "inline-flex items-center rounded-full border border-black/10 px-3 py-1.5 text-xs mb-1 sm:mb-2 font-semibold tracking-[0.01em] text-text-primary transition-colors hover:border-orange-strong hover:text-orange-strong dark:border-white/12";

const HERO_CONTENT_BLOCK_CLASS_NAME = "mt-8 max-w-4xl";
const HERO_TITLE_ROW_CLASS_NAME = "mb-6 flex flex-wrap items-end gap-x-4 gap-y-3";
const HERO_META_SECTION_CLASS_NAME =
    "mt-5 border-t border-b border-black/8 py-5 dark:border-gray-700 sm:mt-12 sm:py-10 lg:mt-16 lg:py-12";
const HERO_META_GRID_CLASS_NAME =
    "grid gap-x-8 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-x-10";
const HERO_META_ITEM_CLASS_NAME = "space-y-1";
const HERO_TECH_SECTION_CLASS_NAME = "mt-7 space-y-2";
const HERO_TECH_LIST_CLASS_NAME = "flex flex-wrap gap-2.5";

function getProjectMetaItems(project: PortfolioProjectContent) {
    return [
        { label: "역할", value: project.role },
        { label: "기간", value: project.period },
        { label: "팀", value: project.team ?? "chap" },
    ];
}

export default function ProjectDetailHero({ project }: ProjectDetailHeroProps) {
    const projectMetaItems = getProjectMetaItems(project);
    const techItems = getProjectTechItems(project.tech);

    return (
        <section className="relative">
            <div className="max-w-5xl">
                <div className="max-w-4xl">
                    <div className={HERO_BREADCRUMB_ROW_CLASS_NAME}>
                        <Link
                            href="/#home"
                            className={HERO_BREADCRUMB_LINK_CLASS_NAME}
                        >
                            Home
                        </Link>
                        <span aria-hidden="true" className={HERO_BREADCRUMB_DIVIDER_CLASS_NAME}>/</span>
                        <Link
                            href="/#projects"
                            className={HERO_BREADCRUMB_LINK_CLASS_NAME}
                        >
                            Projects
                        </Link>
                    </div>

                    <div className={HERO_CONTENT_BLOCK_CLASS_NAME}>
                        <div className={HERO_TITLE_ROW_CLASS_NAME}>
                            <h1
                                className="font-satoshi max-w-4xl font-bold tracking-tight text-text-primary text-6xl md:text-7xl lg:text-8xl"
                            >
                                {project.title}
                            </h1>

                            {project.projectUrl ? (
                                <a
                                    href={project.projectUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={HERO_CTA_CLASS_NAME}
                                >
                                    서비스 바로가기
                                </a>
                            ) : null}
                        </div>

                        <p className="text-body-lg max-w-2xl">
                            {project.description}
                        </p>
                    </div>
                </div>

                <div className={HERO_META_SECTION_CLASS_NAME}>
                    <dl className={HERO_META_GRID_CLASS_NAME}>
                        {projectMetaItems.map((item) => (
                            <div key={item.label} className={HERO_META_ITEM_CLASS_NAME}>
                                <dt className={META_LABEL_CLASS_NAME}>{item.label}</dt>
                                <dd className={META_VALUE_CLASS_NAME}>{item.value}</dd>
                            </div>
                        ))}
                    </dl>

                    {techItems.length ? (
                        <div className={HERO_TECH_SECTION_CLASS_NAME}>
                            <p className={META_LABEL_CLASS_NAME}>사용스킬</p>
                            <div className={HERO_TECH_LIST_CLASS_NAME}>
                                {techItems.map((item) => (
                                    <span key={item} className={TECH_TAG_CLASS_NAME}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </section>
    );
}
