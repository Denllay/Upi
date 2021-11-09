import { viewerModel } from '@entities/viewer';
import { searchState } from '@entities/search';
import { configureStore } from '@reduxjs/toolkit';
import { githubApi } from '@shared/api';

export const store = configureStore({
  reducer: {
    viewer: viewerModel.ViewerReducer,
    search: searchState.SearchReducer,
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware),
});
