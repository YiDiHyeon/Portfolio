import Image from "next/image";
import type { PortfolioProjectContent } from "@/types/portfolio";
import { DetailSection, NumberedHeading } from "./detail-ui";

const CORE_DESIGN_CONTENT_CLASS_NAME = "pl-0 sm:pl-[2rem] sm:max-w-[90%] lg:max-w-[85%]";

function ProjectDetailMedia({
    src,
    alt,
}: {
    src: string;
    alt: string;
}) {
    return (
        <div className="relative aspect-[9/16] w-full">
            {src.endsWith(".mov") ? (
                <video
                    src={src}
                    poster={src.replace(".mov", "-thumbnail.jpg")}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-contain object-top"
                    title={alt}
                />
            ) : (
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-contain object-top"
                />
            )}
        </div>
    );
}

function CoreDesignCard({
    item,
    index,
    showImages
}: {
    item: NonNullable<PortfolioProjectContent["keyDesigns"]>[0],
    index: number,
    showImages: boolean
}) {
    const defaultAlt = item.imageAlt ?? `${item.title} 화면`;
    const isDouble = !!(item.imageSrcs && item.imageSrcs.length > 0);
    const hasMedia = showImages && (isDouble || !!item.imageSrc);

    return (
        <article className="flex w-full flex-col space-y-6">
            <div className="flex flex-col space-y-3">
                <NumberedHeading index={index + 1} title={item.title} showDivider={false} />
                <div className={CORE_DESIGN_CONTENT_CLASS_NAME}>
                    <p className="text-body">
                        {item.description}
                    </p>
                </div>
            </div>

            {hasMedia ? (
                <div className="mt-auto flex w-full justify-center pt-2 md:pt-4">
                    {isDouble && item.imageSrcs ? (
                        <div className="grid w-full max-w-[400px] grid-cols-2 gap-3 sm:gap-4">
                            {item.imageSrcs.map((src) => (
                                <div key={src} className="relative w-full">
                                    <ProjectDetailMedia src={src} alt={defaultAlt} />
                                </div>
                            ))}
                        </div>
                    ) : item.imageSrc ? (
                        <div className="relative w-full max-w-[240px] sm:max-w-[280px]">
                            <ProjectDetailMedia src={item.imageSrc} alt={defaultAlt} />
                        </div>
                    ) : null}
                </div>
            ) : null}
        </article>
    );
}

export function CoreDesignSection({
    items,
    showImages,
}: {
    items: NonNullable<PortfolioProjectContent["keyDesigns"]>;
    showImages: boolean;
}) {
    if (!items.length) {
        return null;
    }

    return (
        <DetailSection title="핵심 설계">
            <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 lg:gap-x-16 lg:gap-y-20">
                {items.map((item, idx) => (
                    <CoreDesignCard key={item.title} item={item} index={idx} showImages={showImages} />
                ))}
            </div>
        </DetailSection>
    );
}
