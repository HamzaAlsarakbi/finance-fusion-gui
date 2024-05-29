import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppSliceState {
  theme: 'light' | 'dark';
  nav: 'login' | 'register' | 'home';
}
const initialState: AppSliceState = {
  theme: 'dark',
  nav: 'login',
};


export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<AppSliceState['theme']>) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setNav: (state, action: PayloadAction<AppSliceState['nav']>) => {
      state.nav = action.payload;
    },
  },
});