import { Theme } from '@/assets/themes/themes';
import { StateCreator } from 'zustand';

export interface AppSlice {
  app: {
    theme: Theme;
    path: 'splash' | 'login' | 'dashboard';
    setTheme: (theme: Theme) => void;
  };
}

export const createAppSlice: StateCreator<AppSlice> = (set): AppSlice => ({
  app: {
    theme: 'light',
    // TODO: change to splash
    path: 'login',
    setTheme: (theme) => set((state) => ({ app: { ...state.app, theme } })),
  },
});
