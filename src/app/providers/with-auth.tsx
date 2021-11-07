import { viewerModel } from '@entities/viewer';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const withAuth = (Component: React.FC) => () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewerModel.initialize());
  }, [viewerModel.initialize]);

  return <Component />;
};
