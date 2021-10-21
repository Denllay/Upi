import React from 'react';
import styles from './styles.module.scss';
import { useREADMERepo, useTypedParams } from '@shared/model';
import { Box, Typography } from '@mui/material';
import { Markdown, MarkDownSkeleton } from '@shared/ui';

export const ReadMe = () => {
  const { username, repository } = useTypedParams();
  const { data, isLoading } = useREADMERepo({ username, repository });

  if (!data) return null;

  return (
    <Box className={styles.main}>
      <MarkDownSkeleton isActive={isLoading}>
        <Typography variant="subtitle1">Readme.md</Typography>

        <Markdown>{data}</Markdown>
      </MarkDownSkeleton>
    </Box>
  );
};
