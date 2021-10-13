import React from 'react';
import { Box, Fade, Popper as MuiPopper, PopperProps } from '@mui/material';
import styles from './styles.module.scss';

export const Popper: React.FC<PopperProps> = ({ children, open, ...props }) => {
  return (
    <MuiPopper open={open} {...props}>
      <Fade timeout={450} in={open}>
        <Box>{children}</Box>
      </Fade>
    </MuiPopper>
  );
};
