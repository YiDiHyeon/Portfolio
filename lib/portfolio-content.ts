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
        explanation: "단계형 UX와 권한 제어로 리딩 흐름 재구성",
        hoverText: "카드 선택 → 결과 → 채팅이 끊기지 않도록 하나의 흐름으로 연결",
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
        overview: "일방적인 결과 조회가 아닌, 사용자의 행동이 후속 채팅까지 이어지는 인터랙티브 리딩 경험. FSM 기반 화면 전환과 데이터·UI 분리 구조로 확장성을 고려한 설계",
        summaryLine: "**카드 선택 → AI 리딩 → 후속 채팅**까지 이어지는 인터랙티브 타로 서비스",
        problem: "기존 타로 서비스는 **텍스트 결과 확인 중심** 구조 → 사용자가 리딩을 수동적으로 소비하는 방식. 참여감과 몰입도 부족",
        solution: "__온보딩 → 카드 선택 → 결과 → 공유 → 채팅__으로 이어지는 흐름으로 재구성 → 결과 조회형에서 **참여형 리딩 경험으로 전환**",
        troubleshooting:
            "공유 링크로 진입하거나 결과 생성 중 이탈하는 상황에서 상태 불일치 발생 → 상태 제어와 권한 검증을 분리하고, 진입 경로 기반 리다이렉트 흐름으로 구조 정리",
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
                    "사용자 제스처 기반 카드 셔플 → 포인터 근처 카드만 반응 → 실제 셔플에 가까운 물리감 → 다음 단계로 자연스럽게 전환",
                imageAlt: "Tarome 카드 셔플 인터랙션 화면",
                imageSrc: "/project-detail/tarome/tarome-shuffle.mov",
            },
            {
                title: "결과 이후 상담형 채팅 연결",
                description:
                    "결과 생성자 기준 채팅 접근 제어 → 이전 결과 맥락 + 대화 히스토리 활용 → 단발성 응답이 아닌 상담형 인터랙션 흐름 구성",
                imageAlt: "Tarome 후속 상담형 채팅 화면",
                imageSrc: "/project-detail/tarome/tarome-chat.jpg",
            },
        ],
        technicalSolutions: [
            {
                keyword: "고성능 인터랙션 최적화",
                problem:
                    "카드 50장을 동시에 움직이는 셔플 화면에서 useState로 좌표를 관리하자, 드래그와 셔플 동작 시 모든 카드가 매 프레임 리렌더되면서 모바일에서 프레임 드랍이 발생",
                solution:
                    "렌더링 사이클을 타지 않도록 상태를 React 밖으로 분리하고, MotionValue로 각 카드 위치를 직접 업데이트하는 구조로 변경",
                result:
                    "리렌더 없이 DOM 속성만 갱신하도록 바꾸면서 프레임 드랍이 사라졌고, 모바일에서도 끊김 없이 동작하는 인터랙션 구현",
            },
            {
                keyword: "결과-채팅 권한 통합",
                problem:
                    "결과 URL을 공유할 수 있는 구조에서, 결과 생성자와 조회 사용자의 채팅 권한을 구분해야 했고 AI 호출 비용도 함께 고려해야 하는 상황",
                solution:
                    "결과 생성 시 **채팅 접근 토큰을 발급하고 HTTP-only 쿠키와 연결**해, 결과 생성자 기준으로 채팅 접근을 제어하는 구조로 변경",
                result:
                    "**사용자 분리 + 권한 제어 + 비용 관리**를 함께 다룰 수 있는 구조로 정리",
            }
        ],
        outcomes: [
            "데이터 구조와 UI의 책임을 분리해 **유지보수성 및 확장 기반 강화**",
            "결과 생성자 쿠키 토큰 인증을 통해 **권한 제어 및 API 비용 방어 구현**",
            "DOM 속성 직접 갱신으로 **저사양 모바일에서도 버벅임 없는 인터랙션 **",
        ],
        retrospective: [
            "공유 링크 진입이나 이탈 상황을 대응하면서, **사용자 흐름 설계의 중요성**을 체감했습니다.",
            "AI 기능은 구현뿐 아니라 **비용과 운영까지 함께 고려**해야 한다는 걸 경험했습니다.",
        ]
    },
    {
        slug: "chap-landing",
        title: "CHAP Landing",
        description: "스크롤과 미디어 인터랙션으로 브랜드 경험을 설계한 랜딩",
        explanation: "첫 진입 흐름과 비디오 연출을 하나의 경험으로 연결한 랜딩",
        hoverText: "브랜드 메시지를 정적인 소개가 아닌 스크롤 경험으로 전달한 랜딩입니다.",
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
        overview: "브랜드의 무드와 서비스 방향성을 한 화면 흐름으로 전달하기 위해 만든 메인 랜딩입니다. 비디오와 인터랙션을 활용했지만, 연출보다 실제 사용자 경험이 끊기지 않도록 안정성 쪽에 더 신경 썼습니다.",
        summaryLine: "비디오와 스크롤 인터랙션으로 첫 진입 경험을 설계한 브랜드 랜딩",
        implementation: [
            "**스크롤 진행률을 비디오 currentTime과 동기화**해 장면 전환 흐름 구성",
            "**로딩 상태와 진입 타이밍을 함께 제어**해 첫 화면 경험이 끊기지 않도록 정리",
            "스크롤 이벤트를 렌더링과 분리하고 spring 보간 적용으로 **전환 시 버벅임 최소화**",
        ],
        coreFeature: [
            "Framer Motion 기반 DOM 속성 직접 제어",
            "비디오 재생(currentTime)과 스크롤 진행률 동기화",
            "기기 및 브라우저 환경별 예외 대응(Fallback)",
        ],
        keyDesigns: [
            {
                title: "첫 진입 경험을 만드는 Hero 비디오와 로고 연출",
                description:
                    "포스터 → 비디오 전환 흐름 구성, 로딩 종료 이후 로고 등장 타이밍 연결 → 첫 화면에서 브랜드 무드가 바로 전달되는 진입 경험",
                imageAlt: "CHAP 랜딩 Hero 비디오 화면",
                imageSrc: "/project-detail/chap/chap-landing.mov",
            },
            {
                title: "스크롤 기반 비디오 스토리텔링 섹션",
                description:
                    "스크롤 진행률을 video currentTime과 동기화하고 텍스트 상태를 함께 제어 → 장면 전환 중심으로 브랜드 메시지 전달",
                imageAlt: "CHAP 랜딩 비디오 스크러빙 섹션",
                imageSrc: "/project-detail/chap/chap-video-scrubbing.mov",
            },
        ],
        technicalSolutions: [
            {
                keyword: "로딩 상태와 진입 타이밍 통합",
                problem:
                    "로딩과 화면 전환 타이밍이 어긋날 경우 첫 진입 흐름이 끊기는 문제",
                solution:
                    "비디오 readyState와 로딩 상태를 함께 관리하고, 로딩 중 스크롤을 제한해 진입 타이밍 정렬",
                result:
                    "첫 화면 흐름이 끊기지 않고 자연스럽게 이어지는 구조로 개",
            },
            {
                keyword: "스크롤 기반 비디오 동기화",
                problem:
                    "스크롤과 영상 타이밍 불일치로 스토리 흐름이 깨지는 문제",
                solution:
                    "scroll progress를 video currentTime에 매핑하고 spring 보간 적용으로 **전환 타이밍 보정**",
                result:
                    "스크롤과 영상이 자연스럽게 동기화되는 흐름 구현",
            },
        ],

        troubleshooting: "모바일/Safari에서 영상 로딩 지연과 비율 문제로 첫 화면이 깨지는 이슈 → 미디어 상태 체크 세분화 + fallback 적용으로 렌더링 안정성 확보",
        outcomes: [
            "브랜드 메시지를 하나의 스크롤 흐름으로 연결된 경험으로 구현",
            "비디오와 인터랙션이 분리되지 않는 첫 진입 경험 구성",
            "모바일 및 브라우저 환경을 고려한 미디어 대응 구조 정리",
        ],
        retrospective: [
            "인터랙션에서는 화려한 연출보다 **타이밍과 상태 제어**가 더 중요하다는 걸 느꼈습니다.",
            "미디어가 들어간 UI일수록 구현 자체보다 **안정성과 예외 처리**가 먼저라는 기준을 갖게 됐습니다.",
        ],
    }

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
