import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchInitialState } from './types';

const initialState: SearchInitialState = {
  countResults: null,
};

const Search = createSlice({
  name: 'Search',
  initialState,
  reducers: {
    UpdateCountResults: (state, { payload }: PayloadAction<number>) => {
      state.countResults = payload;
    },
  },
});

export const { UpdateCountResults } = Search.actions;
export const { reducer } = Search;
