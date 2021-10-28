import React from 'react';
import { Box, Slide, PopperProps } from '@mui/material';
import { Popper as UIPopper } from './index';

interface Props {
  timeout?: number;
}

export const SlidePopper: React.FC<PopperProps & Props> = ({ children, anchorEl, timeout, open, ...props }) => {
  return (
    <UIPopper open={open} anchorEl={anchorEl} {...props} transition>
      {({ TransitionProps }) => (
        <Slide {...TransitionProps} timeout={timeout} direction="right" in={open} mountOnEnter unmountOnExit>
          <Box>{children}</Box>
        </Slide>
      )}
    </UIPopper>
  );
};
