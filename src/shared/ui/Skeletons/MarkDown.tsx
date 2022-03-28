import React from 'react';

import { Box } from '@mui/material';

import { StyledSkeleton } from './Skeleton';

interface Props {
    isActive: boolean;
}

export const MarkDown: React.FC<Props> = ({ isActive, children }) => {
    if (isActive) {
        return (
            <Box>
                <StyledSkeleton width={300} height={50} animation='wave' />
                <StyledSkeleton sx={{ marginTop: 3 }} width={200} height={30} animation='wave' />

                <Box display='flex'>
                    <StyledSkeleton width={100} height={20} animation='wave' />
                    <StyledSkeleton
                        sx={{ marginLeft: 2 }}
                        width={100}
                        height={20}
                        animation='wave'
                    />
                </Box>

                <StyledSkeleton width={120} height={30} animation='wave' />
                <StyledSkeleton sx={{ marginTop: 3 }} width={300} height={50} animation='wave' />

                <Box display='flex'>
                    <StyledSkeleton width={120} height={30} animation='wave' />
                    <StyledSkeleton
                        sx={{ marginLeft: 2 }}
                        width={120}
                        height={30}
                        animation='wave'
                    />
                </Box>

                <StyledSkeleton width={100} height={20} animation='wave' />
            </Box>
        );
    }
    return <>{children}</>;
};
