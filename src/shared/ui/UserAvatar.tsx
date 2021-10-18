import React, { forwardRef } from 'react';
import { SkeletonProps, Box, Avatar } from '@mui/material';
import { Skeleton } from '@shared/ui';

interface Props {
  isActive: boolean;
  avatar: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  width?: 'string' | number;
  height?: 'string' | number;
}

export const UserAvatar = forwardRef<HTMLDivElement, Props & SkeletonProps>(
  ({ onClick, isActive, className, avatar, width, height, ...props }, ref) => (
    <Box>
      <Skeleton width={width} height={height} isActive={isActive} className={className} {...props} variant="circular">
        <Avatar
          sx={{ height: height, width: width }}
          onClick={onClick}
          alt="Avatar"
          ref={ref}
          className={className}
          src={avatar}
        />
      </Skeleton>
    </Box>
  )
);
