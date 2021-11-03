import React from 'react';
import { Box } from '@mui/material';
import { SearchCategoryList } from '@widgets/search/category';
import { Header } from '@widgets/header';
import { SearchTopBlock } from '@widgets/search/TopBlock';
import { renderListRoutes, RoutesConfig } from '@pages/routes';
import styles from './styles.module.scss';

interface Props {
  routes: RoutesConfig[];
}

const Search: React.FC<Props> = ({ routes }) => {
  const routesEl = renderListRoutes(routes);

  return (
    <Box className={styles.main}>
      <Header />

      <Box className={styles.container}>
        <Box className={styles.nav}>
          <SearchCategoryList />
        </Box>

        <Box className={styles.content}>
          <SearchTopBlock />

          <Box className={styles.results}>{routesEl}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Search;
