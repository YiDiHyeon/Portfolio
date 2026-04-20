import { animate, type AnimationPlaybackControls } from "framer-motion";

const SCROLL_CANCEL_KEYS = new Set([
    " ",
    "ArrowDown",
    "ArrowUp",
    "End",
    "Home",
    "PageDown",
    "PageUp",
]);

let activeScrollAnimation: AnimationPlaybackControls | null = null;
let removeInteractionListeners: (() => void) | null = null;

function clearScrollAnimationState() {
    removeInteractionListeners?.();
    removeInteractionListeners = null;
    activeScrollAnimation = null;
}

export function stopActiveScrollAnimation() {
    activeScrollAnimation?.stop();
    clearScrollAnimationState();
}

function registerInteractionListeners() {
    const stopOnInteraction = () => {
        stopActiveScrollAnimation();
    };

    const stopOnKeydown = (event: KeyboardEvent) => {
        if (SCROLL_CANCEL_KEYS.has(event.key)) {
            stopActiveScrollAnimation();
        }
    };

    window.addEventListener("keydown", stopOnKeydown);
    window.addEventListener("touchmove", stopOnInteraction, { passive: true });
    window.addEventListener("touchstart", stopOnInteraction, { passive: true });
    window.addEventListener("wheel", stopOnInteraction, { passive: true });

    removeInteractionListeners = () => {
        window.removeEventListener("keydown", stopOnKeydown);
        window.removeEventListener("touchmove", stopOnInteraction);
        window.removeEventListener("touchstart", stopOnInteraction);
        window.removeEventListener("wheel", stopOnInteraction);
    };
}

export function startScrollAnimation(targetY: number) {
    stopActiveScrollAnimation();
    registerInteractionListeners();

    const controls: AnimationPlaybackControls = animate(window.scrollY, targetY, {
        type: "spring",
        stiffness: 50,
        damping: 14,
        mass: 0.8,
        restDelta: 0.5,
        onUpdate: (latest) => {
            window.scrollTo(0, latest);
        },
        onComplete: () => {
            if (activeScrollAnimation === controls) {
                clearScrollAnimationState();
            }
        },
    });

    activeScrollAnimation = controls;

    return controls;
}
