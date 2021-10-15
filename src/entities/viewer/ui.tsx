import React from 'react';
import { Link } from 'react-router-dom';
import { useUserData } from '@shared/model';

export const BackToProfile: React.FC = ({ children }) => {
  const { data } = useUserData();

  return <Link to={`/user/${data.login}`}>{children}</Link>;
};
