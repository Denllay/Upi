import { StringParam, useQueryParams, withDefault } from 'use-query-params';
import { useTypeSearch } from './params';
import { SearchCategories, SortOption } from '../types';

type SortOptionsCategories = Record<SearchCategories, SortOption[]>;

const defaultOption: SortOption = {
  name: 'Best Match',
  o: undefined,
  s: undefined,
};

type CreateOptionParam = [string, string?];

const createSortOption = (data: CreateOptionParam[]) => {
  const optionList: SortOption[] = [];

  for (const [sortParam, name = sortParam] of data) {
    optionList.push({ name: `Most ${name}`, o: 'desc', s: sortParam });

    optionList.push({ name: `Fewer ${name}`, o: 'asc', s: sortParam });
  }

  return [defaultOption, ...optionList];
};

const sortOptionsCategories: SortOptionsCategories = {
  repositories: createSortOption([['stars'], ['forks'], ['updated', 'recently updated']]),
  code: createSortOption([['stars'], ['indexed', 'recently indexed']]),
  users: createSortOption([['followers'], ['repositories'], ['joined', 'recently joined']]),
  commits: createSortOption([
    ['committer-date', 'recently committed'],
    ['author-date', 'recently authored'],
  ]),
};

export const useSortSearch = () => {
  const { typeParam } = useTypeSearch();
  const [sortParams, setSortParams] = useQueryParams({
    o: withDefault(StringParam, undefined),
    s: withDefault(StringParam, undefined),
  });

  const activeOptionScope = sortOptionsCategories[typeParam as SearchCategories];
  const activeOption = activeOptionScope.find((option) => option.o === sortParams.o && option.s === sortParams.s);

  const setDefaultSort = () => {
    setSortParams({ o: undefined, s: undefined });
  };

  return {
    sortParams,
    setSortParams,
    activeOption,
    activeOptionScope,
    setDefaultSort,
  };
};
