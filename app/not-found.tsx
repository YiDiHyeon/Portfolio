import Link from "next/link";

export default function NotFound() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-bg text-text-primary">
            <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl items-center px-6 py-24 md:px-10">
                <div className="max-w-2xl space-y-8">
                    <div className="space-y-3">
                        <p className="font-nav text-sm font-bold tracking-[0.18em] text-orange-strong uppercase">
                            404
                        </p>
                        <h1 className="text-h1 max-w-xl">
                            요청하신 페이지를 찾을 수 없습니다.
                        </h1>
                        <p className="text-body max-w-lg">
                            주소가 변경되었거나, 더 이상 존재하지 않는 페이지입니다.
                            홈으로 돌아가 프로젝트와 경력을 다시 확인할 수 있습니다.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <Link
                            href="/#home"
                            className="inline-flex items-center rounded-full border border-black/10 px-4 py-2 text-sm font-semibold text-text-primary transition-colors hover:border-orange-strong hover:text-orange-strong dark:border-white/12"
                        >
                            Home으로 이동
                        </Link>
                        <Link
                            href="/#projects"
                            className="inline-flex items-center rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-orange-strong hover:text-orange-strong dark:border-white/12"
                        >
                            Projects 보기
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
