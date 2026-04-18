export interface SectionNavigationItem {
    name: string;
    href: `#${string}`;
    id: string;
}

export const sectionNavigationItems: SectionNavigationItem[] = [
    {
        name: "Home",
        href: "#home",
        id: "home",
    },
    {
        name: "Profile",
        href: "#profile",
        id: "profile",
    },
    {
        name: "Experience",
        href: "#experience",
        id: "experience",
    },
    {
        name: "Projects",
        href: "#projects",
        id: "projects",
    },
];

export const sectionNavigationIds: string[] = sectionNavigationItems.map((item) => item.id);
