import FooterSection from "./_components/footer-section";
import HeroAmbientBackground from "./_components/hero-ambient-background";
import IntroSection from "./_components/intro-section";
import ExperienceSection from "./_components/experience-section";
import ProjectsSection from "./_components/projects-section";
import ProfileSection from "./_components/profile-section";
import { portfolioPageContent } from "@/lib/portfolio-content";

export default function Home() {
    return (
        <main className="relative min-h-screen overflow-x-clip bg-bg text-text-primary">
            <HeroAmbientBackground />

            <div id="home" className="relative z-10 flex min-h-[100svh] w-full items-center md:min-h-screen">
                <IntroSection intro={portfolioPageContent.intro} />
            </div>

            <div id="profile" className="relative z-10 w-full">
                <ProfileSection profile={portfolioPageContent.profile} />
            </div>

            <div id="experience" className="relative z-10 w-full scroll-mt-[var(--mobile-header-offset)] lg:scroll-mt-0">
                <ExperienceSection experiences={portfolioPageContent.experiences} />
            </div>

            <div id="projects" className="relative z-10 w-full scroll-mt-[var(--mobile-header-offset)] lg:scroll-mt-0">
                <ProjectsSection projects={portfolioPageContent.projects} />
            </div>

            <div id="footer" className="relative z-10 w-full">
                <FooterSection footer={portfolioPageContent.footer} />
            </div>
        </main>
    );
}
