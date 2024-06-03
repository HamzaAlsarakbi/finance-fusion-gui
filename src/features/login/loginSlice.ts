// loginSlice.ts
import { StateCreator } from "zustand";

interface LoginForm {
  username: string;
  password: string;
}

export interface LoginSlice {
  login: LoginForm & {
    attempts: number;
    incrementAttempt: () => void;
    resetAttempts: () => void;
    setUsername: (username: string) => void;
    setPassword: (password: string) => void;
  };
}

export const createLoginSlice: StateCreator<LoginSlice> = (
  set,
): LoginSlice => ({
  login: {
    username: "",
    password: "",
    attempts: 0,
    incrementAttempt: () =>
      set((state) => ({
        login: { ...state.login, attempts: state.login.attempts + 1 },
      })),
    resetAttempts: () =>
      set((state) => ({ login: { ...state.login, attempts: 0 } })),
    setUsername: (username) =>
      set((state) => ({
        login: { ...state.login, username: username.trim() },
      })),
    setPassword: (password) =>
      set((state) => ({
        login: { ...state.login, password: password.trim() },
      })),
  },
});
