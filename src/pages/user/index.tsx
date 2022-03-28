import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

import { Box } from '@mui/material';
import { useTypedParams, useUserData } from '@shared/model';
import { Header } from '@widgets/header/ui';
import { UserCard } from '@widgets/user/card';

import styles from './styles.module.scss';

const User = () => {
    const history = useHistory();
    const { username } = useTypedParams();
    const { isError } = useUserData(username);

    useEffect(() => {
        if (isError) {
            history.push('/404');
        }
    }, [isError]);

    return (
        <Box className={styles.main}>
            <Header />
            <UserCard />
        </Box>
    );
};

export default User;
