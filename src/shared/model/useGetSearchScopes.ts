import { useTypedParams } from '.';

enum ScopeNameList {
  USERNAME = 'In this user',
  REPOSITORY = 'In this repository',
  GITHUB = 'All Github',
}

export interface ScopeSearchList {
  name: ScopeNameList;
  type: 'username' | 'repository' | 'github';
  data: string | null;
}

export const useGetSearchScopes = () => {
  const { username, repository } = useTypedParams();

  const scopeSearchList: ScopeSearchList[] = [
    {
      name: ScopeNameList.USERNAME,
      type: 'username',
      data: username,
    },
    {
      name: ScopeNameList.REPOSITORY,
      type: 'repository',
      data: repository,
    },
    {
      name: ScopeNameList.GITHUB,
      type: 'github',
      data: 'all',
    },
  ];

  return scopeSearchList;
};
