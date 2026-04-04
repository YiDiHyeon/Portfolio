import FooterSection from "./_components/footer-section";
import IntroSection from "./_components/intro-section";
import ExperienceSection from "./_components/experience-section";
import ProjectsSection from "./_components/projects-section";
import ScrollStackWrapper from "@/components/scroll-stack-wrapper";
import { portfolioPageContent } from "@/lib/portfolio-content";

export default function Home() {
    return (
        <main className="text-text-primary lg:min-h-full bg-bg relative">
            <div id="intro" className="sticky top-0 z-0 h-screen overflow-hidden">
                <IntroSection intro={portfolioPageContent.intro} />
            </div>
            <div id="experience" className="relative z-10 w-full bg-bg scroll-mt-[var(--mobile-header-offset)] lg:scroll-mt-0">
                <ScrollStackWrapper zIndex={10}>
                    <ExperienceSection experiences={portfolioPageContent.experiences} />
                </ScrollStackWrapper>
            </div>
            <div
                id="projects"
                className="relative z-20 -mt-[var(--mobile-section-overlap)] w-full bg-bg shadow-section scroll-mt-[var(--mobile-header-offset)] lg:-mt-[14vh] lg:scroll-mt-0"
            >
                <ScrollStackWrapper zIndex={20}>
                    <ProjectsSection projects={portfolioPageContent.projects} />
                </ScrollStackWrapper>
            </div>
            <div id="footer" className="relative z-30 w-full bg-bg">
                <ScrollStackWrapper zIndex={30}>
                    <FooterSection footer={portfolioPageContent.footer} />
                </ScrollStackWrapper>
            </div>
        </main>
    );
}
