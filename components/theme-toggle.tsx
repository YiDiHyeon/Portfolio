'use client';

import { useEffect, useState } from 'react';
import useThemeStore from '@/store/theme';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const setTheme = useThemeStore((state) => state.setTheme);

  // 컴포넌트 마운트 시 로컬 스토리지의 원시 문자열을 읽어 상태를 동기화하여 서버-클라이언트 불일치를 차단합니다.
  useEffect(() => {
    const stored = localStorage.getItem('theme-storage');
    // 사용자가 명시적으로 'light'를 선택해 저장해둔 경우
    if (stored === 'light') {
      setTheme('light');
    }
    setMounted(true);
  }, [setTheme]);

  // Zustand 데이터 변경 시 body 클래스 동기화 (기본 설정은 layout.tsx의 스크립트가 로드 시점에 즉시 처리함)
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // 마운트 전에는 구조가 깨지지 않도록 투명한 빈 버튼을 내려줍니다.
  if (!mounted) {
    return (
      <button
        aria-label="테마 전환 로딩"
        className="flex items-center justify-center p-3 transition-colors rounded-full shadow-sm bg-surface text-text-primary border-border"
      >
        <div className="w-6 h-6 opacity-0" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="테마 전환"
      className="flex items-center justify-center p-3 transition-colors rounded-full shadow-sm bg-surface text-text-primary border-border hover:bg-neutral-warm"
    >
      {theme === 'dark' ? (
        // 다크모드일 때: 달 아이콘
        <svg className="w-6 h-6 text-yellow-soft" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        // 라이트모드일 때: 해 아이콘
        <svg className="w-6 h-6 text-orange-strong" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 2.32a1 1 0 011.415 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zm-3.1 4.606a1 1 0 010 1.415l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4.22-2.32a1 1 0 01-1.415 0l-.707-.707a1 1 0 011.414-1.414l.707.707a1 1 0 010 1.414zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm3.1-4.606a1 1 0 010-1.415l.707-.707a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      )}
    </button>
  );
}
