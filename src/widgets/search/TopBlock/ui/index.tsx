import { SearchCountResults } from '@entities/search';
import { SearchSortButton } from '@features/search';
import { Box } from '@mui/material';
import React from 'react';
import styles from './styles.module.scss';

export const TopBlock = () => {
  return (
    <Box className={styles.main}>
      <SearchCountResults />
      <SearchSortButton />
    </Box>
  );
};
