'use client';

import { useEffect } from 'react';
import useThemeStore from '@/store/theme';

export default function ThemeToggle() {
  const theme = useThemeStore((state) => state.theme);
  const initializeTheme = useThemeStore((state) => state.initializeTheme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return (
    <button
      onClick={toggleTheme}
      aria-label="테마 전환"
      className="group relative flex h-10 w-10 items-center cursor-pointer justify-center overflow-hidden bg-transparent transition-colors duration-300 hover:text-orange-strong active:scale-95"
    >
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${theme === 'light' ? 'translate-y-0 opacity-100 rotate-0' : 'translate-y-8 opacity-0 rotate-45'}
        `}
      >
        <svg className="w-6 h-6 text-orange-strong group-hover:animate-spin-slow origin-center" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 2.32a1 1 0 011.415 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zm-3.1 4.606a1 1 0 010 1.415l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4.22-2.32a1 1 0 01-1.415 0l-.707-.707a1 1 0 011.414-1.414l.707.707a1 1 0 010 1.414zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm3.1-4.606a1 1 0 010-1.415l.707-.707a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </span>

      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${theme === 'dark' ? 'translate-x-0 opacity-100 rotate-0' : 'translate-x-8 opacity-0 -rotate-45'}
        `}
      >
        <svg className="w-6 h-6 text-yellow-soft group-hover:animate-wiggle origin-bottom" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </span>
    </button>
  );
}
