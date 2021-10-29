import { githubApi } from './github';
import { GetAllUserRepos, Repo, UserData } from './models';

export const userApiSlice = githubApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserData: builder.query<UserData, string | null | void>({
      query: (username) => {
        if (username) {
          return `users/${username}`;
        }

        return 'user';
      },
    }),

    getAllUserRepos: builder.query<Repo[], GetAllUserRepos>({
      query: ({ isOwner, username }) => {
        if (isOwner) {
          return 'user/repos';
        }

        return `users/${username}/repos`;
      },
    }),
  }),
});

export const { useGetUserDataQuery, useGetAllUserReposQuery } = userApiSlice;
