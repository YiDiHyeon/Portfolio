"use client";

import { motion } from "framer-motion";
import type { PortfolioFooterContent } from "@/types/portfolio";

interface FooterSectionProps {
    footer: PortfolioFooterContent;
}

const footerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
};

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1, delayChildren: 0.18 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
};

export default function FooterSection({ footer }: FooterSectionProps) {
    const links = [
        { label: "GitHub", href: footer.links.github, external: true },
        { label: "Email", href: footer.links.email, external: false },
        ...(footer.links.blog
            ? [{ label: "Blog", href: footer.links.blog, external: true }]
            : []),
    ];

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.45 }}
            variants={footerVariants}
            className="overflow-hidden"
        >
            <footer className="">
                <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-14">
                    <motion.div
                        variants={containerVariants}
                        className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
                    >
                        <motion.div
                            variants={containerVariants}
                            className="flex flex-wrap items-center gap-5 sm:gap-7"
                        >
                            {links.map((link) => (
                                <motion.a
                                    key={link.label}
                                    variants={itemVariants}
                                    href={link.href}
                                    {...(link.external
                                        ? { target: "_blank", rel: "noreferrer" }
                                        : {})}
                                    className="group relative text-sm font-semibold text-text-secondary transition-colors hover:text-text-primary"
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-0 h-px w-0 bg-text-primary transition-all duration-300 group-hover:w-full" />
                                </motion.a>
                            ))}
                        </motion.div>

                        <motion.p
                            variants={itemVariants}
                            className="text-xs text-text-secondary/50 sm:text-sm"
                        >
                            © 2026 Yi Ji Hyeon
                        </motion.p>
                    </motion.div>
                </div>
            </footer>
        </motion.section>
    );
}
