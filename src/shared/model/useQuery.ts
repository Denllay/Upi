import { useLocation } from 'react-router-dom';

interface QueryParams {
  q?: string;
  o?: string;
  s?: string;
  type?: string;
}
const paramsKeys = ['q', 's', 'o', 'type'];

export const useSearchParams = (params: QueryParams | undefined = {}) => {
  const queryParams = new URLSearchParams(useLocation().search);

  const getParam = (str: string) => {
    const param = queryParams.get(str);

    return param || null;
  };

  const initialParams: QueryParams = paramsKeys.reduce((acc: Record<string, string | null>, key) => {
    const param = getParam(key);

    acc[key] = param;

    return acc;
  }, {});

  const formattedParams = { ...initialParams, ...params };

  const getPathWithParams = () => {
    let path = '/search?';

    for (const [key, param] of Object.entries(formattedParams)) {
      if (param) {
        const paramQuery = `${key}=${param}&`;

        path += paramQuery;
      }
    }

    return path.slice(0, -1);
  };

  const pathWithParams = getPathWithParams();

  return { formattedParams, pathWithParams };
};
