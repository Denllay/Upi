import { StringParam, useQueryParam, withDefault } from 'use-query-params';

export const useTypeSearch = () => {
  const [typeParam, setTypeParam] = useQueryParam('type', withDefault(StringParam, 'repositories'));

  return { typeParam, setTypeParam };
};
