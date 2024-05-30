// src/features/featureA/featureASelectors.ts
import { RootState } from '../../app/store';

export const userLoginForm = (state: RootState) => {
  const { username, password } = state.login;
  return { username, password };
};
export const userLogin = (state: RootState) => state.login.username;
