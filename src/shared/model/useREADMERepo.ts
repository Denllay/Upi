import { useGetRepoREADMEQuery } from '@shared/api';
import { Base64Decode } from '@shared/lib';

export const useREADMERepo = (ownerName: string, repoName: string = ownerName) => {
  const data = useGetRepoREADMEQuery(
    { ownerName, repoName },
    {
      selectFromResult: ({ data, isLoading, isUninitialized, ...rest }) => {
        const { content = '' } = data || {};

        const README = Base64Decode(content);

        return { data: README, isLoading: isLoading || isUninitialized, ...rest };
      },
    }
  );

  return data;
};
