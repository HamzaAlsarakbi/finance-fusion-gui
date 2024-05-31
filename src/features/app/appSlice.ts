import { createAppSlice } from '@/app/createAppSlice';
import type { PayloadAction } from '@reduxjs/toolkit';


interface AppSlice {
    path: 'login' | 'plan/dashboard';
    theme: 'light' | 'dark';
    isLoading: boolean;
}

const initialState: AppSlice = {
    path: 'login',
    theme: 'dark',
    isLoading: false,
};


export const appSlice = createAppSlice({
    name: 'app',
    initialState,
    reducers: (create) => ({
        setPath: create.reducer((state, action: PayloadAction<AppSlice['path']>) => {
            state.path = action.payload;
        }),
        setTheme: create.reducer((state, action: PayloadAction<AppSlice['theme']>) => {
            state.theme = action.payload;
        }),
        setIsLoading: create.reducer((state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        }),
    }),
});