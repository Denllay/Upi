import React from 'react';
import { Box, Typography } from '@mui/material';
import { ScopeSearchList } from '@shared/model/useGetSearchScopes';
import ArrowIcon from '@entities/search/assets/icons/arrow.svg';
import styles from './styles.module.scss';

interface Props {
  searchData: string;
}

export const SearchScope: React.FC<ScopeSearchList & Props> = ({ searchData, name, data }) => {
  if (!searchData || !data) return null;

  return (
    <Box className={styles.main}>
      <Typography className={styles.data} variant="subtitle1">
        {searchData}
      </Typography>

      <Box className={styles.block_name}>
        <Typography className={styles.name} variant="button">
          {name}
        </Typography>

        <ArrowIcon className={styles.arrow} />
      </Box>
    </Box>
  );
};
