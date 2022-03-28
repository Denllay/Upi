import { useParams } from 'react-router';

import { RouteParamsEnum } from '@shared/config/router';

type Params = Record<RouteParamsEnum, string>;

export const useTypedParams = (): Params => {
    const data = useParams<Params>();
    const branchName = data.branch?.split('/')[1] || '';

    return { ...data, branch: branchName };
};
