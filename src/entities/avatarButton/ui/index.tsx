import React, { useRef, useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { Popper, Button } from '@shared/ui';
import { Link } from 'react-router-dom';
import AvatarIcon from '../assets/icons/avatar.svg';
import styles from './styles.module.scss';

export const AvatarButton: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  const avatarRef = useRef<HTMLDivElement>(null);

  const togglePopper = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box>
      <Avatar
        ref={avatarRef}
        alt="Avatar"
        onClick={togglePopper}
        className={styles.avatar}
        src="https://wallpaperaccess.com/full/334584.jpg"
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
