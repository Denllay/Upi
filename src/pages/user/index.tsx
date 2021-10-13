import { Box } from '@mui/material';
import { Header } from '@widgets/header/ui';
import { UserCard } from '@widgets/user/card/ui';
import React from 'react';
import styles from './styles.module.scss';

const User = () => {
  return (
    <Box className={styles.main}>
      <Header />
      <UserCard />
    </Box>
  );
};

export default User;
