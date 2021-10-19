import React from 'react';
import { Box } from '@mui/material';
import { useRepoContents } from '@shared/model';
import { FileListSkeleton } from '@shared/ui/Skeletons';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { File } from './File';
import styles from './styles.module.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';

export const FilesManager = () => {
  const { data, isLoading } = useRepoContents();

  if (data?.type === 'dir') {
    const filesEl = data.data?.map(({ path, type, name }) => {
      return <File key={path} path={path} type={type} name={name} />;
    });

    return (
      <FileListSkeleton isActive={isLoading}>
        <Box className={styles.main}>{filesEl}</Box>
      </FileListSkeleton>
    );
  }

  const { code } = data || {};

  return (
    <FileListSkeleton isActive={isLoading}>
      <SyntaxHighlighter className={styles.code} showLineNumbers style={docco} language="ts">
        {code}
      </SyntaxHighlighter>
    </FileListSkeleton>
  );
};
