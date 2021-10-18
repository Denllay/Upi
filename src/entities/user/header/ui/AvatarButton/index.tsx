import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import { Popper } from '@shared/ui';
import { UserAvatar } from '@shared/ui/UserAvatar';
import { useUserData } from '@shared/model';
import styles from './styles.module.scss';

export const AvatarButton: React.FC = ({ children }) => {
  const { data, isLoading } = useUserData();
  const [open, setOpen] = useState(false);
  const avatarRef = useRef<HTMLDivElement>(null);

  const { avatarUrl } = data;

  const togglePopper = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const closePopper = () => setOpen(false);
    window.addEventListener('click', closePopper);

    return () => {
      window.removeEventListener('click', closePopper);
    };
  }, []);

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
        <Box className={styles.popper_content}>{children}</Box>
      </Popper>
    </Box>
  );
};
