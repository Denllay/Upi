export interface SortParam {
  o: 'asc' | 'desc' | undefined;
  s: string | undefined;
}

export interface SortOption extends SortParam {
  name: string;
}

export type SearchCategories = 'users' | 'code' | 'repositories' | 'commits';

export enum ScopeNames {
  USERNAME = 'In this user',
  REPOSITORY = 'In this repository',
  GITHUB = 'All Github',
}

export interface SearchScopes {
  name: ScopeNames;
  type: 'username' | 'repository' | 'github';
  queryParam: string | undefined;
}
