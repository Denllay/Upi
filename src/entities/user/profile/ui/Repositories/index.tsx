import React from 'react';
import { Box, Typography } from '@mui/material';
import { useGetAllUserReposQuery } from '@shared/api';
import { RepositoriesSkeleton, Link } from '@shared/ui';
import styles from './styles.module.scss';
import { useTypedParams } from '@shared/model';

export const Repositories = () => {
  const { username } = useTypedParams();
  const { data, isLoading } = useGetAllUserReposQuery(username);

  const reposEl = data?.map(({ description, name, owner }) => {
    return <Repository key={name} desc={description} repoName={name} ownerName={owner.login} />;
  });

  return (
    <Box className={styles.main}>
      <RepositoriesSkeleton isActive={isLoading}>
        {reposEl || <Typography variant="h5">Nothign here ¯\_(ツ)_/¯</Typography>}
      </RepositoriesSkeleton>
    </Box>
  );
};

interface Props {
  repoName: string;
  ownerName: string;
  desc: string | null;
}

export const Repository: React.FC<Props> = ({ repoName, desc, ownerName }) => {
  return (
    <Box className={styles.repository}>
      <Link to={`/${ownerName}/${repoName}`}>
        <Typography variant="h5">{repoName}</Typography>
      </Link>

      <Typography className={styles.subtitle}>{desc}</Typography>
    </Box>
  );
};
