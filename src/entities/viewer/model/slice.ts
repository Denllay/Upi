import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ViewerInitialState } from './types';

const initialState: ViewerInitialState = {
  isAuth: false,
  token: null,
};

export const Viewer = createSlice({
  name: 'Viewer',
  initialState,
  reducers: {
    UpdateUserDetails: (state, { payload }: PayloadAction<string>) => {
      state.token = payload;
      state.isAuth = true;
    },
  },
});
