import { Box } from '@mui/material';
import { RoutesConfig } from '@pages/routes/types';
import React from 'react';

interface Props {
  routes: RoutesConfig[];
}

const Search: React.FC<Props> = ({ routes }) => {
  return <Box>SEARCH</Box>;
};

export default Search;
