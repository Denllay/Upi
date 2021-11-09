import { Box } from '@mui/material';
import { useSearchCodeQuery } from '@shared/api/github/search';
import React from 'react';
import { searchModel } from '@features/search';
import styles from './styles.module.scss';

export const Code = () => {
  const { searchParams } = searchModel.useSearch();
  const { data } = useSearchCodeQuery(searchParams);
  return <Box>Code</Box>;
};
