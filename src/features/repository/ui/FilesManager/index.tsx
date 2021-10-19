import { Box, Typography } from '@mui/material';
import { useRepoContents, useTypedParams } from '@shared/model';
import FolderIcon from '@features/repository/assets/icons/folder.svg';
import FileIcon from '@features/repository/assets/icons/file.svg';
import React from 'react';
import styles from './styles.module.scss';
import { Link } from '@shared/ui';
import { FileListSkeleton } from '@shared/ui/Skeletons';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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

interface Props {
  type: 'dir' | 'file';
  name: string;
  path: string;
}

const File: React.FC<Props> = ({ path, name, type }) => {
  const { branch, username, repository } = useTypedParams();

  const icon = type === 'dir' ? <FolderIcon /> : <FileIcon />;

  const branchName = branch && `/tree/${branch}`;
  const formatedPath = `/${username}/${repository}${branchName}/${path}`;

  return (
    <Box className={styles.file}>
      {icon}

      <Link to={formatedPath} className={styles.link}>
        <Typography variant="button" className={styles.link_text}>
          {name}
        </Typography>
      </Link>
    </Box>
  );
};
