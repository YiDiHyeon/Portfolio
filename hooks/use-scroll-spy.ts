import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[]) {
    const pathname = usePathname();
    const [activeId, setActiveId] = useState<string>(ids[0] ?? "");
    const idsKey = ids.join("::");

    useEffect(() => {
        const targetIds = idsKey ? idsKey.split("::") : [];

        if (!targetIds.length) {
            return;
        }

        let animationFrameId: number | null = null;
        let elements = targetIds
            .map((id) => document.getElementById(id))
            .filter((element): element is HTMLElement => element !== null);

        const getActiveSectionId = () => {
            const offset = window.innerHeight * 0.35;
            const currentScrollY = window.scrollY + offset;

            let nextActiveId = targetIds[0] ?? "";

            elements.forEach((element) => {
                const { id } = element;
                if (element.offsetTop <= currentScrollY) {
                    nextActiveId = id;
                }
            });

            return nextActiveId;
        };

        const updateActiveSection = () => {
            animationFrameId = null;
            const nextActiveId = getActiveSectionId();

            setActiveId((previousActiveId) => (
                previousActiveId === nextActiveId ? previousActiveId : nextActiveId
            ));
        };

        const scheduleUpdate = () => {
            if (animationFrameId !== null) {
                return;
            }

            animationFrameId = window.requestAnimationFrame(updateActiveSection);
        };

        const handleResize = () => {
            elements = targetIds
                .map((id) => document.getElementById(id))
                .filter((element): element is HTMLElement => element !== null);
            scheduleUpdate();
        };

        scheduleUpdate();

        window.addEventListener("scroll", scheduleUpdate, { passive: true });
        window.addEventListener("resize", handleResize);

        return () => {
            if (animationFrameId !== null) {
                window.cancelAnimationFrame(animationFrameId);
            }

            window.removeEventListener("scroll", scheduleUpdate);
            window.removeEventListener("resize", handleResize);
        };
    }, [idsKey, pathname]);

    return activeId;
}
