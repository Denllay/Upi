import React from 'react';
import { BranchButton, RepositoryName, RepositoryNavigator } from '@features/repository/ui';
import { Box } from '@mui/material';
import styles from './styles.module.scss';
import { CloneButton } from '@features/repository/ui/CloneButton';

export const TopBlock = () => {
  return (
    <Box className={styles.main}>
      <Box>
        <RepositoryName />
        <Box className={styles.block_top}>
          <BranchButton />

          <Box ml={2}>
            <RepositoryNavigator />
          </Box>
        </Box>
      </Box>

      <Box>
        <CloneButton />
      </Box>
    </Box>
  );
};
