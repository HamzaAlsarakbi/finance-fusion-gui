import { createAppSlice } from '@/src/redux-store/createAppSlice';
import type { AppThunk } from '@/src/redux-store/store';
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
    setForm: create.reducer(
      (state, action: PayloadAction<LoginForm>) => {
        const { username, password } = action.payload;
        state.username = username;
        state.password = password;
      },
    ),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectUsername: (login: LoginSliceState) => login.username,
    selectPassword: (login: LoginSliceState) => login.password,
    selectAttempts: (login: LoginSliceState) => login.attempts,
  },
});

// Action creators are generated for each case reducer function.
export const { incrementAttempt, resetAttempts, setForm } = loginSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectUsername, selectPassword, selectAttempts } =
  loginSlice.selectors;
