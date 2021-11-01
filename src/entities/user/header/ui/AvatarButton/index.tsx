import React from 'react';
import { Box } from '@mui/material';
import { GrowPopper, UserAvatar } from '@shared/ui';
import { usePopper, useUserData } from '@shared/model';
import styles from './styles.module.scss';
import ArrowIcon from '@entities/user/header/assets/icons/arrow.svg';

export const AvatarButton: React.FC = ({ children }) => {
  const { data, isLoading } = useUserData();
  const { togglePopper, isOpen, anchorEl } = usePopper<HTMLDivElement>();

  const { avatarUrl } = data;

  return (
    <>
      <Box ref={anchorEl} className={styles.avatar} onClick={togglePopper}>
        <UserAvatar isActive={isLoading} avatar={avatarUrl} width={44} height={44} />

        <ArrowIcon className={styles.arrow} />
      </Box>

      <GrowPopper open={isOpen} anchorEl={anchorEl.current} placement="bottom-start">
        <Box className={styles.popper_content}>{children}</Box>
      </GrowPopper>
    </>
  );
};
