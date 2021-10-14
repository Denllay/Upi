import { BackToProfile } from '@entities/viewer/ui';
import { Box, Typography } from '@mui/material';
import { Button } from '@shared/ui';
import React from 'react';
import styles from './styles.module.scss';

const NotFound = () => {
  return (
    <Box className={styles.main}>
      <Box className={styles.container}>
        <Typography sx={{ fontFamily: 'Kulim Park, sans-serif', color: '#F69595', fontWeight: 700 }} variant="h1">
          404
        </Typography>
        <Typography variant="h5">Nothing here </Typography>
        <Typography variant="h5">¯\_(ツ)_/¯</Typography>

        <Box mt={2}>
          <BackToProfile>
            <Button variant="contained" size="small">
              Go to Profile
            </Button>
          </BackToProfile>
        </Box>
      </Box>
    </Box>
  );
};

export default NotFound;
