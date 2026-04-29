import type {
    PortfolioExperienceItem,
    PortfolioPageContent,
    PortfolioProfile,
    PortfolioProjectContent,
    FeaturedProjectsContent,
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
    skills: [
        {
            label: "Frontend",
            items: ["React", "Next.js", "Vue.js", "Nuxt.js"],
        },
        {
            label: "Language",
            items: ["TypeScript", "JavaScript"],
        },
        {
            label: "Architecture & Tools",
            items: ["Tailwind", "React Query", "Zustand", "Pinia"],
        },
    ],
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
        companyDescription: "기업용 CMS 솔루션과 웹사이트 구축 프로젝트를 수행하는 디지털 서비스 전문기업",
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
        companyDescription: "개인 맞춤 정부 정책 추천 및 기업용 정부지원사업 관리 플랫폼을 운영하는 스타트업",
        period: "2021.11 ~ 2023.01",
        team: "개발팀",
        role: "프론트엔드 개발",
        projects: [
            {
                name: "웰로 B2C 정책 추천 서비스",
                keyPoints: ["Vue2", "Filtering Logic", "Survey UI", "Canvas"],
                points: [
                    "연령과 조건별 정책 필터링 로직을 적용한 리스트 및 상세 UI 구현",
                    "Canvas 기반 디지털 서명 패드와 설문 컴포넌트 개발",
                ],
                url:"https://www.welfarehello.com",
            },
            {
                name: "웰로비즈 B2B SaaS",
                keyPoints: ["Nuxt2", "SSR", "SEO", "Dashboard UI"],
                points: [
                    "Nuxt SSR 기반 프로젝트 초기 환경 설정과 공통 모듈 구축",
                    "asyncData 기반 동적 메타 태그 처리와 전역 SVG 아이콘 컴포넌트 설계",
                    "vuedraggable을 활용한 칸반보드 Drag & Drop UI 구현",
                ],
                url:"https://www.wellobiz.com",
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
        companyDescription: "기업 복지·운영 서비스를 제공하는 10,000개 사 이상의 기업이 이용하는 B2B 플랫폼",
        period: "2021.02 ~ 2021.11",
        team: "개발팀",
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
                url:"https://wefuncorp.com/?utm_source=organic&utm_medium=organic&utm_campaign=organic&utm_term=organic"
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

export const featuredProjects: FeaturedProjectsContent[] = [
    {
        id: "knou-mobile-academic-info",
        company: "한국방송통신대학교",
        title: "학사정보 모바일 시스템 구축",
        summary: "입학, 장학, 등록, 성적 업무를 모바일 환경에서 조회·신청·수정할 수 있도록 구축",
        period: "",
        role: "프론트엔드 개발",
        contribution: "",
        team: "",
        platform: "모바일 웹",
        techStack: [
            "Nuxt 3",
            "Vue 3 Composition API",
            "JavaScript",
            "Pinia",
            "Axios",
            "SCSS",
            "Ant Design Vue",
            "VueUse",
            "dayjs",
            "OZ Report",
            "KG이니시스"
        ],
        overview: [
            "입학(AEE), 장학(AEN), 등록(ARE), 성적(ARC) 주요 업무 화면 담당",
            "업무 코드별 페이지·컴포넌트·API 서비스 구조로 화면 구현",
            "신청 기간, 대상자 여부, 업무 상태 코드에 따른 화면/액션 분기 처리"
        ],
        keyFeatures: [
            "입학 지원: 지원자 등록 → 개인정보 동의 → 단계형 지원서 작성 → 전형료 결제 → 서류 제출 흐름 구현",
            "장학 신청: 교내·교외 장학 신청, 제출서류 업로드, 신청 변경/취소 기능 구현",
            "장학 결과: 신청/선발 내역 조회, 상태 표시, 장학증서 출력 연동",
            "등록금: 일반등록·특별등록·계절학기 등록 대상 분기 및 0원 납부 처리",
            "환불/회비: 등록금 환불, 계절수업 수강포기/취소, 학생회비·동문회비 조회 구현",
            "성적: 현재학기·연도별·학년/학기별 성적 조회와 F 포함/제외 필터 구현",
            "학점 현황: 취득학점, 평점, 백점환산, 졸업요건 정보 시각화"
        ],
        responsibilities: [
            "AEE/AEN/ARE/ARC 화면 컴포넌트 개발",
            "업무별 API 서비스 연동 및 응답 데이터 화면 매핑",
            "상태 코드 기반 버튼 노출, 수정 가능 여부, 잘못된 접근 처리",
            "폼 유효성 검사, 확인 모달, 로딩 상태, 안내 메시지 처리",
            "첨부파일 업로드, 기존 파일 미리보기/삭제, 삭제 파일 ID 관리",
            "OZ Report 기반 고지서·성적표·장학증서·영수증 출력 연동",
            "KG이니시스 전형료 결제 화면 연동",
            "useAsyncData/useAsyncCacheData로 기준학기·공통코드·대상자 정보 조회 최적화"
        ],
        challenges: [
            {
                title: "상태 코드 중심의 화면 제어",
                description: "신청, 접수, 심사, 선발, 반려, 납부, 환불 상태별 버튼·문구·라우팅 분기 처리"
            },
            {
                title: "단계형 입학 지원 흐름",
                description: "중간 이탈, 결제 후 재진입, 지원 단계 복원 케이스를 지원 상태값 기준으로 처리"
            },
            {
                title: "모바일 환경의 외부 연동 제약",
                description: "결제, 출력, 온라인 증명 첨부 등 PC 중심 기능을 모바일 화면 흐름 안에서 안내/분기"
            },
            {
                title: "첨부파일과 환불계좌 정합성",
                description: "신규 파일, 기존 파일, 삭제 파일, 계좌 정보를 신청·수정 요청에 맞게 분리 관리"
            }
        ],
        implementation: [
            "업무별 API 래퍼를 services/aee, aen, are, arc로 분리",
            "Tab, Accordion, Statistic, StageProgress 기반으로 반복 UI 구성",
            "Promise.all로 기준학기·대상자·납부/신청 정보를 병렬 조회",
            "reactive form state와 공통 validator로 입력값 검증",
            "신청/변경/취소 후 최신 데이터를 재조회하여 화면 상태 갱신",
            "세션 스토리지로 입학 지원자 정보와 장학 동의 여부 등 임시 상태 관리"
        ],
        outcome: [
            "입학·장학·등록·성적 주요 학사 업무를 모바일 사용자 흐름으로 정리",
            "대상자 아님, 기간 아님, 수정 불가 등 예외 케이스 안내 개선",
            "신청, 조회, 변경, 취소, 출력까지 이어지는 학사 업무 경험 구현",
            "상태 코드 기반 업무 화면과 외부 결제/출력/증명 연동 경험 확보"
        ],
        links: []
    },
    {
        id: 'wello-b2c',
        company: '웰로',
        title: '웰로 B2C 정책 추천 서비스',
        summary: '사용자 조건 기반 맞춤 정책 추천 및 간편 신청 B2C 서비스',
        period: '',
        role: '프론트엔드 개발',
        contribution: '',
        team: '',
        platform: '모바일 웹 / 앱 웹뷰 / 반응형 웹',
        techStack: [
            'Vue.js 2',
            'Vue Router',
            'Vuex',
            'SCSS',
            'Axios',
            'Swiper',
            'vue-infinite-loading',
            'Kakao JavaScript SDK',
            'vue-drawing-canvas',
            'vue-html2canvas',
        ],
        overview: [
            'B2C 사용자 화면 전반 마크업 및 프론트엔드 개발',
            '홈, 정책 상세, 맞춤 정책, 카테고리, 검색, 찜 목록, 마이페이지 화면 구현',
            '카카오 SNS 로그인 및 가입 후 닉네임/맞춤 필터 입력 흐름 연동',
            '2차 고도화에서 설문, 간편 신청 서명, 맞춤 필터 개선 기능 개발',
        ],
        keyFeatures: [
            '로그인 상태별 홈 화면 구성: 가입 유도 / 프로필 / 맞춤 정책 수 / 간편 신청 현황',
            '정책 상세 Dialog: 정책 정보, 신청 링크, 찜하기, 공유하기, 간편 신청 진입',
            '정책 찜하기: 관심 정책 등록, 해제, 찜 목록 조회 흐름',
            '맞춤 필터: 지역, 소득, 가구원 수, 고용 상태 등 조건 입력',
            '정책 목록: 카테고리별 정책, 맞춤 정책, 전체 검색, 정렬, 지역 필터',
            '설문 기능: 단문, 장문, 객관식, 중복 선택, 드롭다운, 선형 배율 문항 처리',
            '간편 신청: Canvas 서명 이미지 생성 및 신청 데이터 제출',
            'SNS 로그인: Kakao SDK 및 앱 웹뷰 브릿지 기반 로그인 처리',
        ],
        responsibilities: [
            'B2C 사용자 화면 마크업 및 프론트엔드 개발',
            '홈, 정책 상세, 맞춤 정책, 카테고리 콘텐츠, 프로필 화면 개발',
            '로그인/비로그인 상태에 따른 API 및 화면 분기 처리',
            'Vuex 기반 토큰, 회원 정보, 추천 정책 수 상태 관리',
            '정책 목록 정렬, 필터, 무한 스크롤 상태 처리',
            '계층형 맞춤 필터 데이터 렌더링 및 저장 로직 구현',
            '설문 JSON 데이터 기반 동적 문항 렌더링',
            'Canvas 서명 이미지 생성, 파일 변환, 업로드 플로우 구현',
        ],
        challenges: [
            {
                title: '로그인 상태별 사용자 흐름 분기',
                description: '회원/비회원 API 분리, 접근 권한, 찜하기, 간편 신청 진입 조건 처리',
            },
            {
                title: '계층형 맞춤 필터 구현',
                description: '상위 조건 선택에 따른 하위 코드 조회, 단일/중복 선택, 유효성 상태 관리',
            },
            {
                title: '동적 설문 문항 처리',
                description: 'API에서 받은 question_form 기준으로 문항 타입별 입력 UI와 검증 로직 구성',
            },
            {
                title: '모바일 서명 이미지 처리',
                description: 'Canvas 입력값을 PNG 파일로 변환하고 신청 데이터와 함께 서버 업로드',
            },
        ],
        implementation: [
            'Vue Router 동적 import로 주요 화면 라우트 분리',
            '홈 초기 데이터: 카테고리, 배너, 웰로 PICK, 간편 신청 현황 병렬 조회',
            '정책 상세: Bottom Sheet Dialog 기반 상세 화면 구현',
            '찜하기: 상세/목록에서 재사용 가능한 공통 버튼 컴포넌트 구성',
            '맞춤 필터: 공통 mixin으로 코드 조회, 선택값 처리, 검증, 임시 저장 로직 분리',
            '정책 목록: vue-infinite-loading 기반 페이지 단위 추가 로딩',
            'SNS 로그인: Kakao SDK와 앱 웹뷰 appCall 브릿지 분기 처리',
            '가입 후 분기: 닉네임 입력, 맞춤 필터 입력, 홈 이동 상태 처리',
            '설문: JSON 문항 타입별 컴포넌트 렌더링 및 답변 저장',
            '간편 신청 서명: vue-drawing-canvas + html2canvas로 서명 이미지 업로드',
        ],
        outcome: [
            '가입, 맞춤 필터 입력, 정책 탐색, 상세 확인, 찜하기, 간편 신청까지 핵심 사용자 흐름 구축',
            '사용자 조건 기반 맞춤 정책 추천 흐름 개선',
            '정책별 설문과 간편 신청 서명 기능 추가로 참여/신청 경험 확장',
            'SNS 로그인, 앱 웹뷰 브릿지, 동적 폼, Canvas 업로드 등 B2C 실무 기능 경험',
        ],
        links: [
            {
                label: '웰로',
                url: 'https://www.wello.info/',
            },
        ],
    },
    {
        id: "wellobiz-b2b-nuxt",
        company: "주식회사 웰로",
        title: "웰로비즈 B2B 프론트엔드",
        summary: "정부지원사업 추천, 사업현황, 일정, 멤버 협업을 관리하는 Nuxt.js 기반 B2B 웹 서비스",
        period: "",
        role: "프론트엔드 개발",
        contribution: "",
        team: "",
        platform: "PC Web, Mobile Web",
        techStack: [
            "Nuxt.js 2",
            "Vue.js 2",
            "Vuex",
            "JavaScript",
            "SCSS",
            "Element UI",
            "Axios",
            "Day.js",
            "vuedraggable",
            "Swiper Lazy",
            "svg-sprite-loader",
            "@nuxtjs/sitemap"
        ],
        overview: [
            "웰로비즈 B2B 서비스의 Nuxt.js 프론트엔드 구조 및 공통 설정 구성",
            "정부지원사업 추천, 사업현황, 사업일정, 멤버 협업 관리 화면 개발",
            "PC/Mobile 라우팅, 인증 체크, 공통 API 요청, 공통 스타일 기반 정리"
        ],
        keyFeatures: [
            "관심사업, 접수사업, 선정사업, 종료사업을 한눈에 확인하는 사업현황 칸반보드",
            "Drag and drop으로 사업 상태를 변경하고 API와 동기화하는 관리 흐름",
            "공휴일, 사업일정, 반복일정을 함께 표시하는 월별 캘린더",
            "멤버 검색, 초대, 초대메일 재발송, 삭제, 권한 변경 기능",
            "블로그 콘텐츠별 SSR meta 변경 및 sitemap 경로 구성",
            "SVG 파일을 공통 icon 컴포넌트로 사용하는 sprite 기반 아이콘 구조"
        ],
        responsibilities: [
            "Nuxt.js 프로젝트 공통 설정 정리: env, router middleware, plugins, sitemap, Element UI",
            "Axios instance 구성: 토큰, company_id, cache-control, query serializer, 공통 에러 처리",
            "SCSS 구조 정리: color, variables, base, components, pages, helper class loop 구성",
            "vuedraggable 기반 칸반보드 개발 및 드롭 이벤트 기준 사업 상태 변경 API 연동",
            "월별 캘린더 그리드 생성, 일정/공휴일/반복일정 데이터 병합, 일정 CRUD 연동",
            "대시보드 블로그 콘텐츠 이미지에 Swiper lazy-loading 적용",
            "멤버 초대 URL 생성, 기존/신규 멤버 초대 분기, 재발송/삭제/권한 변경 흐름 구현",
            "asyncData로 블로그 상세 데이터를 선조회하고 head()에서 SEO meta 동적 생성"
        ],
        challenges: [
            {
                title: "사업 상태 변경 UX 개선",
                description: "리스트 기반 상태 관리 대신 칸반보드로 사업 단계를 시각화하고, 드롭 시점에 사업 타입 변경 API를 호출하도록 구현"
            },
            {
                title: "캘린더 데이터 정규화",
                description: "공휴일, 일반 일정, 반복 일정 데이터를 월 단위로 불러온 뒤 날짜별 list 구조로 재가공하여 화면에 표시"
            },
            {
                title: "공통 스타일 유지보수",
                description: "Element UI를 사용하면서 서비스 색상, 버튼, 카드, 폼, 간격 helper를 SCSS 구조로 정리해 화면 간 스타일 편차를 줄임"
            },
            {
                title: "SSR SEO 처리",
                description: "블로그 상세 콘텐츠를 asyncData에서 먼저 조회하고, 콘텐츠별 title, description, keyword, image meta를 서버 렌더 시점에 반영"
            }
        ],
        implementation: [
            "nuxt.config.js에서 dotenv, device, dayjs, sitemap, plugins, svg-sprite-loader 설정 구성",
            "API 요청 wrapper에서 Authorization, company_id header 자동 주입 및 공통 response 처리",
            "production sitemap에서 블로그 SEO API를 조회해 콘텐츠 상세 route를 동적으로 생성",
            "칸반보드 컬럼별 drag option을 분기하고 권한 제한 상태에서는 drag 이동을 차단",
            "캘린더에서 월 이동, 오늘 이동, 더보기 popover, 일정 상세/수정/삭제 dialog 구성",
            "반복 일정은 DAILY, WEEKLY, MONTHLY, YEARLY 조건을 계산해 날짜별 이벤트로 변환",
            "멤버 초대 시 이메일 조회 결과에 따라 기존 계정 초대 또는 신규 멤버 생성 후 초대 처리",
            "SVG 아이콘은 icons/svg 폴더를 require.context로 수집하고 svg-icon 컴포넌트에서 currentColor로 제어"
        ],
        outcome: [
            "사업 진행 상태를 컬럼별로 확인하고 drag and drop으로 변경하는 관리 흐름 제공",
            "사업일정을 월 단위로 관리하고 일정 등록, 수정, 삭제까지 연결된 운영 화면 제공",
            "멤버 초대, 재발송, 삭제, 권한 변경을 설정 화면에서 처리할 수 있는 협업 관리 기능 제공",
            "공통 API, 스타일, 아이콘 구조 정리로 신규 화면 개발 시 반복 작업 감소",
            "블로그 콘텐츠별 SSR meta와 sitemap 구성으로 검색 노출을 위한 기술 기반 마련"
        ],
        links: []
    }

];
