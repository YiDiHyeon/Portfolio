import type { Metadata } from "next";
import localFont from "next/font/local";
import SiteChrome from "./_components/site-chrome";
import "./globals.css";

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Variable.woff2",
      weight: "300 900",
      style: "normal",
    },
  ],
  variable: "--font-satoshi-variable",
  display: "block",
  preload: true,
  fallback: ["Apple SD Gothic Neo", "Noto Sans KR", "system-ui", "sans-serif"],
  adjustFontFallback: "Arial",
});

const clashDisplay = localFont({
  src: "../public/fonts/ClashDisplay-Variable.woff2",
  weight: "200 700",
  style: "normal",
  variable: "--font-clash-display",
  display: "block",
  preload: true,
  fallback: ["Arial", "system-ui", "sans-serif"],
  adjustFontFallback: "Arial",
});

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  weight: "45 920",
  style: "normal",
  variable: "--font-pretendard",
  display: "swap",
  preload: false,
  fallback: ["Apple SD Gothic Neo", "Noto Sans KR", "system-ui", "sans-serif"],
  adjustFontFallback: "Arial",
});

export const metadata: Metadata = {
  title: '이지현 | Frontend Developer',
  description: '운영 가능한 UI를 만드는 프론트엔드 개발자 포트폴리오',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${satoshi.variable} ${clashDisplay.variable} ${pretendard.variable} relative antialiased font-sans`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('theme-storage');
                const isDark = stored === 'dark';
                if (isDark) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="relative min-h-screen w-full bg-bg text-text-primary">
        <SiteChrome />
        <div className="flex min-h-screen flex-col lg:flex-row">
          <div
            id="main-scroll-container"
            className="relative min-w-0 flex-1"
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
