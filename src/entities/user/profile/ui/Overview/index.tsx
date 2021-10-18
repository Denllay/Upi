import React from 'react';
import { Box, Typography } from '@mui/material';
import { MarkDownSkeleton, Markdown } from '@shared/ui';
import { useParams } from 'react-router';
import { useREADMERepo } from '@shared/model';
import styles from './styles.module.scss';
interface Params {
  nick: string;
}

export const Overview = () => {
  const { nick } = useParams<Params>();
  const { data, isLoading } = useREADMERepo(nick);

  return (
    <Box className={styles.main}>
      <MarkDownSkeleton isActive={isLoading}>
        {data ? <Markdown>{data}</Markdown> : <Typography variant="h5">Nothign here ¯\_(ツ)_/¯</Typography>}
      </MarkDownSkeleton>
    </Box>
  );
};
