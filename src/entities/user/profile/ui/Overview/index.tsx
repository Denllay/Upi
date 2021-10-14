import React from 'react';
import { Box } from '@mui/material';
import { useGetUserDataQuery, useGetUserREADMEQuery } from '@shared/api';
import { MarkDownSkeleton, Markdown } from '@shared/ui';
import { Base64Decode } from '../../lib';
import styles from './styles.module.scss';

export const Overview = () => {
  const { data, isLoading } = useGetUserDataQuery();

  const { data: dataREADME, isLoading: isREADMELoading } = useGetUserREADMEQuery(data?.login || '', { skip: isLoading });

  const { content = '' } = dataREADME || {};

  const README = Base64Decode(content);

  return (
    <Box className={styles.main}>
      <MarkDownSkeleton isActive={isREADMELoading}>
        <Markdown>{README}</Markdown>
      </MarkDownSkeleton>
    </Box>
  );
};
