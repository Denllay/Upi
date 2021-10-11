import { initialViewer } from '@entities/viewer/model';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const withAuth = (Component: React.FC) => () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialViewer());
  }, [initialViewer]);

  return <Component />;
};
