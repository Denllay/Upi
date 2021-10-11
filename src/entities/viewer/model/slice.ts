import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ViewerInitialState, UpdateUserDetailsPayload } from './types';

const initialState: ViewerInitialState = {
  isAuth: false,
  token: null,
  email: null,
  photoURL: null,
};

export const Viewer = createSlice({
  name: 'Viewer',
  initialState,
  reducers: {
    UpdateUserDetails: (state, { payload }: PayloadAction<UpdateUserDetailsPayload>) => {
      const { token, photoURL, email } = payload;
      state.token = token;
      state.email = email;
      state.photoURL = photoURL;
      state.isAuth = true;
    },
  },
});
