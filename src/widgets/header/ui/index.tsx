import React from 'react';

import { HeaderAvatarButton } from '@entities/user/header';
import { ViewerBackToProfile, viewerModel } from '@entities/viewer';
import { SignOutButton } from '@features/auth/signOut';
import { Box, Typography } from '@mui/material';
import { Link } from '@shared/ui';

import { ReactComponent as AvatarIcon } from '../assets/icons/avatar.svg';

import styles from './styles.module.scss';

export const Header = () => {
    const { isAuth } = viewerModel.useViewer();

    return (
        <Box className={styles.main}>
            {isAuth && (
                <HeaderAvatarButton>
                    <Box className={styles.popper_item}>
                        <ViewerBackToProfile className={styles.button_profile}>
                            <AvatarIcon />
                            <Typography variant='button'>Profile</Typography>
                        </ViewerBackToProfile>
                    </Box>

                    <SignOutButton />
                </HeaderAvatarButton>
            )}

            {!isAuth && (
                <Link to='/login' className={styles.login}>
                    <Typography variant='body1'>Login</Typography>
                </Link>
            )}
        </Box>
    );
};
