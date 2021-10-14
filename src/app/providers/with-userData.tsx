import { useViewer } from '@entities/viewer/model';
import { useGetUserDataQuery } from '@shared/api';
import React from 'react';

export const withUserData = (Component: React.FC) => () => {
  const { isAuth } = useViewer();
  useGetUserDataQuery(undefined, { skip: !isAuth });

  return <Component />;
};
