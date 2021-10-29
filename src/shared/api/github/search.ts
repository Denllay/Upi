import { githubApi } from './github';
import { SearchParams } from './models';

export const userApiSlice = githubApi.injectEndpoints({
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

    searchIssues: builder.query<any, SearchParams>({
      query: (params) => ({
        url: 'search/issues',
        params,
      }),
    }),

    searchLabels: builder.query<any, SearchParams>({
      query: (params) => ({
        url: 'search/labels',
        params,
      }),
    }),

    searchTopics: builder.query<any, SearchParams>({
      query: (params) => ({
        url: 'search/topics',
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

export const {
  useSearchRepositoriesQuery,
  useSearchCodeQuery,
  useSearchCommitsQuery,
  useSearchUsersQuery,
  useSearchLabelsQuery,
  useSearchTopicsQuery,
  useSearchIssuesQuery,
} = userApiSlice;
