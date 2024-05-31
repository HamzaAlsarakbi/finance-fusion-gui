// src/features/featureA/featureASelectors.ts
import { RootState } from '@/app/store';

export const selectForm = (state: RootState) => {
  const { username, password } = state.login;
  return { username, password };
};
export const selectAttempts = (state: RootState) => state.login.attempts;
