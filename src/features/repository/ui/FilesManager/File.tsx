import React from 'react';
import FolderIcon from '@features/repository/assets/icons/folder.svg';
import FileIcon from '@features/repository/assets/icons/file.svg';
import { useTypedParams } from '@shared/model';
import styles from './styles.module.scss';
import { Box, Typography } from '@mui/material';
import { Link } from '@shared/ui';

interface Props {
  type: 'dir' | 'file';
  name: string;
  path: string;
}

export const File: React.FC<Props> = ({ path, name, type }) => {
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
