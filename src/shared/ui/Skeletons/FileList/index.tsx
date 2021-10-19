import { Box, SkeletonProps, styled } from '@mui/material';
import React from 'react';
import { StyledSkeleton as UISekelton } from '../Skeleton';
import styles from './styles.module.scss';

interface Props {
  isActive: boolean;
}

export const FileList: React.FC<Props> = ({ isActive, children }) => {
  if (isActive) {
    return (
      <Box className={styles.main}>
        <StyledSkeleton animation="wave" />
        <StyledSkeleton animation="wave" />
        <StyledSkeleton animation="wave" />
        <StyledSkeleton animation="wave" />
        <StyledSkeleton animation="wave" />
        <StyledSkeleton animation="wave" />
      </Box>
    );
  }
  return <>{children}</>;
};

const StyledSkeleton = styled(UISekelton)<SkeletonProps>(() => ({
  width: '100%',
  height: 50,
  padding: 0,
  '&::after': {
    background: 'linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.04), transparent)',
  },
}));
