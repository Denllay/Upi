import { Box } from '@mui/material';
import React from 'react';
import { StyledSkeleton } from './Skeleton';

interface Props {
  isActive: boolean;
}

export const Repositories: React.FC<Props> = ({ isActive, children }) => {
  if (isActive) {
    return (
      <Box>
        <RepoSkeleton />
        <RepoSkeleton />
        <RepoSkeleton />
      </Box>
    );
  }
  return <>{children}</>;
};

const RepoSkeleton: React.FC = () => {
  return (
    <Box mt={5}>
      <StyledSkeleton width={300} height={50} animation="wave" />
      <StyledSkeleton width={150} height={30} animation="wave" />

      <Box mt={4}>
        <StyledSkeleton width={'100%'} height={5} animation="wave" />
      </Box>
    </Box>
  );
};
