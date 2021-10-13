import { AvatarButton } from '@entities/avatarButton/ui';
import { SignOut } from '@features/auth/signOut/ui';
import { Search } from '@features/search/ui';
import { Box } from '@mui/material';
import React from 'react';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <Box className={styles.main}>
      <Search />
      <AvatarButton>
        <SignOut />
      </AvatarButton>
    </Box>
  );
};
