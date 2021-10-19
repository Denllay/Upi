import { Box, Typography } from '@mui/material';
import { useGetRepoContentsQuery } from '@shared/api';
import { useTypedParams } from '@shared/model';
import FolderIcon from '@features/repository/assets/icons/folder.svg';
import FileIcon from '@features/repository/assets/icons/file.svg';
import React from 'react';
import styles from './styles.module.scss';
import { Link } from '@shared/ui';
import { sortFilesByType } from '@features/repository/lib';
import { FileListSkeleton } from '@shared/ui/Skeletons';

export const FilesList = () => {
  const { branch, repository, username, path } = useTypedParams();
  const { data = [], isLoading } = useGetRepoContentsQuery({ branch, repository, username, path });

  const sortedData = [...data]?.sort(sortFilesByType);

  const filesEl = sortedData?.map(({ path, type, name }) => {
    const branchName = branch && `/tree/${branch}`;
    const formatedPath = `/${username}/${repository}${branchName}/${path}`;

    return <File key={path} path={formatedPath} type={type} name={name} />;
  });

  return (
    <FileListSkeleton isActive={isLoading}>
      <Box className={styles.main}>{filesEl}</Box>
    </FileListSkeleton>
  );
};

interface Props {
  type: 'dir' | 'file';
  name: string;
  path: string;
}

const File: React.FC<Props> = ({ path, name, type }) => {
  const icon = type === 'dir' ? <FolderIcon /> : <FileIcon />;

  return (
    <Box className={styles.file}>
      {icon}

      <Link to={path} className={styles.link}>
        <Typography variant="button" className={styles.link_text}>
          {name}
        </Typography>
      </Link>
    </Box>
  );
};
