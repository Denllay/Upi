import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './styles.module.scss';

export const CountResults = () => {
  return (
    <Box className={styles.main}>
      <Typography variant="h6">40000</Typography>
      <Typography className={styles.subtitle} variant="subtitle1">
        Code results
      </Typography>
    </Box>
  );
};
