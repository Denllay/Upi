import React from 'react';
import { HeaderAvatarButton } from '@entities/user/header';
import { SignOutButton } from '@features/auth/signOut';
import { SearchScopes } from '@features/search';
import { Box, Typography } from '@mui/material';
import styles from './styles.module.scss';
import AvatarIcon from '../assets/icons/avatar.svg';
import { Link } from '@shared/ui';
import { viewerModel, ViewerBackToProfile } from '@entities/viewer';

export const Header = () => {
  const { isAuth } = viewerModel.useViewer();

  return (
    <Box className={styles.main}>
      <SearchScopes />

      {isAuth && (
        <HeaderAvatarButton>
          <Box className={styles.popper_item}>
            <ViewerBackToProfile className={styles.button_profile}>
              <AvatarIcon />
              <Typography variant="button">Profile</Typography>
            </ViewerBackToProfile>
          </Box>

          <SignOutButton />
        </HeaderAvatarButton>
      )}

      {!isAuth && (
        <Link to="/login" className={styles.login}>
          <Typography variant="body1">Login</Typography>
        </Link>
      )}
    </Box>
  );
};
