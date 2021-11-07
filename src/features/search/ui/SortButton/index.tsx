import React from 'react';
import { Box, Typography } from '@mui/material';
import { Select } from '@shared/ui';
import styles from './styles.module.scss';
import CheckMark from '@shared/assets/icons/check-mark.svg';
import Arrow from '@shared/assets/icons/arrow.svg';
import { searchModel } from '@features/search';

export const SortButton = () => {
  const { activeOptionScope, activeOption } = searchModel.useSortSearch();

  const categoryListEl = activeOptionScope.map(({ name, ...props }) => {
    const isActive = activeOption?.name === name;

    return <Category key={name} name={name} isActive={isActive} {...props} />;
  });

  return (
    <Select
      buttonClassName={styles.popper_content}
      contentClassName={styles.popper_content}
      endIcon={<Arrow className={styles.arrow} />}
      list={categoryListEl}
    >
      <Typography variant="subtitle1" className={styles.sort}>
        Sort:
      </Typography>
      <Typography className={styles.category} variant="button">
        {activeOption?.name}
      </Typography>
    </Select>
  );
};

interface Props {
  isActive: boolean;
}

const Category: React.FC<Props & searchModel.SortOption> = ({ name, o, s, isActive }) => {
  const { setSortParams } = searchModel.useSortSearch();

  const onHandleSort = () => {
    setSortParams({ o, s });
  };

  return (
    <Box className={styles.category_item}>
      {isActive && <CheckMark />}
      <Typography onClick={onHandleSort} className={styles.popper_link}>
        {name}
      </Typography>
    </Box>
  );
};
