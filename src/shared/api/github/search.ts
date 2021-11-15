import { githubApi } from './github';
import { SearchParams } from './models';

export const searchApi = githubApi.injectEndpoints({
  endpoints: (builder) => ({
    searchRepositories: builder.query<any, SearchParams>({
      query: (params) => ({
        url: 'search/repositories',
        params,
      }),
    }),

    searchCode: builder.query<any, SearchParams>({
      query: (params) => ({
        url: 'search/code',
        params,
      }),
    }),

    searchCommits: builder.query<any, SearchParams>({
      query: (params) => ({
        url: 'search/commits',
        params,
      }),
    }),

    searchUsers: builder.query<any, SearchParams>({
      query: (params) => ({
        url: 'search/users',
        params,
      }),
    }),
  }),
});

export const { useSearchRepositoriesQuery, useSearchCodeQuery, useSearchCommitsQuery, useSearchUsersQuery } = searchApi;
