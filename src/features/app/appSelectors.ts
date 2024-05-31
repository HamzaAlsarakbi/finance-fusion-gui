// src/features/featureA/featureASelectors.ts
import { RootState } from '@/app/store';

export const selectPath = (state: RootState) => {
    return state.app.path
};

export const selectTheme = (state: RootState) => {
    return state.app.theme
};