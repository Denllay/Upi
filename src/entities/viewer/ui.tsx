import { useGetUserDataQuery } from '@shared/api';
import React from 'react';
import { Link } from 'react-router-dom';

export const BackToProfile: React.FC = ({ children }) => {
  const { data } = useGetUserDataQuery();

  const { login = '' } = data || {};

  return <Link to={`/user/${login}`}>{children}</Link>;
};
