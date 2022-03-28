import React from 'react';

import { LoginButton } from '@features/auth/login';
import { SearchItems } from '@features/search/ui';
import { Box, Typography } from '@mui/material';

import styles from './styles.module.scss';

export const Login = () => {
    return (
        <Box className={styles.main}>
            <SearchItems />

            <Typography className={styles.text} variant='body1'>
                or
            </Typography>

            <LoginButton />
        </Box>
    );
};
