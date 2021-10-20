import React from 'react';
import { Box, Fade, Popper as MuiPopper, PopperProps } from '@mui/material';

export const Popper: React.FC<PopperProps> = ({ children, open, ...props }) => {
  const stopPropag = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <MuiPopper onClick={stopPropag} open={open} {...props}>
      <Fade timeout={450} in={open}>
        <Box>{children}</Box>
      </Fade>
    </MuiPopper>
  );
};
