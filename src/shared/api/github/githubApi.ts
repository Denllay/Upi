import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Readme, UserData } from './types';

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
    prepareHeaders: (headers, { getState }) => {
      const { token } = (getState() as RootState).viewer;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUserData: builder.query<UserData, void>({
      query: () => 'user',
    }),
    getUserREADME: builder.query<Readme, string>({
      query: (login) => `repos/${login}/${login}/readme`,
    }),
  }),
});

export const { useGetUserDataQuery, useGetUserREADMEQuery } = githubApi;
