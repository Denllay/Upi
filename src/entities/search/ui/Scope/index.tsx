import React from 'react';
import { Box, Typography } from '@mui/material';
import ArrowIcon from '@entities/search/assets/icons/arrow.svg';
import styles from './styles.module.scss';

export enum ScopeNames {
  USERNAME = 'In this user',
  REPOSITORY = 'In this repository',
  GITHUB = 'All Github',
}
interface Props {
  searchData: string;
  name: ScopeNames;
  type: 'username' | 'repository' | 'github';
  queryParam: string | undefined;
}

export const Scope: React.FC<Props> = ({ searchData, name, queryParam }) => {
  if (!searchData || !queryParam) return null;

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
