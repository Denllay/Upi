import React, { useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Popper } from '@shared/ui';
import { UserAvatar } from '@shared/ui/UserAvatar';
import styles from './styles.module.scss';
import AvatarIcon from '../../assets/icons/avatar.svg';
import { BackToProfile } from '@entities/viewer/ui';
import { useUserData } from '@shared/model';

export const AvatarButton: React.FC = ({ children }) => {
  const { data, isLoading } = useUserData();
  const [open, setOpen] = useState(false);
  const avatarRef = useRef<HTMLDivElement>(null);

  const { avatarUrl } = data;

  const togglePopper = () => {
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

            <BackToProfile>
              <Typography onClick={togglePopper} variant="button">
                Profile
              </Typography>
            </BackToProfile>
          </Box>

          {children}
        </Box>
      </Popper>
    </Box>
  );
};
