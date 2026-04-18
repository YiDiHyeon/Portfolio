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
        description: "카드 선택부터 결과와 채팅까지 이어지는 인터랙티브 AI 타로 서비스",
        explanation: "선택부터 결과·채팅까지 자연스럽게 이어지는 단계형 UX 설계",
        hoverText: "선택, 결과, 채팅까지 끊기지 않도록 단계형 흐름으로 재구성한 서비스입니다.",
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
        problem: "기존 타로 서비스는 텍스트 중심 결과 제공에 머물러 사용자가 결과를 일방적으로 소비하는 구조였고, 그만큼 리딩 과정의 참여감과 몰입도가 낮았습니다.",
        solution: "결과 조회형 서비스가 아니라 온보딩, 카드 선택, 결과, 공유, 후속 채팅까지 하나의 리딩 흐름으로 이어지는 참여형 경험으로 재구성했습니다.",
        implementation: [
            "결과 확인 이후, 공유 사용자와 결과 생성자의 행동을 분리해 채팅 접근 여부와 CTA 노출을 다르게 제어했습니다.",
            "카드 선택 화면에서 스크롤이 깨지거나 PC에서 드래그로만 조작하는 문제가 있어, 스크롤 동작과 레이아웃을 수정해 선택 과정의 사용성을 개선했습니다.",
        ],
        troubleshooting:
            "QA 과정에서 공유 링크 진입, 직접 URL 접근, 화면 이탈 등 다양한 사용자 행동에서 예외 케이스가 확인됐습니다. 공유 링크가 잘못된 결과 경로로 연결되거나, 채팅 응답 생성 중 이탈 시 상태와 응답 차감 타이밍이 어긋날 가능성이 있었고, 권한 없는 사용자에게 채팅 버튼이 노출되는 문제도 있었습니다. 이를 줄이기 위해 상태 처리와 권한 검증을 분리하고, 진입 경로와 권한 조건에 따라 리다이렉트와 UI 노출을 다르게 제어하도록 구조를 정리했습니다.",
        overview: "Chap은 다양한 콘텐츠형 AI 서비스를 실험하는 프로젝트로, Bookpick 이후 두 번째 서비스로 Tarome를 제작했습니다. 기존 Chap 인프라를 바탕으로 Tarome에 맞는 사용자 경험과 데이터 구조, 결과와 채팅 흐름을 새롭게 설계하고 구현했습니다.",
        summaryLine:  "사용자가 직접 카드를 선택하고, 캐릭터를 통해 AI 리딩과 후속 채팅까지 이어지는 인터랙티브 타로 서비스입니다.",
        goals: [
            "사용자가 리딩 과정에 직접 참여하여 실제 상담을 받는 듯한 몰입 경험을 제공",
            "단계별 인터랙션과 캐릭터 연출로 몰입감 강화",
            "모바일 중심 UX 설계",
        ],
        coreFeature:[
           "Zustand를 활용한 상태 전이 관리 및 단계별 UI 제어",
           "framer-motion 기반 카드 셔플 인터랙션 구현",
            "결과 생성 시 토큰 발급 및 서버 기반 접근 검증 처리",
            "공유 링크 진입 시 권한 상태에 따른 UI 제어 분기 처리",
            "Vertex AI 응답 구조를 서비스 흐름에 맞게 가공하여 사용",
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
                    "캐릭터 설정, 스프레드 규칙, 테마, AI 응답 구조를 파일과 타입 기준으로 분리하고, id 기반으로 연결했습니다.",
                result:
                    "도메인 데이터와 UI 책임을 분리해 수정 범위를 줄였고, 스프레드 확장을 위한 데이터 구조 기반을 정리했습니다.",
            },
            {
                keyword: "결과-채팅 권한 통합",
                problem:
                    "공유 URL에서는 채팅 버튼을 숨기는 QA 이슈가 있었고, 동시에 AI 호출 비용을 줄이기 위해 채팅 접근 정책을 재정의할 필요가 있었습니다.",
                solution:
                    "결과 생성 시점에 채팅 접근 토큰을 함께 발급하고, HTTP-only 쿠키로 연결해 결과 생성자 기준으로 접근을 제어하도록 구조를 변경했습니다.",
                result:
                    "공유 사용자와 결과 생성자의 행동을 분리하고, 비용 제약을 고려한 채팅 접근 정책을 안정적으로 운영할 수 있는 구조로 정리",
            },
        ],
        outcomes: [
            "데이터 구조와 UI를 분리해 캐릭터·스프레드 확장 시 수정 범위를 줄였습니다.",
            "외부 인증 없이 결과 생성자만 채팅에 접근하도록 권한 흐름을 통합했습니다.",
            "모바일 환경에서도 카드 선택과 결과 흐름이 안정적으로 이어지도록 UX를 개선했습니다.",
            "랜딩부터 리딩, 결과, 공유, 후속 채팅까지 하나의 사용자 흐름으로 연결된 서비스로 완성했습니다.",
        ],
        retrospective: [
            "기획이 완전히 정리되지 않은 상태에서 시작했지만, 구현 과정에서 파편화된 아이디어를 **실제 서비스 구조로 구체화하는 경험**을 했습니다.",
            "AI 결과 생성 중 이탈이나 뒤로가기 같은 예외 케이스를 다루면서, 화면 구현보다 **사용자 시나리오 기반 설계가 더 중요하다는 점**을 체감했습니다.",
        ],
        closingNote:"AI 결과를 서비스에 적용하며 응답 구조와 비용을 함께 고려해야 한다는 점을 경험했고, 기능을 서비스 품질 요소로 다루는 관점을 얻었습니다."
    },
    {
        slug: "chap-landing",
        title: "CHAP Landing",
        description: "스크롤과 비디오 인터랙션으로 브랜드 메시지를 전달한 메인 랜딩",
        explanation: "로딩, 히어로 비디오, 스크롤 연출을 하나의 흐름으로 연결한 인터랙티브 랜딩 구현",
        hoverText: "브랜드 소개를 정적인 랜딩이 아니라 모션과 미디어 중심의 스크롤 경험으로 재구성한 프로젝트입니다.",
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
        problem: "브랜드 랜딩은 메시지 전달이 중요하지만, 정적인 섹션 나열만으로는 브랜드 분위기와 서비스 방향성을 충분히 전달하기 어려웠습니다. 특히 첫 진입 구간에서 영상과 모션이 자연스럽게 연결되지 않으면 몰입감이 쉽게 끊길 수 있었습니다.",
        solution: "브랜드 소개, 스토리텔링, 서비스 연결을 하나의 흐름으로 이어지는 scroll-driven landing experience로 재구성했습니다. 로딩 화면, 히어로 비디오, 스크롤 기반 영상 연출, 서비스 소개 섹션을 단계적으로 연결해 브랜드 메시지를 경험 중심으로 전달하도록 설계했습니다.",
        implementation: [
            "섹션별 scroll progress를 분리해 sticky 전환 시 scale과 opacity가 자연스럽게 이어지도록 구성했습니다.",
            "Hero 구간에서 비디오 버퍼링 진행률을 로딩 화면과 연결하고, 로딩 중에는 스크롤을 잠가 첫 진입 경험의 일관성을 유지했습니다.",
            "비디오 스크러빙 섹션에서 scroll progress를 spring으로 보간해 currentTime에 매핑하고, 텍스트와 로고 애니메이션을 순차적으로 연결했습니다.",
        ],
        troubleshooting: "비디오 메타데이터 지연과 브라우저 캐시로 인해 첫 진입 화면이 불안정해질 수 있었고, 모바일에서는 영상 비율과 회전 처리 이슈가 발생했습니다.\n" +
            "이를 해결하기 위해 로딩 상태를 Context로 분리하고, 비디오 준비 상태에 따라 로딩 종료 시점을 제어했으며, fallback 이미지와 포스터 레이어를 함께 적용해 안정성을 확보했습니다.",
        overview: "CHAP 메인 랜딩은 브랜드의 정체성과 서비스 방향성을 한 화면 흐름 안에서 전달하기 위한 프로젝트였습니다. 단순 소개 페이지가 아니라, 사용자가 스크롤하면서 브랜드 스토리와 서비스 성격을 직관적으로 경험할 수 있도록 인터랙션 중심으로 설계하고 구현했습니다.",
        summaryLine: "비디오와 스크롤 인터랙션을 결합해 브랜드 메시지를 경험 중심으로 전달한 인터랙티브 랜딩입니다.",
        coreFeature: [
            "Framer Motion 기반 scroll-driven 인터랙션 구현",
            "스크롤 위치와 비디오 타임라인을 동기화한 video scrubbing",
            "비디오 로딩 상태와 진입 UX를 연결한 첫 화면 경험 제어",
            "모바일 회전 영상 및 Safari fallback을 포함한 미디어 대응",
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
                    "비디오 로딩 상태와 화면 전환 타이밍이 분리되어 있으면 첫 진입 경험이 어색해지고, 사용자가 콘텐츠를 보기 전에 스크롤이 먼저 열릴 수 있었습니다.",
                solution:
                    "Loading Context를 두고 비디오 버퍼링 진행률, 로딩 퍼센트, 비디오 준비 완료 상태를 함께 관리했으며, 로딩 중에는 스크롤을 잠그고 종료 시점에 맞춰 콘텐츠 애니메이션을 시작하도록 구성했습니다.",
                result:
                    "첫 진입 구간의 흐름이 안정적으로 이어졌고, 브랜드 랜딩에서 중요한 초기 몰입감을 일관되게 유지할 수 있었습니다.",
            },
            {
                keyword: "스크롤 기반 비디오 동기화",
                problem:
                    "스크롤 속도에 따라 영상과 텍스트 전환이 튀면 사용자가 연출을 따라가기 어렵고, 스토리텔링 섹션의 완성도가 크게 떨어질 수 있었습니다.",
                solution:
                    "scroll progress를 spring으로 보간한 뒤 비디오 currentTime에 연결하고, 각 텍스트와 로고의 opacity 및 y 값을 구간별로 세분화해 트레일링 효과가 나도록 조정했습니다.",
                result:
                    "단순 재생형 영상이 아니라 사용자의 스크롤과 맞물려 반응하는 스토리텔링 구간으로 완성됐고, 브랜드 메시지 전달력이 높아졌습니다.",
            },
            {
                keyword: "디바이스별 미디어 예외 대응",
                problem:
                    "모바일 회전 영상, 브라우저별 메타데이터 이벤트 차이, Safari 렌더링 이슈 등으로 인해 동일한 랜딩 경험을 유지하기 어려웠습니다.",
                solution:
                    "모바일과 데스크톱 포스터를 분리하고, 회전된 세로형 영상 레이아웃을 별도로 적용했으며, 마지막 프레임 fallback 이미지와 readyState 체크를 추가해 예외 상황을 보완했습니다.",
                result:
                    "다양한 디바이스와 브라우저 환경에서도 랜딩 경험이 쉽게 깨지지 않는 구조를 만들 수 있었습니다.",
            },
        ],
        outcomes: [
            "브랜드 소개와 서비스 소개를 하나의 스크롤 흐름으로 연결한 메인 랜딩을 완성했습니다.",
            "비디오, 로딩, 모션이 분리되지 않고 자연스럽게 이어지는 진입 경험을 구현했습니다.",
            "모바일과 데스크톱 모두에서 안정적으로 동작하는 반응형 미디어 랜딩 구조를 정리했습니다.",
        ],
        retrospective: [
            "스크롤, 비디오, 로딩이 결합된 인터랙션에서는 단순한 화면 연출보다 상태 흐름과 타이밍 제어가 경험의 완성도를 결정한다는 점을 느꼈습니다.",
            "특히 브라우저와 디바이스에 따라 달라지는 미디어 처리 이슈를 대응하면서, 인터랙티브 UI일수록 연출보다 안정성을 우선으로 설계해야 한다는 기준을 갖게 됐습니다.",
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
