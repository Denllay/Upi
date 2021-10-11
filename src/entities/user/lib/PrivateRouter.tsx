import { useViewer } from '@entities/viewer/model';
import React from 'react';
import { Redirect } from 'react-router';

export const PrivateRouter: React.FC = ({ children }) => {
  const { isAuth } = useViewer();
  console.log(isAuth);

  if (isAuth) {
    return <>{children}</>;
  }

  return <Redirect to="/login" />;
};
