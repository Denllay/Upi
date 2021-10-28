import React from 'react';
import { Popper as MuiPopper, PopperProps } from '@mui/material';

export const Popper: React.FC<PopperProps> = ({ children, open, ...props }) => {
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <MuiPopper onClick={stopPropagation} open={open} {...props}>
      {children}
    </MuiPopper>
  );
};
