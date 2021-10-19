import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from '@shared/ui';
import RepoIcon from '@features/repository/assets/icons/repository.svg';
import styles from './styles.module.scss';
import { useTypedParams } from '@shared/model';

export const Name = () => {
  const { username, repository } = useTypedParams();

  return (
    <Box className={styles.main}>
      <RepoIcon />

      <Box className={styles.block_name}>
        <Link to={`/${username}`}>
          <Typography variant="h5" sx={{ fontWeight: 200 }} className={styles.text}>
            {username}
          </Typography>
        </Link>

        <Typography variant="h5" className={styles.line}>
          /
        </Typography>

        <Link to={`/${username}/${repository}`}>
          <Typography variant="h5" className={styles.text}>
            {repository}
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};
