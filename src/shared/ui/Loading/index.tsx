import { Box } from '@mui/material';
import React from 'react';
import styles from './styles.module.scss';

export const Loading = () => {
  return (
    <Box className={styles.main}>
      <Box className={styles.loader} />
    </Box>
  );
};
