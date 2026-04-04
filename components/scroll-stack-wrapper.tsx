import type { ReactNode } from "react";

interface ScrollStackWrapperProps {
    children: ReactNode;
    zIndex: number;
}

export default function ScrollStackWrapper({ children, zIndex }: ScrollStackWrapperProps) {
    return (
        <div
            style={{
                position: "relative",
                zIndex,
            }}
            className="w-full"
        >
            {children}
        </div>
    );
}
