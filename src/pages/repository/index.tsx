import React from 'react';
import { Box } from '@mui/material';
import styles from './styles.module.scss';
import { BranchButton, RepositoryName } from '@features/repository/ui';
import { Header } from '@widgets/header/ui';
import { RepositoryFileManager } from '@widgets/repository/ui';

const Repository = () => {
  return (
    <Box className={styles.main}>
      <Header />

      <Box className={styles.block_top}>
        <RepositoryName />
        <BranchButton />
      </Box>
      <Box className={styles.block_content}>
        <RepositoryFileManager />
      </Box>
    </Box>
  );
};

export default Repository;
