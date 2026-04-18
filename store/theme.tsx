import { create } from 'zustand';

type Theme = 'dark' | 'light';

interface ThemeStoreState {
    theme: Theme;
    initializeTheme: () => void;
    setTheme: (nextTheme: Theme) => void;
    toggleTheme: () => void;
}

function getStoredTheme(): Theme {
    if (typeof window === 'undefined') {
        return 'light';
    }

    return localStorage.getItem('theme-storage') === 'dark' ? 'dark' : 'light';
}

function applyThemeClass(theme: Theme) {
    if (typeof document === 'undefined') {
        return;
    }

    document.documentElement.classList.toggle('dark', theme === 'dark');
}

const useThemeStore = create<ThemeStoreState>((set) => ({
    theme: 'light',
    initializeTheme: () => {
        const nextTheme = getStoredTheme();
        applyThemeClass(nextTheme);
        set({ theme: nextTheme });
    },
    setTheme: (nextTheme) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme-storage', nextTheme);
        }

        applyThemeClass(nextTheme);
        set({ theme: nextTheme });
    },
    toggleTheme: () => set((state) => {
        const nextTheme = state.theme === 'light' ? 'dark' : 'light';

        if (typeof window !== 'undefined') {
            localStorage.setItem('theme-storage', nextTheme);
        }

        applyThemeClass(nextTheme);
        return { theme: nextTheme };
    }),
}));

export default useThemeStore;
