import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { loginSlice } from '@/features/login/loginSlice';
import { planSlice } from '@/features/plan/planSlice';
import { appSlice } from '@/features/app/appSlice';

// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.
const rootReducer = combineSlices(appSlice, loginSlice, planSlice);
// Infer the `RootState` type from the root reducer
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

// `store` encapsulates the store configuration to allow
// creating unique store instances, which is particularly important for
// server-side rendering (SSR) scenarios. In SSR, separate store instances
// are needed for each request to prevent cross-request state pollution.
export const store = configureStore({
  reducer: rootReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware().concat(quotesApiSlice.middleware);
  // },
});
