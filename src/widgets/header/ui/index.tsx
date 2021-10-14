import React from 'react';
import { AvatarButton } from '@entities/user/header/ui';
import { SignOut } from '@features/auth/signOut/ui';
import { Search } from '@features/search/ui';
import { Box } from '@mui/material';
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
