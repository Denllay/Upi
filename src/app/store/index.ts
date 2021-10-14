import Viewer from '@entities/viewer/model';
import { configureStore } from '@reduxjs/toolkit';
import { githubApi } from '@shared/api';

export const store = configureStore({
  reducer: {
    viewer: Viewer,
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware),
});
