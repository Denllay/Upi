import { RouteParamsEnum } from '@shared/config/router';
import { useParams } from 'react-router';

// ? eslint видит "key", как неиспользуюмую переменную
/* eslint-disable */
type Params = {
  [key in RouteParamsEnum]: string;
};

export const useTypedParams = () => {
  return useParams<Params>();
};
