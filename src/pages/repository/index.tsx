import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { RepositoryReadMe } from '@entities/repository';
import { Box } from '@mui/material';
import { useGetRepoContentsQuery } from '@shared/api';
import { useTypedParams } from '@shared/model';
import { Header } from '@widgets/header';
import { RepositoryFileManager, RepositoryTopBlock } from '@widgets/repository';

import styles from './styles.module.scss';

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
            <RepositoryTopBlock />

            <Box className={styles.block_content}>
                <RepositoryFileManager />
                <RepositoryReadMe />
            </Box>
        </Box>
    );
};

export default Repository;
