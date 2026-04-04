import type {
    PortfolioExperienceItem,
    PortfolioPageContent,
    PortfolioProfile,
    PortfolioProjectContent,
} from "@/types/portfolio";

const profile: PortfolioProfile = {
    displayName: "Yi Ji Hyeon",
    jobTitle: "Frontend Developer",
    githubUrl: "https://github.com/YiDiHyeon",
    email: "mailto:d22_22b@naver.com",
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
        slug: "portfolio",
        title: "Portfolio",
        description: "웹 애니메이션과 최신 프론트엔드 기술을 활용해 사용자의 시선을 이끄는 인터랙티브 포트폴리오를 구축했습니다.",
        explanation: "스크롤 인터랙션으로 기술력을 시각적으로 드러낸 포트폴리오",
        hoverText: "사용 흐름 자체가 하나의 경험이 되도록 스크롤 기반 인터랙션과 레이아웃을 설계했습니다.",
        role: "1인 기획, 디자인 및 프론트엔드 개발",
        period: "2026.03 - 진행 중",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        problem: "단순한 이력 나열식 포트폴리오는 개발자로서의 인터랙션 구현 능력이나 UI/UX에 대한 고민을 직관적으로 어필하기 어려웠습니다.",
        solution: "깊이감 있는 스크롤 오버랩 효과와 동적인 컴포넌트를 설계해 기술적 전문성을 시각적으로 체감할 수 있도록 구성했습니다.",
        implementation: [
            "Framer Motion의 useScroll과 useTransform을 결합해 성능 저하 없이 동작하는 스크롤 오버랩 애니메이션을 구현했습니다.",
            "SSR과 CSR 간 hydration mismatch를 줄이기 위해 테마와 애니메이션 초기 렌더 시점을 분리했습니다.",
            "모바일 스크롤 구조와 데스크톱 고정 사이드바 레이아웃을 분리해 반응형 구조를 안정적으로 유지했습니다.",
        ],
        troubleshooting: "초기 섹션 고정에 CSS sticky를 사용했으나 macOS Safari의 오버스크롤 환경에서 레이아웃이 분리되는 현상이 있었습니다. 이를 사이드바 고정 구조로 리팩토링해 뷰포트 스크롤 안정성을 확보했습니다.",
    },
    {
        slug: "tarome",
        title: "Tarome",
        description: "카드 선택부터 결과 해석, 후속 채팅까지 자연스럽게 이어지는 AI 타로 서비스 화면을 설계했습니다.",
        explanation: "선택부터 결과·채팅까지 자연스럽게 이어지는 단계형 UX 설계",
        hoverText: "선택, 결과, 채팅까지 끊기지 않도록 단계형 흐름으로 재구성한 서비스입니다.",
        thumbnailSrc: "/thumbnail/tarome.webp",
        role: "프론트엔드 전담",
        period: "2026.02 - 2026.03",
        tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Zustand"],
        problem: "타로 결과 화면과 후속 대화 흐름이 분절되면 사용자가 서비스 몰입을 이어가기 어려웠습니다.",
        solution: "선택, 결과, 후속 액션을 각각 끊어진 페이지가 아니라 점진적으로 이어지는 하나의 단계형 흐름으로 재구성했습니다.",
        implementation: [
            "선택 상태와 결과 상태를 Zustand로 분리해 단계 전환 시점의 복잡도를 낮췄습니다.",
            "결과 화면 이후 자연스럽게 채팅으로 넘어가도록 CTA와 상태 전이를 설계했습니다.",
            "모바일 우선 레이아웃으로 카드, 결과, 대화 UI의 우선순위를 재정렬했습니다.",
        ],
        troubleshooting: "초기에는 단계별 UI 상태가 서로 강하게 결합되어 예외 케이스가 많았는데, 단계 전이를 명시적인 상태 흐름으로 재설계해 유지보수성을 높였습니다.",
    },
    {
        slug: "chap-landing",
        title: "Chap Landing",
        description: "브랜드 메시지 전달과 앱 다운로드 유도를 동시에 만족시키는 랜딩 페이지를 구현했습니다.",
        explanation: "핵심 메시지와 CTA를 한 흐름으로 정리한 랜딩 페이지",
        hoverText: "짧은 스크롤 안에서 정보 전달과 전환을 동시에 유도하도록 구조를 재정의했습니다.",
        thumbnailSrc: "/thumbnail/chap.webp",
        role: "랜딩 페이지 FE 전담",
        period: "2025.11 - 2025.12",
        tech: ["Next.js", "TypeScript", "Tailwind CSS"],
        problem: "서비스의 핵심 메시지가 산발적으로 배치되어 첫 화면에서 전달력이 약했고, 다운로드 유도도 분산되어 있었습니다.",
        solution: "메시지 우선순위를 재정의하고 CTA 위치를 집중시켜 한 번의 스크롤 안에서 핵심 정보가 모두 읽히도록 구성했습니다.",
        implementation: [
            "첫 화면에 핵심 가치 제안과 CTA를 함께 배치해 정보 탐색 비용을 줄였습니다.",
            "브랜드 톤에 맞춘 타이포그래피와 간격 시스템을 Tailwind 유틸리티로 정리했습니다.",
            "모바일과 데스크톱에서 메시지 계층이 유지되도록 반응형 레이아웃을 설계했습니다.",
        ],
        troubleshooting: "처음에는 섹션별 스타일 차이가 커서 브랜드 인상이 약했는데, 공통 간격과 타이포 토큰을 기준으로 전체 톤을 다시 맞췄습니다.",
    },
    {
        slug: "nova-admin",
        title: "Nova Admin",
        description: "운영자가 빠르게 탐색하고 판단할 수 있는 내부 어드민 대시보드를 설계하고 구현했습니다.",
        explanation: "운영자가 빠르게 판단할 수 있도록 정보 구조를 재설계한 어드민",
        hoverText: "정보 밀도가 높은 운영 화면을 재구성해 핵심 지표와 상세 정보의 우선순위를 분리했습니다.",
        role: "FE 설계 및 전체 구현",
        period: "2025.04 - 2025.10",
        tech: ["Next.js", "TypeScript", "shadcn/ui"],
        problem: "운영 화면의 정보 밀도가 높았지만 우선순위가 약해 핵심 지표를 빠르게 파악하기 어려웠습니다.",
        solution: "운영자가 가장 자주 보는 지표를 상단에 재배치하고, 상세 정보는 점진적으로 확장되는 구조로 바꿨습니다.",
        implementation: [
            "데이터 카드와 상세 패널을 분리해 핵심 정보와 부가 정보를 구분했습니다.",
            "차트와 리스트 영역을 역할별로 구획해 시선 이동을 줄였습니다.",
            "반복되는 필터와 상태 표시 패턴을 컴포넌트화해 화면 일관성을 유지했습니다.",
        ],
        troubleshooting: "차트와 표가 동시에 갱신될 때 체감 성능이 떨어져 렌더링 범위를 줄이고 업데이트 빈도를 조정해 응답성을 개선했습니다.",
    },
];

export const portfolioPageContent: PortfolioPageContent = {
    profile,
    intro: {
        eyebrow: "Frontend Developer Portfolio",
        description: "복잡한 서비스 흐름을 운영 가능한 UI로 바꾸는 프론트엔드 개발자",
    },
    experiences,
    projects,
    footer: {
        githubUrl: profile.githubUrl,
        email: profile.email,
        resumeUrl: "#",
    },
};
