# Portfolio

이지현 프론트엔드 개발자 포트폴리오 프로젝트입니다.  
메인 페이지는 강한 인터랙션과 브랜딩 중심으로, 프로젝트 상세 페이지는 텍스트 중심의 케이스 스터디 구조로 설계되어 있습니다.

## 개요

- `Next.js 16` App Router 기반 포트폴리오
- 메인 랜딩과 프로젝트 상세를 하나의 콘텐츠 시스템으로 관리
- `lib/portfolio-content.ts`를 기준으로 홈 섹션과 상세 페이지를 데이터 기반으로 렌더링
- 라이트/다크 모드 지원
- 반응형 레이아웃 지원

## 주요 특징

- 메인 홈 섹션
  - `Home → Profile → Experience → Projects → Footer` 순서의 싱글 페이지 구조
  - 스크롤 기반 배경 연출과 섹션별 강조 인터랙션
  - 스크롤 스파이 기반 글로벌 네비게이션

- 프로젝트 상세 페이지
  - `[slug]` 기반 정적 상세 페이지 생성
  - Hero, 개요, 핵심 설계, 기술적 의사결정, 결과, 회고 구성
  - 텍스트 중심 케이스 스터디 레이아웃
  - 상세 프로젝트별 미디어, 기술 스택, 역할, 결과 흐름 표시

- 콘텐츠 관리 방식
  - 프로필, 경력, 프로젝트, 푸터 데이터가 모두 `lib/portfolio-content.ts`에 집약
  - 프로젝트 기술 스택은 단순 배열과 그룹형 배열 둘 다 지원
  - 상세 페이지는 데이터 존재 여부에 따라 섹션이 조건부 렌더링

## 기술 스택

- Framework: `Next.js 16`, `React 19`, `TypeScript`
- Styling: `Tailwind CSS v4`
- Motion: `Framer Motion`
- State: `Zustand`

## 디렉터리 구조

```text
app/
  page.tsx                              메인 홈 페이지
  (project-detail)/[slug]/              프로젝트 상세 페이지
  _components/                          메인/공통 섹션 컴포넌트
components/                             범용 UI 컴포넌트
lib/
  portfolio-content.ts                  포트폴리오 데이터
  project-tech.ts                       기술 스택 유틸
  section-navigation.ts                 메인 네비게이션 정의
store/
  theme.tsx                             테마 상태 관리
types/
  portfolio.ts                          콘텐츠 타입 정의
public/
  project-detail/                       상세 페이지 미디어
  dddoodle-pack/                        배경 연출에 사용되는 SVG 에셋
```

## 시작 방법

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`으로 접속하면 됩니다.

## 스크립트

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## 주요 라우트

- `/`
  - 메인 포트폴리오 홈

- `/projects`
  - 현재는 `/#projects`로 리다이렉트

- `/[slug]`
  - 프로젝트 상세 페이지
  - 현재 데이터 기준 예시:
    - `/portfolio`
    - `/tarome`
    - `/chap-landing`
    - `/nova-admin`

## 콘텐츠 수정 포인트

- 프로필/경력/프로젝트 데이터 수정
  - [lib/portfolio-content.ts](/Users/ijihyeon/jh/portfolio/lib/portfolio-content.ts)

- 타입 수정
  - [types/portfolio.ts](/Users/ijihyeon/jh/portfolio/types/portfolio.ts)

- 메인 페이지 섹션 순서
  - [app/page.tsx](/Users/ijihyeon/jh/portfolio/app/page.tsx)

- 프로젝트 상세 Hero
  - [app/(project-detail)/[slug]/project-detail-hero.tsx](/Users/ijihyeon/jh/portfolio/app/(project-detail)/[slug]/project-detail-hero.tsx)

- 프로젝트 상세 본문 섹션
  - [app/(project-detail)/[slug]/project-detail-sections.tsx](/Users/ijihyeon/jh/portfolio/app/(project-detail)/[slug]/project-detail-sections.tsx)

- 전역 토큰 및 타이포그래피
  - [app/globals.css](/Users/ijihyeon/jh/portfolio/app/globals.css)

## 테마와 타이포그래피

- 기본 한글 UI 폰트는 `Pretendard`
- 영어 디스플레이 계열은 `Satoshi`, `Clash Display`, `General Sans`, `Barlow Semi Condensed`를 선택적으로 사용
- 전역 색상/타입 토큰은 `app/globals.css`에서 관리
- 테마 상태는 `localStorage`의 `theme-storage` 키와 `store/theme.tsx`를 통해 유지

## 작업 원칙

- 메인 페이지는 브랜딩과 인터랙션 중심의 디자인 페이지로 유지
- 프로젝트 상세 페이지는 가독성과 정보 위계를 우선하는 문서형 구조로 유지
- 새 프로젝트를 추가할 때는 데이터와 미디어를 먼저 정리하고, 필요할 때만 컴포넌트 분기를 추가

## 관련 문서

- [docs/SPEC.md](/Users/ijihyeon/jh/portfolio/docs/SPEC.md)
- [docs/project-detail-strategy.md](/Users/ijihyeon/jh/portfolio/docs/project-detail-strategy.md)
