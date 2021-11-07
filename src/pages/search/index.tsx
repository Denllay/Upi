import React from 'react';
import { Box } from '@mui/material';
import { SearchCategoryList } from '@widgets/search/category';
import { Header } from '@widgets/header';
import { SearchTopBlock } from '@widgets/search/TopBlock';
import styles from './styles.module.scss';
import { Code } from '@widgets/search/code/ui';

const Search = () => {
  return (
    <Box className={styles.main}>
      <Header />

      <Box className={styles.container}>
        <Box className={styles.nav}>
          <SearchCategoryList />
        </Box>

        <Box className={styles.content}>
          <SearchTopBlock />

          <Box className={styles.results}>
            <Code />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Search;
