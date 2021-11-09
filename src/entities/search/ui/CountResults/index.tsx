import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTypedSelector } from '@shared/model';
import { Skeleton } from '@shared/ui';
import styles from './styles.module.scss';

export const CountResults = () => {
  const { countResults } = useTypedSelector((state) => state.search);

  return (
    <Skeleton isActive={!countResults} height={40} width={200}>
      <Box className={styles.main}>
        <Typography variant="h6">{countResults}</Typography>
        <Typography className={styles.subtitle} variant="subtitle1">
          Code results
        </Typography>
      </Box>
    </Skeleton>
  );
};
