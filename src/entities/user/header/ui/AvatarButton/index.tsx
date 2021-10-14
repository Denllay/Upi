import React, { useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Popper } from '@shared/ui';
import { Link } from 'react-router-dom';
import { useGetUserDataQuery } from '@shared/api';
import { UserAvatar } from '@shared/ui/UserAvatar';
import styles from './styles.module.scss';
import AvatarIcon from '../../assets/icons/avatar.svg';

export const AvatarButton: React.FC = ({ children }) => {
  const { data, isLoading } = useGetUserDataQuery();
  const [open, setOpen] = useState(false);
  const avatarRef = useRef<HTMLDivElement>(null);

  const { avatar_url: avatarUrl = '' } = data || {};

  const togglePopper = () => {
    console.log('kek');

    setOpen((prev) => !prev);
  };

  return (
    <Box>
      <UserAvatar
        ref={avatarRef}
        onClick={togglePopper}
        className={styles.avatar}
        isActive={isLoading}
        avatar={avatarUrl}
        width={44}
        height={44}
      />

      <Popper open={open} anchorEl={avatarRef.current} placement="bottom-start">
        <Box className={styles.popper_content}>
          <Box className={styles.popper_item}>
            <AvatarIcon />
            <Link to="/user">
              <Typography variant="button">Profile</Typography>
            </Link>
          </Box>

          {children}
        </Box>
      </Popper>
    </Box>
  );
};