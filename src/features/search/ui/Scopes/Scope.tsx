import React from 'react';
import { SearchScopes } from '@features/search/model';
import { Box, Typography } from '@mui/material';
import { searchModel } from '@features/search';
import { useHistory } from 'react-router-dom';
import ArrowIcon from '@features/search/assets/icons/arrow.svg';
import styles from './styles.module.scss';

interface Props {
  searchData: string;
}

export const Scope: React.FC<Props & SearchScopes> = ({ searchData, name, isVisible, queryParam = '' }) => {
  const history = useHistory();
  const { changeQuery } = searchModel.useSearch();
  if (!searchData || !isVisible) return null;

  const handleSearch = () => {
    const query = `${searchData} ${queryParam}`;

    history.push('/search');
    changeQuery(query);
  };

  return (
    <Box className={styles.scope} onClick={handleSearch}>
      <Typography className={styles.scope_data} variant="subtitle1">
        {searchData}
      </Typography>

      <Box className={styles.scope_block_name}>
        <Typography className={styles.scope_name} variant="button">
          {name}
        </Typography>

        <ArrowIcon className={styles.scope_arrow} />
      </Box>
    </Box>
  );
};
