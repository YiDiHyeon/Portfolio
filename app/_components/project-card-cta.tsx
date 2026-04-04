interface ProjectCardCtaProps {
    inverted?: boolean;
}

export default function ProjectCardCta({ inverted = false }: ProjectCardCtaProps) {
    return (
        <span
            className={`inline-flex items-center gap-3 text-sm font-semibold transition-colors ${
                inverted
                    ? "text-white/92 group-hover:text-white"
                    : "text-text-primary group-hover:text-orange-strong"
            }`}
        >
            <span>View Project</span>
            <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
            >
                →
            </span>
        </span>
    );
}
