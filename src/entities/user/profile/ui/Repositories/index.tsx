import React from 'react';
import { Box, Typography } from '@mui/material';
import { useGetAllUserReposQuery } from '@shared/api';
import { useParams } from 'react-router';
import { RepositoriesSkeleton } from '@shared/ui';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
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

interface Props {
  repoName: string;
  ownerName: string;
  desc: string | null;
}

export const Repository: React.FC<Props> = ({ repoName, desc, ownerName }) => {
  return (
    <Box className={styles.repository}>
      <Link to={`/user/${ownerName}/${repoName}`}>
        <Typography className={styles.link} variant="h5">
          {repoName}
        </Typography>
      </Link>

      <Typography className={styles.subtitle}>{desc}</Typography>
    </Box>
  );
};
