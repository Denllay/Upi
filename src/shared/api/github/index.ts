import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Branch, GetREADMERepo, GetRepo, Readme, Repo, UserData } from './types';

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
    prepareHeaders: (headers, { getState }) => {
      const { token } = (getState() as RootState).viewer;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      headers.set('accept', 'application/vnd.github.v3+json');
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getUserData: builder.query<UserData, string | null | void>({
      query: (username) => {
        if (username) {
          return `users/${username}`;
        }

        return 'user';
      },
    }),

    getAllUserRepos: builder.query<Repo[], string>({
      query: (username) => `users/${username}/repos`,
    }),

    getRepo: builder.query<Repo, GetRepo>({
      query: ({ username, repository }) => `repos/${username}/${repository}`,
    }),
    getAllRepoBranches: builder.query<Branch[], GetRepo>({
      query: ({ username, repository }) => `repos/${username}/${repository}/branches`,
    }),
    getRepoREADME: builder.query<Readme, GetREADMERepo>({
      query: ({ username, repository }) => `repos/${username}/${repository}/readme`,
    }),
  }),
});

export const {
  useGetUserDataQuery,
  useGetRepoREADMEQuery,
  useGetAllUserReposQuery,
  useGetRepoQuery,
  useGetAllRepoBranchesQuery,
} = githubApi;
