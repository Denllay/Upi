import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const githubApi = createApi({
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

  endpoints: () => ({}),
});
