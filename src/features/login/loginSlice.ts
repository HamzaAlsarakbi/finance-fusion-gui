import { createAppSlice } from '@/app/createAppSlice';
import type { PayloadAction } from '@reduxjs/toolkit';

interface LoginForm {
  username: string;
  password: string;
}

export interface LoginSliceState extends LoginForm {
  attempts: number;
}

const initialState: LoginSliceState = {
  username: '',
  password: '',
  attempts: 0,
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const loginSlice = createAppSlice({
  name: 'login',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: (create) => ({
    incrementAttempt: create.reducer((state) => {
      state.attempts++;
    }),
    resetAttempts: create.reducer((state) => {
      state.attempts = 0;
    }),
    // Use the `PayloadAction` type to declare the contents of `action.payload`
    setUsername: create.reducer(
      (state, action: PayloadAction<string>) => {
        state.username = action.payload;
      },
    ),
    setPassword: create.reducer(
      (state, action: PayloadAction<string>) => {
        state.username = action.payload;
      },
    ),
  }),
});

// Action creators are generated for each case reducer function.
export const { incrementAttempt, resetAttempts, setUsername, setPassword } = loginSlice.actions;