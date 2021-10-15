import React from 'react';
import { Box, Typography } from '@mui/material';
import { useGetAllUserReposQuery } from '@shared/api';
import { useParams } from 'react-router';
import { Repository } from '../Repository';
import styles from './styles.module.scss';
import { RepositoriesSkeleton } from '@shared/ui';

interface Params {
  nick: string;
}

export const Repositories = () => {
  const { nick } = useParams<Params>();
  const { data = [], isLoading } = useGetAllUserReposQuery(nick);

  const repos = data.map(({ description, name, owner }) => {
    return <Repository key={name} desc={description} repoName={name} ownerName={owner.login} />;
  });

  return (
    <Box className={styles.main}>
      <RepositoriesSkeleton isActive={isLoading}>
        {repos || <Typography variant="h5">Nothign here ¯\_(ツ)_/¯</Typography>}
      </RepositoriesSkeleton>
    </Box>
  );
};
