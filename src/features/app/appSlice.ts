import { Theme } from '@/assets/themes/themes';
import { StateCreator } from 'zustand';

export type AppPath = 'login' | 'splash' | 'dashboard';

export interface AppSlice {
  app: {
    theme: Theme;
    path: AppPath;
    isDevMode: boolean;
    setTheme: (theme: Theme) => void;
    setPath: (path: AppPath) => void;
    setIsDevMode: (devMode: boolean) => void;
  };
}

export const createAppSlice: StateCreator<AppSlice> = (set): AppSlice => ({
  app: {
    theme: 'dark',
    path: 'splash',
    isDevMode: false,
    setTheme: (theme) => set((state) => ({ app: { ...state.app, theme } })),
    setPath: (path) => set((state) => ({ app: { ...state.app, path } })),
    setIsDevMode: (isDevMode) =>
      set((state) => ({ app: { ...state.app, isDevMode } })),
  },
});
