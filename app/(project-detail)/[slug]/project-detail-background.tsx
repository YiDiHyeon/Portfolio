import Image from "next/image";

const DOODLE_IMAGE_CLASS_NAME =
    "object-contain dark:invert";

function GridBackground() {
    return (
        <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
                backgroundImage: `
                    linear-gradient(to right, var(--intro-grid-color) 1px, transparent 1px),
                    linear-gradient(to bottom, var(--intro-grid-color) 1px, transparent 1px)
                `,
                backgroundSize: "16px 16px",
                maskImage: "linear-gradient(to bottom, black 0%, black 72%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 72%, transparent 100%)",
            }}
        />
    );
}

export default function ProjectDetailBackground() {
    return (
        <div
            aria-hidden
            className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-bg"
        >

            <GridBackground />

            <div className="absolute left-[4%] top-[18rem] hidden opacity-[0.08] mix-blend-multiply dark:opacity-[0.12] dark:mix-blend-screen lg:block">
                <Image
                    src="/dddoodle-pack/misc/misc-9.svg"
                    alt=""
                    aria-hidden
                    width={168}
                    height={168}
                    className={`h-36 w-36 xl:h-40 xl:w-40 ${DOODLE_IMAGE_CLASS_NAME}`}
                />
            </div>

            <div className="absolute right-[6%] top-[34rem] hidden opacity-[0.07] mix-blend-multiply dark:opacity-[0.11] dark:mix-blend-screen lg:block">
                <Image
                    src="/dddoodle-pack/arrows/arrow-12.svg"
                    alt=""
                    aria-hidden
                    width={148}
                    height={148}
                    className={`h-32 w-32 xl:h-36 xl:w-36 ${DOODLE_IMAGE_CLASS_NAME}`}
                />
            </div>

            <div className="absolute bottom-[12rem] right-[8%] hidden opacity-[0.06] mix-blend-multiply dark:opacity-[0.1] dark:mix-blend-screen md:block">
                <Image
                    src="/dddoodle-pack/arrows/arrow-2.svg"
                    alt=""
                    aria-hidden
                    width={140}
                    height={140}
                    className={`h-24 w-24 lg:h-28 lg:w-28 ${DOODLE_IMAGE_CLASS_NAME}`}
                />
            </div>

            <div
                className="absolute inset-0 hidden dark:block"
                style={{
                    backgroundImage: [
                        "radial-gradient(circle at 50% 42%, rgba(18,24,36,0.28) 0%, rgba(14,20,31,0.16) 22%, rgba(11,19,32,0) 40%)",
                        "radial-gradient(circle at 50% 60%, rgba(0,0,0,0.16) 0%, rgba(0,0,0,0.56) 74%, rgba(0,0,0,0.88) 100%)",
                    ].join(", "),
                }}
            />
        </div>
    );
}
