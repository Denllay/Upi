import { githubApi } from './github';
import {
  Branch,
  GetLastComment,
  GetREADMERepo,
  GetRepo,
  GetRepoContents,
  LastCommit,
  Readme,
  Repo,
  RepoContentsParams,
  RepoDirContents,
  RepoFileContents,
} from './models';

export const repoApi = githubApi.injectEndpoints({
  endpoints: (builder) => ({
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
  useGetRepoREADMEQuery,
  useGetRepoQuery,
  useGetAllRepoBranchesQuery,
  useGetLastCommitQuery,
  useGetRepoContentsQuery,
} = repoApi;
