import Viewer from '@entities/viewer/model';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { viewer: Viewer },
});
