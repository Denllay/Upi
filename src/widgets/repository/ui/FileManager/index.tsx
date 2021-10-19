import { LastCommitInfo } from '@entities/repository/ui';
import { ReposotoryFilesManager } from '@features/repository/ui';
import { Box } from '@mui/material';
import React from 'react';
import styles from './styles.module.scss';

export const FileManager = () => {
  return (
    <Box className={styles.main}>
      <Box className={styles.block_top}>
        <LastCommitInfo />
      </Box>

      <ReposotoryFilesManager />
    </Box>
  );
};
