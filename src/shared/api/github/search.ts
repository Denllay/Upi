import { githubApi } from './github';
import { SearchOnCacheEntryAdded, SearchParams } from './models';
import { searchEntryAdded } from './SearchEntryAdded';

const onCacheEntryAdded: SearchOnCacheEntryAdded = async (_, { cacheDataLoaded, dispatch }) => {
  const { data } = await cacheDataLoaded;

  searchEntryAdded.onCacheEntryAdded(data.total_count, dispatch);
};

export const userApiSlice = githubApi.injectEndpoints({
  endpoints: (builder) => ({
    searchRepositories: builder.query<any, SearchParams>({
      query: (params) => ({
        url: 'search/repositories',
        params,
      }),
      onCacheEntryAdded,
    }),

    searchCode: builder.query<any, SearchParams>({
      query: (params) => ({
        url: 'search/code',
        params,
      }),

      onCacheEntryAdded,
    }),

    searchCommits: builder.query<any, SearchParams>({
      query: (params) => ({
        url: 'search/commits',
        params,
      }),
      onCacheEntryAdded,
    }),

    searchUsers: builder.query<any, SearchParams>({
      query: (params) => ({
        url: 'search/users',
        params,
      }),
      onCacheEntryAdded,
    }),
  }),
});

export const { useSearchRepositoriesQuery, useSearchCodeQuery, useSearchCommitsQuery, useSearchUsersQuery } = userApiSlice;
