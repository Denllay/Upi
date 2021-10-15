import React from 'react';
import { Box, Typography } from '@mui/material';
import { UserAvatar, Skeleton } from '@shared/ui';
import styles from './styles.module.scss';
import { useHistory, useParams } from 'react-router';
import { useUserData } from '@shared/model';

interface Params {
  nick: string;
}

export const About = () => {
  const history = useHistory();
  const { nick } = useParams<Params>();
  const { data, isLoading, isError } = useUserData(nick);

  const { avatarUrl, login, followers, following } = data;

  if (isError) {
    history.push('/404');
  }

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
