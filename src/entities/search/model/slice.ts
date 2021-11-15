import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { searchApi } from '@shared/api';
import { SearchInitialState } from './types';

const initialState: SearchInitialState = {
  countResults: null,
};

const { searchCode, searchCommits, searchRepositories, searchUsers } = searchApi.endpoints;

const Search = createSlice({
  name: 'Search',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addMatcher(
      isAnyOf(
        searchCode.matchFulfilled,
        searchCommits.matchFulfilled,
        searchRepositories.matchFulfilled,
        searchUsers.matchFulfilled
      ),
      (state, { payload }) => {
        state.countResults = payload.total_count;
      }
    );
  },
});

export const { reducer } = Search;
