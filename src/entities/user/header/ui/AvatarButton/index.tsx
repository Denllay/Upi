import React from 'react';
import { Box } from '@mui/material';
import { Popper } from '@shared/ui';
import { UserAvatar } from '@shared/ui/UserAvatar';
import { usePopper, useUserData } from '@shared/model';
import styles from './styles.module.scss';
import Arrow from '@shared/assets/icons/arrow.svg';

export const AvatarButton: React.FC = ({ children }) => {
  const { data, isLoading } = useUserData();
  const { togglePopper, isOpen, anchorEl } = usePopper<HTMLDivElement>();

  const { avatarUrl } = data;

  return (
    <>
      <Box ref={anchorEl} className={styles.avatar} onClick={togglePopper}>
        <UserAvatar isActive={isLoading} avatar={avatarUrl} width={44} height={44} />

        <Arrow className={styles.arrow} />
      </Box>

      <Popper open={isOpen} anchorEl={anchorEl.current} placement="bottom-start">
        <Box className={styles.popper_content}>{children}</Box>
      </Popper>
    </>
  );
};
