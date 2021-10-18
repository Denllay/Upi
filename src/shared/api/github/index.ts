import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetREADMERepo, GetRepo, Readme, Repo, UserData } from './types';

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
      query: (login) => {
        if (login) {
          return `users/${login}`;
        }

        return 'user';
      },
    }),

    getAllUserRepos: builder.query<Repo[], string>({
      query: (login) => `users/${login}/repos`,
    }),

    getUserRepo: builder.query<Repo, GetRepo>({
      query: ({ ownerName, repoName }) => `repos/${ownerName}/${repoName}`,
    }),

    getRepoREADME: builder.query<Readme, GetREADMERepo>({
      query: ({ ownerName, repoName }) => `repos/${ownerName}/${repoName}/readme`,
    }),
  }),
});

export const { useGetUserDataQuery, useGetRepoREADMEQuery, useGetAllUserReposQuery, useGetUserRepoQuery } = githubApi;