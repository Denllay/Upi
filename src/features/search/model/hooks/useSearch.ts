import { NumberParam, StringParam, useQueryParam, withDefault } from 'use-query-params';
import { useTypeSearch } from './params';
import { useSortSearch } from './useSortSearch';

export const useSearch = () => {
  const [queryParam, setQueryParam] = useQueryParam('q', withDefault(StringParam, ''));
  const [pageParam, setPageParam] = useQueryParam('p', withDefault(NumberParam, 1));
  const { typeParam, setTypeParam } = useTypeSearch();
  const { setSortParams, sortParams, activeOption, setDefaultSort } = useSortSearch();

  const changeQuery = (query: string) => {
    setQueryParam(query);
    setPageParam(1);
    setDefaultSort();
  };

  const changeType = (type: string) => {
    setTypeParam(type);
    setPageParam(1);
    setDefaultSort();
  };

  const changeSort = (sort: Record<'s' | 'o', string>) => {
    setSortParams(sort);
    setPageParam(1);
  };

  return {
    queryParam,
    pageParam,
    typeParam,
    sortParams,
    activeOption,
    changeQuery,
    changeType,
    changeSort,
  };
};
