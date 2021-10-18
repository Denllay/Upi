import React from 'react';
import { Link } from 'react-router-dom';
import { useUserData } from '@shared/model';

interface Props {
  className?: string;
}

export const BackToProfile: React.FC<Props> = ({ className, children }) => {
  const { data } = useUserData();

  return (
    <Link to={`/user/${data.login}`} className={className}>
      {children}
    </Link>
  );
};
