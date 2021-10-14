import React from 'react';
import { Box, Typography } from '@mui/material';
import { useGetUserDataQuery } from '@shared/api';
import { UserAvatar, Skeleton } from '@shared/ui';
import styles from './styles.module.scss';
import { useParams } from 'react-router';

interface Params {
  nick: string;
}

export const About = () => {
  const { nick } = useParams<Params>();
  const { data, isLoading } = useGetUserDataQuery(nick);
  const { avatar_url: avatarUrl = '', login, followers, following } = data || {};

  return (
    <Box className={styles.main}>
      <UserAvatar avatar={avatarUrl} isActive={isLoading} width={160} height={160} />
      <Box className={styles.stats}>
        <Skeleton isActive={isLoading} width={150} height={40}>
          <Typography className={styles.login} variant="h5">
            {login}
          </Typography>
        </Skeleton>

        <Box className={styles.follow}>
          <Skeleton isActive={isLoading} width={70} height={30}>
            <Typography variant="subtitle1">{followers} Followers</Typography>
          </Skeleton>

          <Skeleton sx={{ marginLeft: 1 }} isActive={isLoading} width={70} height={30}>
            <Typography marginLeft={1.2} variant="subtitle1">
              {following} Following
            </Typography>
          </Skeleton>
        </Box>
      </Box>
    </Box>
  );
};
