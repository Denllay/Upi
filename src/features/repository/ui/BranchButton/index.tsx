import React from 'react';
import { Box, Typography } from '@mui/material';
import { useGetAllRepoBranchesQuery, useGetRepoQuery } from '@shared/api';
import { Select, Skeleton } from '@shared/ui';
import { useTypedParams } from '@shared/model';
import { Link } from 'react-router-dom';
import CheckMark from '@shared/assets/icons/check-mark.svg';
import styles from './styles.module.scss';

export const BranchButton = () => {
  const { repository, username, branch } = useTypedParams();
  const { data: repoData } = useGetRepoQuery({ repository, username });
  const { data: branchData, isLoading } = useGetAllRepoBranchesQuery({ repository, username });

  const { default_branch: defaultBranch } = repoData || {};
  const branchName = branch || defaultBranch;

  const branchListEl = branchData?.map(({ name }) => {
    const isActive = branchName === name;
    const path = `/${username}/${repository}/tree/${name}`;

    return (
      <Branch path={path} isActive={isActive} key={name}>
        {name}
      </Branch>
    );
  });

  return (
    <Skeleton isActive={isLoading} width={100} height={60}>
      <Select list={branchListEl} variant="contained" size="small">
        <Typography variant="subtitle1" className={styles.text}>
          {branchName}
        </Typography>
      </Select>
    </Skeleton>
  );
};
interface Props {
  isActive: boolean;
  path: string;
}

const Branch: React.FC<Props> = ({ isActive, path, children }) => {
  return (
    <Box className={styles.branch}>
      {isActive && <CheckMark />}
      <Link to={path} className={styles.popper_link}>
        {children}
      </Link>
    </Box>
  );
};
