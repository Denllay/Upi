import { RouteParamsEnum } from '@shared/config/router';
import { useParams } from 'react-router';

// ? eslint видит "key", как неиспользуюмую переменную
/* eslint-disable */
type Params = {
  [key in RouteParamsEnum]: string;
};

export const useTypedParams = (): Params => {
  const data = useParams<Params>();
  const branchName = data.branch?.split('/')[1] || '';

  return { ...data, branch: branchName };
};
