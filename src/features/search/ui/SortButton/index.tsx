import React, { Dispatch, SetStateAction, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Select } from '@shared/ui';
import styles from './styles.module.scss';
import CheckMark from '@shared/assets/icons/check-mark.svg';
import Arrow from '@shared/assets/icons/arrow.svg';
import { SortOption, useSortSearch } from '@features/search/model';

export const SortButton = () => {
  const [sortCategory, setSortCategory] = useState<string>('Best match');
  const { activeOptionScope } = useSortSearch();

  const categoryListEl = activeOptionScope.map(({ name, ...props }) => {
    const isActive = sortCategory === name;

    return <Category setCategory={setSortCategory} key={name} name={name} isActive={isActive} {...props} />;
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
        {sortCategory}
      </Typography>
    </Select>
  );
};

interface Props {
  isActive: boolean;
  setCategory: Dispatch<SetStateAction<string>>;
}

const Category: React.FC<Props & SortOption> = ({ name, o, s, isActive, setCategory }) => {
  const { setSortParams } = useSortSearch();

  const onHandleSort = () => {
    setCategory(name);
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
