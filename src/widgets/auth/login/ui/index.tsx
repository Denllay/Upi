import { LoginButton } from '@features/auth/login';
import { SearchItems } from '@features/search/ui';
import { Box, Typography } from '@mui/material';
import React from 'react';
import styles from './styles.module.scss';

export const LoginWidget = () => {
  return (
    <Box className={styles.main}>
      <SearchItems />

      <Typography className={styles.text} variant="body1">
        or
      </Typography>

      <LoginButton />
    </Box>
  );
};
