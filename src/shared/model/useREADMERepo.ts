import { useGetRepoREADMEQuery } from '@shared/api';
import { Base64Decode } from '@shared/lib';

export const useREADMERepo = (ownerName: string, repoName: string = ownerName) => {
  const data = useGetRepoREADMEQuery(
    { ownerName, repoName },
    {
      selectFromResult: ({ data, ...rest }) => {
        const { content = '' } = data || {};

        const README = Base64Decode(content);

        return { data: README, ...rest };
      },
    }
  );

  return data;
};
