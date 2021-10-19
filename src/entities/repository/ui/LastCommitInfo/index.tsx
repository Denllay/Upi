import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTypedParams } from '@shared/model';
import { Skeleton, UserAvatar } from '@shared/ui';
import styles from './styles.module.scss';
import { useGetLastCommitQuery } from '@shared/api';

export const LastCommitInfo = () => {
  const { repository, username, branch, path } = useTypedParams();
  const { data, isLoading } = useGetLastCommitQuery(
    { repository, username, branch, path },
    {
      selectFromResult: ({ data = [], isLoading, isUninitialized, ...rest }) => {
        const { author, commit } = data[0] || {};
        const { avatar_url: avatarUrl, login } = author || {};

        const formatedData = {
          message: commit?.message,
          avatarUrl,
          login,
        };

        // ? @see isLoading - https://github.com/reduxjs/redux-toolkit/issues/1586
        return { data: formatedData, isLoading: isLoading || isUninitialized, ...rest };
      },
    }
  );

  const { login, avatarUrl, message } = data;

  return (
    <Skeleton animation="pulse" isActive={isLoading} className={styles.skeleton} width={300} height={25}>
      <Box className={styles.main}>
        <UserAvatar avatar={avatarUrl} isActive={isLoading} width={25} height={25} />

        <Typography variant="subtitle1" className={styles.login}>
          {login}
        </Typography>

        <Typography variant="subtitle1" className={styles.message}>
          {message}
        </Typography>
      </Box>
    </Skeleton>
  );
};
