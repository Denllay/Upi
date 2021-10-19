import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import styles from './styles.module.scss';
import { BranchButton, RepositoryName } from '@features/repository/ui';
import { Header } from '@widgets/header/ui';
import { RepositoryFileManager } from '@widgets/repository/ui';
import { useGetRepoContentsQuery } from '@shared/api';
import { useTypedParams } from '@shared/model';
import { useHistory } from 'react-router';

const Repository = () => {
  const history = useHistory();
  const { branch, repository, username, path } = useTypedParams();
  const { isError } = useGetRepoContentsQuery({ branch, repository, username, path });

  useEffect(() => {
    if (isError) {
      history.push('/404');
    }
  }, [isError]);

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
