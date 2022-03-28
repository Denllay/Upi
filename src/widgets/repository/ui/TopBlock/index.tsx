import React from 'react';

import {
    RepositoryBranchButton,
    RepositoryCloneButton,
    RepositoryName,
    RepositoryNavigator,
} from '@features/repository';
import { Box } from '@mui/material';

import styles from './styles.module.scss';

export const TopBlock = () => {
    return (
        <Box className={styles.main}>
            <Box>
                <RepositoryName />
                <Box className={styles.block_top}>
                    <RepositoryBranchButton />

                    <Box ml={2}>
                        <RepositoryNavigator />
                    </Box>
                </Box>
            </Box>

            <Box>
                <RepositoryCloneButton />
            </Box>
        </Box>
    );
};
