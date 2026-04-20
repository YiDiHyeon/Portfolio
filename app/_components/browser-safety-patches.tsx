"use client";

import { useEffect } from "react";

const POINTER_CAPTURE_PATCH_FLAG = "__portfolioSafeReleasePointerCapturePatched__";

interface PatchedElementPrototype extends Element {
    [POINTER_CAPTURE_PATCH_FLAG]?: boolean;
}

export default function BrowserSafetyPatches() {
    useEffect(() => {
        if (typeof Element === "undefined") {
            return;
        }

        const elementPrototype = Element.prototype as PatchedElementPrototype;
        const originalReleasePointerCapture = elementPrototype.releasePointerCapture;

        if (!originalReleasePointerCapture || elementPrototype[POINTER_CAPTURE_PATCH_FLAG]) {
            return;
        }

        elementPrototype.releasePointerCapture = function releasePointerCaptureSafely(
            pointerId: number,
        ) {
            if (typeof this.hasPointerCapture === "function" && !this.hasPointerCapture(pointerId)) {
                return;
            }

            try {
                return originalReleasePointerCapture.call(this, pointerId);
            } catch (error) {
                // framer-motion과 라우팅 전환이 겹칠 때 이미 해제된 포인터를 다시 놓으면서
                // 브라우저가 NotFoundError를 던지는 경우가 있어, 해당 케이스만 무시한다.
                if (error instanceof DOMException && error.name === "NotFoundError") {
                    return;
                }

                throw error;
            }
        };

        elementPrototype[POINTER_CAPTURE_PATCH_FLAG] = true;
    }, []);

    return null;
}
