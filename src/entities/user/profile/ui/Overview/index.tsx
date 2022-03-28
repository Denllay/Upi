import React from 'react';

import { Box, Typography } from '@mui/material';
import { useREADMERepo, useTypedParams } from '@shared/model';
import { Markdown, MarkDownSkeleton } from '@shared/ui';

import styles from './styles.module.scss';

export const Overview = () => {
    const { username } = useTypedParams();
    const { data, isLoading } = useREADMERepo({ username });

    return (
        <Box className={styles.main}>
            <MarkDownSkeleton isActive={isLoading}>
                {data ? (
                    <Markdown>{data}</Markdown>
                ) : (
                    <Typography variant='h5'>Nothign here ¯\_(ツ)_/¯</Typography>
                )}
            </MarkDownSkeleton>
        </Box>
    );
};
