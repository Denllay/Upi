import React from 'react';
import { AvatarButton } from '@entities/user/header/ui';
import { SignOut } from '@features/auth/signOut/ui';
import { Search } from '@features/search/ui';
import { Box, Typography } from '@mui/material';
import styles from './styles.module.scss';
import AvatarIcon from '../assets/icons/avatar.svg';
import { BackToProfile } from '@entities/viewer/ui';

export const Header = () => {
  return (
    <Box className={styles.main}>
      <Search />

      <AvatarButton>
        <Box className={styles.popper_item}>
          <BackToProfile className={styles.button_profile}>
            <AvatarIcon />
            <Typography variant="button">Profile</Typography>
          </BackToProfile>
        </Box>

        <SignOut />
      </AvatarButton>
    </Box>
  );
};
