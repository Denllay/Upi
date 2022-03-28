import React from 'react';

import { Box, Typography } from '@mui/material';
import { useTypedParams } from '@shared/model';
import { Link } from '@shared/ui';

import styles from './styles.module.scss';

export const Navigator = () => {
    const { repository, path, username, branch } = useTypedParams();
    const formatedBranch = branch ? `/${branch}/` : '';

    if (!path) return null;

    const pathEl = path.split('/').map((path) => {
        return <Path key={path} path={path} />;
    });

    return (
        <Box className={styles.main}>
            <Link to={`/${username}/${repository}${formatedBranch}`}>
                <Typography variant='subtitle1' className={styles.branch}>
                    {repository}
                </Typography>
            </Link>

            {pathEl}
        </Box>
    );
};

interface Props {
    path: string;
}

const Path: React.FC<Props> = ({ path }) => {
    return (
        <Box className={styles.block_path}>
            <Typography className={styles.slash} variant='subtitle1'>
                /
            </Typography>

            <Typography variant='subtitle1'>{path}</Typography>
        </Box>
    );
};
