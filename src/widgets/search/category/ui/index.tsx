import React from 'react';
import { Box, capitalize, Typography } from '@mui/material';
import { searchCategoryConfig } from '../config';
import { useSearch } from '@features/search/model';
import styles from './styles.module.scss';

export const CategoryList = () => {
  const { changeType } = useSearch();

  const categoryListEl = searchCategoryConfig.map((type) => {
    const name = capitalize(type);

    const onHandleCategory = () => {
      changeType(type);
    };

    return (
      <Typography onClick={onHandleCategory} className={styles.link} key={type}>
        {name}
      </Typography>
    );
  });

  return <Box className={styles.main}>{categoryListEl}</Box>;
};
