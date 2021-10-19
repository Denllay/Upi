import { Box, Typography } from '@mui/material';
import { useGetAllRepoBranchesQuery, useGetRepoQuery } from '@shared/api';
import { Button, Popper, Skeleton } from '@shared/ui';
import React from 'react';
import styles from './styles.module.scss';
import CheckMark from '@features/repository/assets/icons/check-mark.svg';
import { usePopper, useTypedParams } from '@shared/model';
import { Link } from 'react-router-dom';

export const BranchButton = () => {
  const { anchorEl, isOpen, togglePopper } = usePopper<HTMLButtonElement>();
  const { repository, username, branch } = useTypedParams();
  const { data: repoData } = useGetRepoQuery({ repository, username });
  const { data: branchData, isLoading } = useGetAllRepoBranchesQuery({ repository, username });

  const { default_branch: defaultBranch } = repoData || {};
  const branchName = branch || defaultBranch;

  const branchesEl = branchData?.map(({ name }) => {
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
      <Button onClick={togglePopper} ref={anchorEl} variant="contained" size="small" className={styles.button}>
        <Typography variant="subtitle1" className={styles.text}>
          {branchName}
        </Typography>
      </Button>

      <Popper open={isOpen} anchorEl={anchorEl.current} placement="bottom-start">
        <Box className={styles.popper_content}>{branchesEl}</Box>
      </Popper>
    </Skeleton>
  );
};
interface Props {
  isActive: boolean;
  path: string;
}

const Branch: React.FC<Props> = ({ isActive, path, children }) => {
  return (
    <Box className={styles.branchEl_main}>
      {isActive && <CheckMark />}
      <Link to={path} className={styles.popper_link}>
        {children}
      </Link>
    </Box>
  );
};
