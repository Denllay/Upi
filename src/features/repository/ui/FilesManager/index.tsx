import React from 'react';
import { Box, Typography } from '@mui/material';
import { useRepoContents } from '@shared/model';
import { FileListSkeleton, FileSkeleton } from '@shared/ui/Skeletons';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { File } from './File';
import styles from './styles.module.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';

const maxFileSize = 20000;

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

  const { code, fileExtension, size = 0 } = data || {};

  if (size > maxFileSize) {
    return (
      <Box className={styles.big_code}>
        <Typography variant="subtitle1">Sorry, but we can&apos;t show files that are this big right now.</Typography>
      </Box>
    );
  }

  return (
    <FileSkeleton isActive={isLoading}>
      <SyntaxHighlighter className={styles.code} showLineNumbers style={docco} language={fileExtension}>
        {code}
      </SyntaxHighlighter>
    </FileSkeleton>
  );
};
