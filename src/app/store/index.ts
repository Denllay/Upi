import { viewerModel } from '@entities/viewer';
import { configureStore } from '@reduxjs/toolkit';
import { githubApi } from '@shared/api';

export const store = configureStore({
  reducer: {
    viewer: viewerModel.ViewerReducer,
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware),
});
