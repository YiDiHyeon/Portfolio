import type {
    PortfolioExperienceItem,
    PortfolioPageContent,
    PortfolioProfile,
    PortfolioProjectContent,
} from "@/types/portfolio";

const profile: PortfolioProfile = {
    displayName: "Yi Ji Hyeon",
    name: "이지현",
    history: "3년 4개월",
    jobTitle: "Frontend Developer",
    tagline: "실무 중심 UI를 구현하는 프론트엔드 개발자",
    summary: [
        "복잡한 서비스 흐름을 운영 가능한 UI로 정리합니다.",
        "백엔드 제약 속에서도 프론트에서 해결 가능한 구조를 고민합니다.",
    ],
    skills: {
        primary: ["Vue 3", "Nuxt 3","React", "Next.js"],
        etc: ["TypeScript", "Tailwind", "Pinia", "React Query"],
    },
    links: {
        github: "https://github.com/YiDiHyeon",
        email: "mailto:d22_22b@naver.com",
        blog: "https://velog.io/@d2222b",
    },
    location: "Seoul, Korea",
};

const experiences: PortfolioExperienceItem[] = [
    {
        company: "(주)아이온커뮤니케이션즈",
        companyEn: "AION COMMUNICATIONS",
        period: "2024.04 ~ 2025.06",
        team: "연구본부",
        role: "주임연구원 · 프론트엔드 개발",
        projects: [
            {
                name: "한국방송통신대학교 학사정보 모바일 시스템 구축",
                keyPoints: ["Nuxt3", "Vue3", "Dynamic Form", "Data Processing"],
                points: [
                    "기존 JSP 기반 서비스 흐름을 참고해 Vue 3 Composition API 환경에서 화면과 API 연동 구현",
                    "입학 프로세스 내 20여 개 조건부 동적 폼 및 연쇄 초기화 로직 구현",
                    "백엔드 수정이 제한된 환경에서 Computed와 Util 기반 데이터 재가공 구조 적용",
                    "useAsyncData와 Promise.all 구조 개선으로 데이터 로딩 흐름 정리",
                ],
            },
            {
                name: "케이뱅크 개인화 플랫폼 구축",
                keyPoints: ["Next.js", "TypeScript", "A/B Testing", "4-step Flow"],
                points: [
                    "A/B 테스트 실험 관리용 4단계 입력 플로우를 구현",
                    "기획서 기반 UX를 정의하고 목업 데이터를 활용한 선개발 수행",
                    "Next.js와 Ant Design 환경에서 운영 게시판 CRUD 구현",
                    "금융권 QA 프로세스 대응과 결함 수정 진행",
                ],
            },
            {
                name: "한진칼 CMS 솔루션 기반 웹사이트 구축",
                keyPoints: ["Nuxt3", "TypeScript", "CMS", "Component Customizing"],
                points: [
                    "UI 컴포넌트를 CMS 빌더와 연결하기 위한 JSON Schema 규격 정의와 프론트 연계 방식 정리",
                    "솔루션 표준 영역과 커스텀 영역을 분리해 현업과 연구소 간 기술 조율 수행",
                ],
            },
        ],
    },
    {
        company: "웰로(주)",
        companyEn: "Wello",
        period: "2021.11 ~ 2023.01",
        team: "프론트엔드팀",
        role: "프론트엔드 개발",
        projects: [
            {
                name: "웰로 B2C 정책 추천 서비스",
                keyPoints: ["Vue2", "Filtering Logic", "Survey UI", "Canvas"],
                points: [
                    "연령과 조건별 정책 필터링 로직을 적용한 리스트 및 상세 UI 구현",
                    "Canvas 기반 디지털 서명 패드와 설문 컴포넌트 개발",
                ],
            },
            {
                name: "웰로비즈 B2B SaaS",
                keyPoints: ["Nuxt2", "SSR", "SEO", "Dashboard UI"],
                points: [
                    "Nuxt SSR 기반 프로젝트 초기 환경 설정과 공통 모듈 구축",
                    "asyncData 기반 동적 메타 태그 처리와 전역 SVG 아이콘 컴포넌트 설계",
                    "vuedraggable을 활용한 칸반보드 Drag & Drop UI 구현",
                ],
            },
            {
                name: "[어드민] 사내 통합 관리 백오피스",
                keyPoints: ["Vue2", "Admin", "Chart", "Data Validation"],
                points: [
                    "TOAST UI Chart를 활용한 주요 지표 시각화 대시보드 구현",
                    "수신자 엑셀 업로드와 데이터 정합성 검증, 검색 및 매칭 모듈 개발",
                ],
            },
        ],
    },
    {
        company: "(주)위펀",
        companyEn: "wefun",
        period: "2021.02 ~ 2021.11",
        team: "프론트엔드팀",
        role: "프론트엔드 개발",
        projects: [
            {
                name: "서비스 랜딩페이지 리뉴얼",
                keyPoints: ["Vue2", "Performance", "Lazy Loading", "Scroll Interaction"],
                points: [
                    "Intersection Observer 기반 Lazy-loading 공통 컴포넌트 개발",
                    "Sticky 기반 스크롤 인터랙션 애니메이션 구현",
                    "Header와 Footer 공통 컴포넌트 분리로 개발 리소스 절감",
                ],
            },
            {
                name: "[생일24] 모바일 웹뷰 및 서비스 페이지 개발",
                keyPoints: ["Vue2", "Mobile WebView", "User Flow", "Barcode Rendering"],
                points: [
                    "약관 동의, 선물 선택, 개인정보 입력 등 모바일 사용자 플로우 구현",
                    "바코드 데이터 기반 이미지 생성 컴포넌트 개발",
                ],
            },
        ],
    },
];

