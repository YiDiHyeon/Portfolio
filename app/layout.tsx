import type { Metadata } from "next";
import localFont from "next/font/local";
import {
  siteDescription,
  siteName,
  siteOrigin,
  siteTitle,
} from "@/lib/site-metadata";
import BrowserSafetyPatches from "./_components/browser-safety-patches";
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
  metadataBase: siteOrigin,
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName,
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og-image.png",
        alt: "이지현 프론트엔드 개발자 포트폴리오 대표 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
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
      <body className="relative min-h-screen w-full overflow-x-clip bg-bg text-text-primary">
        <BrowserSafetyPatches />
        <SiteChrome />
        <div className="min-h-screen lg:flex lg:flex-row">
          <div
            id="main-scroll-container"
            className="relative min-w-0 w-full lg:flex-1"
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
