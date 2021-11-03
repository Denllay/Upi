import { Box, Typography } from '@mui/material';
import { Button, Link } from '@shared/ui';
import React from 'react';
import styles from './styles.module.scss';
import Logo from '@shared/assets/icons/logo.svg';

const Home = () => {
  return (
    <Box className={styles.main}>
      <Box className={styles.main_container}>
        <Box className={styles.main_text}>
          <Typography variant="h2">
            This place for share your <span className={styles.main_text_subtitle}> code!</span>
          </Typography>
        </Box>

        <Box className={styles.main_button_block}>
          <Link to="/login" className={styles.main_button}>
            <Button variant="contained" size="large">
              Login now!
            </Button>
          </Link>
        </Box>
      </Box>

      <Box className={styles.block_1} />
      <Box className={styles.block_2}>
        <Box className={styles.top_block}>
          <Box className={styles.logo}>
            <Logo />
          </Box>

          <Box className={styles.top_block_text}>
            <Typography variant="h1">Friends in coding</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
