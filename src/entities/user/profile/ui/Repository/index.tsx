import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link as UILink } from '@shared/ui';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

interface Props {
  repoName: string;
  ownerName: string;
  desc: string | null;
}

export const Repository: React.FC<Props> = ({ repoName, desc, ownerName }) => {
  return (
    <Box className={styles.main}>
      <Link to={`/user/${ownerName}/repo/${repoName}`}>
        <UILink sx={{ fontWeight: 500 }}>
          <Typography variant="h5" sx={{ color: '#000000' }}>
            {repoName}
          </Typography>
        </UILink>
      </Link>

      <Typography className={styles.subtitle}>{desc}</Typography>
    </Box>
  );
};
