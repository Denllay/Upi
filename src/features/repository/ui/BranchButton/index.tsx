import { Box, Typography } from '@mui/material';
import { useGetAllRepoBranchesQuery, useGetRepoQuery } from '@shared/api';
import { Button, Popper } from '@shared/ui';
import React, { useRef, useState } from 'react';
import styles from './styles.module.scss';
import CheckMark from '@features/repository/assets/icons/check-mark.svg';
import { useTypedParams } from '@shared/model';
import { Link } from 'react-router-dom';

export const BranchButton = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const { repository, username, branch } = useTypedParams();
  const { data: RepoData } = useGetRepoQuery({ repository, username });
  const { data: branchData } = useGetAllRepoBranchesQuery({ repository, username });

  const { default_branch: defaultBranch } = RepoData || {};
  const branchName = branch ? branch.split('/')[1] : defaultBranch;

  const togglePopper = () => {
    setOpen((prev) => !prev);
  };

  const branchEl = branchData?.map(({ name }) => {
    const isActive = branchName === name;
    const path = `/${username}/${repository}/tree/${name}`;
    return (
      <BranchEl path={path} isActive={isActive} key={name}>
        {name}
      </BranchEl>
    );
  });

  return (
    <>
      <Button onClick={togglePopper} ref={buttonRef} variant="contained" size="small" className={styles.button}>
        <Typography variant="subtitle1" className={styles.text}>
          {branchName}
        </Typography>
      </Button>

      <Popper open={open} anchorEl={buttonRef.current} placement="bottom-start">
        <Box className={styles.popper_content}>{branchEl}</Box>
      </Popper>
    </>
  );
};
interface Props {
  isActive: boolean;
  path: string;
}

const BranchEl: React.FC<Props> = ({ isActive, path, children }) => {
  return (
    <Box className={styles.branchEl_main}>
      {isActive && <CheckMark />}
      <Link to={path} className={styles.popper_link}>
        {children}
      </Link>
    </Box>
  );
};
