import { create } from 'zustand';

type Theme = 'dark' | 'light';

interface ThemeStoreState {
    theme: Theme;
    setTheme: (nextTheme: Theme) => void;
    toggleTheme: () => void;
}

const useThemeStore = create<ThemeStoreState>((set) => ({
    theme: 'light',
    setTheme: (nextTheme) => {
        localStorage.setItem('theme-storage', nextTheme);
        set({ theme: nextTheme });
    },
    toggleTheme: () => set((state) => {
        const nextTheme = state.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme-storage', nextTheme);
        return { theme: nextTheme };
    }),
}));

export default useThemeStore;
