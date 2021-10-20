import React from 'react';
import { BranchButton, RepositoryName } from '@features/repository/ui';
import { Box } from '@mui/material';
import styles from './styles.module.scss';
import { CloneButton } from '@features/repository/ui/CloneButton';

export const TopBlock = () => {
  return (
    <Box className={styles.main}>
      <Box>
        <RepositoryName />
        <BranchButton />
      </Box>

      <Box>
        <CloneButton />
      </Box>
    </Box>
  );
};
