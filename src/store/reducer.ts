import { combineReducers } from '@reduxjs/toolkit';
import { githubApi } from '../api/github';
import favoritesReducer from './slice/favorites';

export const rootReducer = combineReducers({
  [githubApi.reducerPath]: githubApi.reducer,
  fav: favoritesReducer,
});
