import React from 'react';
import { RepositoryLastCommitInfo } from '@entities/repository';
import { ReposotoryFilesManager } from '@features/repository';
import { Box } from '@mui/material';
import styles from './styles.module.scss';

export const FileManager = () => {
  return (
    <Box className={styles.main}>
      <Box className={styles.block_top}>
        <RepositoryLastCommitInfo />
      </Box>

      <ReposotoryFilesManager />
    </Box>
  );
};
