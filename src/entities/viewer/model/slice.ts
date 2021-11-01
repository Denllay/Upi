import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UpdateUserDetailsPayload, ViewerInitialState } from './types';

const initialState: ViewerInitialState = {
  isAuth: null,
  token: null,
  login: null,
};

const Viewer = createSlice({
  name: 'Viewer',
  initialState,
  reducers: {
    UpdateUserDetails: (state, { payload }: PayloadAction<UpdateUserDetailsPayload>) => {
      return Object.assign(state, payload);
    },
    SignOutUser: (state) => {
      return Object.assign(state, { ...initialState, isAuth: false });
    },
  },
});

export const { SignOutUser, UpdateUserDetails } = Viewer.actions;
export const { reducer } = Viewer;
