import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  LastCommit,
  GetREADMERepo,
  GetRepo,
  GetRepoContents,
  Readme,
  Repo,
  UserData,
  Branch,
  GetLastComment,
  RepoContentsParams,
  RepoFileContents,
  RepoDirContents,
} from './types';

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

    getLastCommit: builder.query<LastCommit[], GetLastComment>({
      query: ({ username, repository, branch, path }) => {
        const url = `repos/${username}/${repository}/commits`;

        return {
          url,
          params: {
            per_page: 1,
            sha: branch,
            path,
          },
        };
      },
    }),

    getAllRepoBranches: builder.query<Branch[], GetRepo>({
      query: ({ username, repository }) => `repos/${username}/${repository}/branches`,
    }),

    getRepoREADME: builder.query<Readme, GetREADMERepo>({
      query: ({ username, repository }) => `repos/${username}/${repository}/readme`,
    }),

    getRepoContents: builder.query<RepoDirContents[] | RepoFileContents, GetRepoContents>({
      query: ({ username, repository, path = '', branch }) => {
        const url = `repos/${username}/${repository}/contents/${path}`;
        const params: RepoContentsParams = {};

        if (branch) {
          params.ref = branch;
        }
        return {
          url,
          params,
        };
      },
    }),
  }),
});

export const {
  useGetUserDataQuery,
  useGetRepoREADMEQuery,
  useGetAllUserReposQuery,
  useGetRepoQuery,
  useGetAllRepoBranchesQuery,
  useGetLastCommitQuery,
  useGetRepoContentsQuery,
} = githubApi;
