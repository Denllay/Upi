import React, { useEffect } from 'react';
import { Skeleton as MuiSkeleton, SkeletonProps, styled } from '@mui/material';

interface Props {
  isActive: boolean;
}

export const StyledSkeleton = styled(MuiSkeleton)<SkeletonProps>(() => ({
  background: 'rgba(0, 0, 0, 0.11)',
  '&::after': {
    background: 'linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.04), transparent)',
  },
}));

export const Skeleton: React.FC<Props & SkeletonProps> = ({ children, isActive, animation = 'wave', ...props }) => {
  useEffect(() => {
    console.log(isActive);
  }, [isActive]);
  if (isActive) {
    return <StyledSkeleton animation={animation} {...props} />;
  }

  return <>{children}</>;
};