const projects: PortfolioProjectContent[] = [
    {
        slug: "tarome",
        title: "Tarome",
        description: "카드 선택부터 AI 리딩, 후속 채팅까지 이어지는 인터랙티브 타로 서비스",
        explanation: "단계형 UX와 권한 제어로 리딩 흐름을 재구성한 서비스",
        hoverText: "카드 선택, 결과, 채팅이 끊기지 않도록 하나의 리딩 흐름으로 재구성했습니다.",
        heroEyebrow: "AI Tarot Service Project",
        thumbnailSrc: "/thumbnail/tarome.webp",
        devicePreviewSrc: "/thumbnail/tarome.webp",
        projectUrl: "https://chap.kr/tarome",
        role: "프론트엔드 전담",
        period: "2026.02 - 2026.03",
        team: "프로덕트 디자이너(1) 프론트엔드(1)",
        tech: [
            {
                title: "프론트엔드",
                items: ["Next.js", "TypeScript", "Zustand"],
            },
            {
                title: "AI 연동",
                items: ["Vertex AI", "Gemini", "Vercel AI SDK"],
            },
            {
                title: "데이터/백엔드",
                items: ["Supabase"],
            },
            {
                title: "배포",
                items: ["Cloudflare Pages"],
            },
        ],
        problem:
            "기존 타로 서비스는 **텍스트 결과 확인**에 머물러, 사용자가 리딩을 수동적으로 소비했습니다.\n그만큼 참여감과 몰입도도 낮았습니다.",
        solution:
            "Tarome는 결과 조회형이 아니라 __온보딩 → 카드 선택 → 결과 → 공유 → 채팅__으로 이어지는 하나의 흐름으로 재구성했습니다.\n결과를 보는 서비스에서, 사용자가 참여하는 리딩 경험으로 전환했습니다.",
        implementation: [
            "결과 이후에는 **생성자와 공유 사용자 행동을 분리**해 채팅 접근과 CTA 노출을 다르게 제어했습니다.",
            "카드 선택 화면의 스크롤·드래그 충돌을 정리해 **모바일 선택 UX를 안정화**했습니다.",
        ],
        troubleshooting:
            "공유 링크, 직접 접근, 결과 이탈 상황에서 예외 케이스가 발생했습니다.\n잘못된 결과 경로 진입, 응답 중 이탈 시 상태 불일치, 권한 없는 CTA 노출이 주요 문제였습니다.\n상태 처리와 권한 검증을 분리하고, 진입 경로 기반 리다이렉트와 조건별 UI 제어로 흐름을 정리했습니다.",
        overview:
            "Chap 인프라 위에서 Tarome에 맞는 **UX 흐름과 데이터 구조**를 다시 설계했습니다.\n결과와 후속 채팅이 자연스럽게 이어지는 구조를 구현했습니다.",
        summaryLine:
            "__카드 선택 → AI 리딩 → 후속 채팅__까지 이어지는 인터랙티브 타로 서비스",
        goals: [
            "**사용자 참여 기반** 리딩 경험 설계",
            "단계별 인터랙션으로 **몰입감 강화**",
            "**모바일 중심** UX 최적화",
        ],
        coreFeature: [
            "Zustand 기반 **상태 전이 관리**",
            "framer-motion 기반 **카드 셔플 인터랙션**",
            "결과 생성 시 **토큰 기반 접근 제어**",
            "공유 링크 진입 시 **권한별 UI 분기 처리**",
            "Vertex AI 응답 구조를 서비스 흐름에 맞게 가공",
        ],

        keyDesigns: [
            {
                title: "사용자 제스처 기반 카드 셔플 인터랙션",
                description:
                    "사용자가 직접 화면을 문질러 카드를 섞는 경험을 구현했습니다. 포인터 근처 카드만 반응하도록 설계해 실제 셔플에 가까운 물리감을 만들고, 다음 단계로 자연스럽게 이어지도록 흐름을 연결했습니다.",
                imageAlt: "Tarome 카드 셔플 인터랙션 화면",
                imageSrc: "/project-detail/tarome/tarome-shuffle.mov",
            },
            {
                title: "결과 이후 상담형 채팅 연결",
                description:
                    "결과 생성 이후 결과 생성자만 채팅에 접근할 수 있도록 권한 흐름을 설계했습니다. 결과 맥락과 이전 대화를 활용해 단발성 답변이 아닌 상담형 인터랙션으로 이어지도록 구성했습니다.",
                imageAlt: "Tarome 후속 상담형 채팅 화면",
                imageSrc: "/project-detail/tarome/tarome-chat.jpg",
            },
        ],
        technicalSolutions: [
            {
                keyword: "타입 기반 데이터 분리",
                problem:
                    "캐릭터, 스프레드, 테마, 결과 구조가 UI에 섞이면 수정 범위가 커지고 변경 영향도를 파악하기 어려웠습니다.",
                solution:
                    "**캐릭터 / 스프레드 / 테마 / 응답 구조**를 타입과 파일 기준으로 분리하고, id 기반으로 연결했습니다.",
                result:
                    "도메인 데이터와 UI 책임을 분리해 **수정 범위를 줄이고 확장 기반**을 정리했습니다.",
            },
            {
                keyword: "결과-채팅 권한 통합",
                problem:
                    "공유 사용자 채팅 접근을 제어해야 했고, 동시에 AI 호출 비용을 고려한 접근 정책이 필요했습니다.",
                solution:
                    "결과 생성 시 **채팅 접근 토큰**을 발급하고, HTTP-only 쿠키와 연결해 결과 생성자 기준으로 접근을 제어했습니다.",
                result:
                    "공유 사용자와 생성자 행동을 분리하고, **권한 제어와 비용 관리**를 함께 다룰 수 있게 됐습니다.",
            },
        ],
        outcomes: [
            "**데이터 구조와 UI를 분리**해 변경 영향도를 줄였습니다.",
            "**채팅 접근 권한을 통합**해 결과 생성자 기준 흐름을 정리했습니다.",
            "**모바일 카드 선택 UX를 안정화**했습니다.",
            "리딩 결과에서 **후속 채팅까지 이어지는 흐름**을 완성했습니다.",
        ],
        retrospective: [
            "파편화된 기획을 구현하면서 **실제 서비스 구조로 구체화하는 과정**을 경험했습니다.",
            "예외 케이스를 다루며, 화면보다 **사용자 시나리오 설계가 더 중요하다**는 점을 체감했습니다.",
        ],
        closingNote:
            "**AI 서비스는 응답 구조와 비용까지 함께 설계해야 한다**는 관점을 얻었습니다.",
    },
    {
        slug: "chap-landing",
        title: "CHAP Landing",
        description: "비디오와 스크롤 인터랙션으로 브랜드를 경험하게 만든 메인 랜딩",
        explanation: "scroll-driven 구조와 미디어 제어로 첫 진입 흐름을 설계한 랜딩",
        hoverText: "정적인 소개 페이지가 아니라, 비디오와 스크롤이 연결된 경험 중심 랜딩으로 재구성했습니다.",
        heroEyebrow: "Brand Landing Project",
        thumbnailSrc: "/thumbnail/chap.webp",
        devicePreviewSrc: "/thumbnail/chap.webp",
        projectUrl: "https://chap.kr",
        role: "프론트엔드 구현",
        period: "2025.12 - 2025.12",
        team: "프로덕트 디자이너(1) 프론트엔드(1)",
        tech: [
            {
                title: "프론트엔드",
                items: ["Next.js", "TypeScript", "Tailwind CSS"],
            },
            {
                title: "인터랙션/애니메이션",
                items: ["Framer Motion", "Lenis"],
            },
        ],
        problem:
            "정적인 랜딩만으로는 **브랜드 메시지와 분위기**를 충분히 전달하기 어려웠습니다.\n특히 첫 진입에서 영상과 모션이 끊기면 몰입도가 빠르게 떨어질 수 있었습니다.",
        solution:
            "브랜드 소개를 __scroll-driven experience__로 재구성했습니다.\n로딩, 히어로 비디오, 스크롤 연출을 하나의 흐름으로 연결해 브랜드를 경험하게 만드는 구조를 설계했습니다.",
        implementation: [
            "**scroll progress 기반**으로 섹션 애니메이션을 제어했습니다.",
            "**비디오 로딩 상태와 로딩 화면**을 연결해 첫 진입 흐름을 통합했습니다.",
            "스크롤과 video `currentTime`을 동기화하고, 텍스트·로고 애니메이션을 함께 연결했습니다.",
        ],
        troubleshooting:
            "비디오 메타데이터 지연과 모바일 비율·회전 이슈가 주요 문제였습니다.\nLoading Context를 분리하고, fallback 이미지와 poster를 함께 적용했으며, 비디오 준비 상태 기반으로 진입 타이밍을 제어했습니다.",
        overview:
            "브랜드와 서비스를 **스크롤 경험으로 전달하는 랜딩**을 목표로 했습니다.\n단순 소개 페이지가 아니라, 인터랙션 중심 흐름으로 브랜드 인상을 설계했습니다.",
        summaryLine:
            "__비디오 + 스크롤 인터랙션__으로 브랜드를 경험하게 만든 랜딩",
        coreFeature: [
            "Framer Motion 기반 **scroll-driven 인터랙션**",
            "스크롤과 타임라인을 연결한 **video scrubbing**",
            "**로딩 ↔ 진입 UX** 연결 구조",
            "**모바일 / Safari 대응** 미디어 처리",
        ],
        keyDesigns: [
            {
                title: "첫 진입 경험을 만드는 Hero 비디오와 로고 연출",
                description:
                    "포스터 이미지에서 비디오로 자연스럽게 전환되도록 구성하고, 로딩 종료 이후 CHAP 로고가 등장하는 흐름을 설계했습니다. 첫 화면에서 브랜드의 무드와 톤을 직관적으로 전달하는 데 집중했습니다.",
                imageAlt: "CHAP 랜딩 Hero 비디오 화면",
                imageSrc: "/project-detail/chap/chap-landing.mov",
            },
            {
                title: "스크롤 기반 비디오 스토리텔링 섹션",
                description:
                    "스크롤 진행률에 따라 영상의 currentTime과 텍스트 상태가 함께 변하도록 설계해, 브랜드 메시지를 단순 문구가 아니라 장면 전환 중심의 경험으로 전달했습니다.",
                imageAlt: "CHAP 랜딩 비디오 스크러빙 섹션",
                imageSrc: "/project-detail/chap/chap-video-scrubbing.mov",
            },
        ],
        technicalSolutions: [
            {
                keyword: "로딩 상태와 진입 타이밍 통합",
                problem:
                    "로딩 상태와 화면 전환 타이밍이 분리되면 첫 진입 흐름이 어색해지고, 스크롤이 먼저 열릴 수 있었습니다.",
                solution:
                    "**비디오 상태와 로딩 상태를 통합 관리**하고, 로딩 중에는 스크롤을 잠가 진입 타이밍을 맞췄습니다.",
                result:
                    "**첫 진입 흐름이 안정화**되고 초기 몰입감을 일관되게 유지할 수 있었습니다.",
            },
            {
                keyword: "스크롤 기반 비디오 동기화",
                problem:
                    "스크롤과 영상 타이밍이 어긋나면 스토리텔링 흐름이 쉽게 깨질 수 있었습니다.",
                solution:
                    "scroll progress를 `currentTime`에 매핑하고, spring 보간으로 영상과 텍스트 전환을 맞췄습니다.",
                result:
                    "**스크롤 반응형 스토리텔링**으로 브랜드 메시지 전달력을 높였습니다.",
            },
            {
                keyword: "디바이스별 미디어 예외 대응",
                problem:
                    "모바일과 Safari 환경에서는 비율, 회전, 메타데이터 처리 차이로 랜딩 경험이 쉽게 깨질 수 있었습니다.",
                solution:
                    "포스터를 분리하고 fallback 이미지와 readyState 체크를 추가해 환경별 예외를 보완했습니다.",
                result:
                    "**환경별 안정성**을 확보했습니다.",
            },
        ],
        outcomes: [
            "**브랜드 랜딩 흐름**을 하나의 스크롤 경험으로 완성했습니다.",
            "**비디오와 모션이 자연스럽게 연결되는 진입 경험**을 구현했습니다.",
            "**반응형 미디어 구조**와 환경별 대응 기반을 확보했습니다.",
        ],
        retrospective: [
            "인터랙션은 연출보다 **타이밍과 상태 흐름 제어**가 더 중요하다는 점을 느꼈습니다.",
            "미디어 UI일수록 **연출보다 안정성이 우선**이라는 기준을 갖게 됐습니다.",
        ],
    },

];

export const portfolioPageContent: PortfolioPageContent = {
    profile,
    intro: {
        eyebrow: "Frontend Developer",
        description: "복잡한 서비스 흐름을 운영 가능한 UI로 바꾸는 프론트엔드 개발자",
    },
    experiences,
    projects,
    footer: {
        links: profile.links,
        resumeUrl: "#",
    },
};
