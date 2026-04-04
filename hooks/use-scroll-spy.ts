import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[], options?: IntersectionObserverInit) {
    const [activeId, setActiveId] = useState<string>(ids[0] ?? "");
    const idsKey = ids.join("::");

    useEffect(() => {
        const targetIds = idsKey ? idsKey.split("::") : [];
        const visibleIds = new Set<string>();
        const elements = targetIds
            .map((id) => document.getElementById(id))
            .filter((element): element is HTMLElement => element !== null);

        const observer = new IntersectionObserver((entries) => {
            let isChanged = false;

            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    visibleIds.add(entry.target.id);
                    isChanged = true;
                } else {
                    visibleIds.delete(entry.target.id);
                    isChanged = true;
                }
            });

            if (isChanged) {
                const active = [...targetIds].reverse().find((id) => visibleIds.has(id));
                if (active) {
                    setActiveId(active);
                } else if (window.scrollY === 0 || document.getElementById("main-scroll-container")?.scrollTop === 0) {
                    setActiveId(targetIds[0] ?? "");
                }
            }
        }, {
            rootMargin: "-20% 0px -70% 0px",
            threshold: 0,
            ...options,
        });

        elements.forEach((element) => observer.observe(element));

        return () => {
            observer.disconnect();
            visibleIds.clear();
        };
    }, [idsKey, options]);

    return activeId;
}
