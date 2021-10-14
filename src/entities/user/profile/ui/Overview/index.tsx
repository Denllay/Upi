import React from 'react';
import { Box, Typography } from '@mui/material';
import { useGetUserDataQuery, useGetUserREADMEQuery } from '@shared/api';
import { MarkDownSkeleton, Markdown } from '@shared/ui';
import { Base64Decode } from '../../lib';
import styles from './styles.module.scss';
import { useParams } from 'react-router';

interface Params {
  nick: string;
}

export const Overview = () => {
  const { nick } = useParams<Params>();
  const { data, isLoading } = useGetUserREADMEQuery(nick);

  const { content = '' } = data || {};

  const README = Base64Decode(content);

  return (
    <Box className={styles.main}>
      <MarkDownSkeleton isActive={isLoading}>
        {README ? <Markdown>{README}</Markdown> : <Typography variant="h5">Nothign here ¯\_(ツ)_/¯</Typography>}
      </MarkDownSkeleton>
    </Box>
  );
};
