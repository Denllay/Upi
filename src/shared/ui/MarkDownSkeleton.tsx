import { Box } from '@mui/material';
import React from 'react';
import { StyledSkeleton } from './Skeleton';

interface Props {
  isActive: boolean;
}

export const MarkDownSkeleton: React.FC<Props> = ({ isActive, children }) => {
  if (isActive) {
    return (
      <Box>
        <StyledSkeleton width={100} height={20} animation="wave" />
      </Box>
    );
  }
  return <>{children}</>;
};
