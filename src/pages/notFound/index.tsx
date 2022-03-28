import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

import { ViewerBackToProfile, viewerModel } from '@entities/viewer';
import { Box, Typography } from '@mui/material';
import { Button } from '@shared/ui';

import styles from './styles.module.scss';

const NotFound = () => {
    const { isAuth } = viewerModel.useViewer();
    const history = useHistory();

    useEffect(() => {
        if (!isAuth) {
            history.push('/login');
        }
    }, [isAuth]);

    return (
        <Box className={styles.main}>
            <Box className={styles.container}>
                <Typography
                    sx={{ fontFamily: 'Kulim Park, sans-serif', color: '#F69595', fontWeight: 700 }}
                    variant='h1'
                >
                    404
                </Typography>
                <Typography variant='h5'>Nothing here </Typography>
                <Typography variant='h5'>¯\_(ツ)_/¯</Typography>
                <Box mt={2}>
                    <ViewerBackToProfile>
                        <Button variant='contained' size='small'>
                            Go to Profile
                        </Button>
                    </ViewerBackToProfile>
                </Box>
            </Box>
        </Box>
    );
};

export default NotFound;
