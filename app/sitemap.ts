import type { MetadataRoute } from "next";
import { portfolioPageContent } from "@/lib/portfolio-content";
import { siteOrigin } from "@/lib/site-metadata";

const updatedAt = new Date("2026-04-28T00:00:00+09:00");

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: siteOrigin.origin,
            lastModified: updatedAt,
            changeFrequency: "monthly",
            priority: 1,
            images: [`${siteOrigin.origin}/og-image.png`],
        },
    ];

    const projectPages = portfolioPageContent.projects.map((project) => ({
        url: `${siteOrigin.origin}/${project.slug}`,
        lastModified: updatedAt,
        changeFrequency: "monthly" as const,
        priority: 0.8,
        images: [`${siteOrigin.origin}/og-image.png`],
    }));

    return [...staticPages, ...projectPages];
}
