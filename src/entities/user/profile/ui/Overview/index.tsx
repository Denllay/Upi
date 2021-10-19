import React from 'react';
import { Box, Typography } from '@mui/material';
import { MarkDownSkeleton, Markdown } from '@shared/ui';
import { useREADMERepo, useTypedParams } from '@shared/model';
import styles from './styles.module.scss';

export const Overview = () => {
  const { username } = useTypedParams();
  const { data, isLoading } = useREADMERepo(username);

  return (
    <Box className={styles.main}>
      <MarkDownSkeleton isActive={isLoading}>
        {data ? <Markdown>{data}</Markdown> : <Typography variant="h5">Nothign here ¯\_(ツ)_/¯</Typography>}
      </MarkDownSkeleton>
    </Box>
  );
};
