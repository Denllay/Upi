import React from 'react';

import { ReactComponent as RepoIcon } from '@features/repository/assets/icons/repository.svg';
import { Box, Typography } from '@mui/material';
import { useTypedParams } from '@shared/model';
import { Link } from '@shared/ui';

import styles from './styles.module.scss';

export const Name = () => {
    const { username, repository } = useTypedParams();

    return (
        <Box className={styles.main}>
            <RepoIcon />

            <Box className={styles.block_name}>
                <Link to={`/${username}`}>
                    <Typography variant='h5' sx={{ fontWeight: 200 }} className={styles.text}>
                        {username}
                    </Typography>
                </Link>

                <Typography variant='h5' className={styles.line}>
                    /
                </Typography>

                <Link to={`/${username}/${repository}`}>
                    <Typography variant='h5' className={styles.text}>
                        {repository}
                    </Typography>
                </Link>
            </Box>
        </Box>
    );
};
