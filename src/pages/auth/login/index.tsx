import React from 'react';
import { Box, Typography } from '@mui/material';
import { LoginBlock } from '@widgets/auth/login';
import styles from './styles.module.scss';
import Logo from '@shared/assets/icons/logo.svg';

const Login = () => {
  return (
    <Box className={styles.main}>
      <Box className={styles.block_1}>
        <Box className={styles.logo}>
          <Logo />
        </Box>

        <Box className={styles.block_1_content}>
          <LoginBlock />
        </Box>
      </Box>
      <Box className={styles.block_2}>
        <Box className={styles.block_2_top}>
          <Typography className={styles.text_main} variant="h1">
            Login
          </Typography>
          <Typography className={styles.text_main} variant="h3">
            welcome back!
          </Typography>
        </Box>

        <Box className={styles.block_2_bottom}>
          <Typography variant="h2" className={styles.bottom_text}>
            Coding is Fun
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
