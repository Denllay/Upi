import { ScopeNames, SearchScopes } from '..';
import { useTypedParams } from '@shared/model';

export const useGetSearchScopes = () => {
  const { username, repository } = useTypedParams();

  const scopeSearchList: SearchScopes[] = [
    {
      name: ScopeNames.REPOSITORY,
      type: 'repository',
      queryParam: `repo:${username}/${repository}`,
      isVisible: !!username && !!repository,
    },
    {
      name: ScopeNames.USERNAME,
      type: 'username',
      queryParam: `user:${username}`,
      isVisible: !!username,
    },
    {
      name: ScopeNames.GITHUB,
      type: 'github',
      queryParam: undefined,
      isVisible: true,
    },
  ];

  return scopeSearchList;
};
