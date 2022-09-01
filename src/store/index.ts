import { configureStore, Middleware } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';
import { githubApi } from '../api/github';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaulMiddleware: () => Middleware[]) =>
    getDefaulMiddleware().concat(githubApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
