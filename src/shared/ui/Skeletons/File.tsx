import { Box, SkeletonProps, styled } from '@mui/material';
import React from 'react';
import { StyledSkeleton as UISekelton } from './Skeleton';

interface Props {
  isActive: boolean;
}

export const File: React.FC<Props> = ({ isActive, children }) => {
  if (isActive) {
    return (
      <Box padding={1}>
        <SkeletonBlock />
        <StyledSkeleton width={150} animation="wave" />
        <SkeletonBlock />

        <StyledSkeleton width={250} animation="wave" />

        <StyledSkeleton width={160} animation="wave" />
        <SkeletonBlock />
        <StyledSkeleton width={150} animation="wave" />

        <StyledSkeleton width={200} animation="wave" />
        <SkeletonBlock />
      </Box>
    );
  }
  return <>{children}</>;
};

const SkeletonBlock = () => {
  return (
    <>
      <StyledSkeleton width={130} animation="wave" />
      <StyledSkeleton width={120} animation="wave" />
      <StyledSkeleton width={300} animation="wave" />
    </>
  );
};

const StyledSkeleton = styled(UISekelton)<SkeletonProps>(() => ({
  height: 30,
}));
