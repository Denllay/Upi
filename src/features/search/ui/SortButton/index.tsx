import React, { Dispatch, SetStateAction, useState } from 'react';
import { SortCategory, SortCategoryList } from '@features/search/types';
import { Box, Typography } from '@mui/material';
import { Select } from '@shared/ui';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { useSearchParams } from '@shared/model';
import { pathCategorySearchConfig } from '@features/search/config';
import CheckMark from '@shared/assets/icons/check-mark.svg';
import Arrow from '@shared/assets/icons/arrow.svg';

export const SortButton = () => {
  const [sortCategory, setSortCategory] = useState<SortCategoryList>('Best match');

  const categoryListEl = pathCategorySearchConfig.map(({ name, ...props }) => {
    const isActive = sortCategory === name;
    return <Category setCategory={setSortCategory} key={name} name={name} isActive={isActive} {...props} />;
  });

  return (
    <Select
      buttonClassName={styles.button}
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
  setCategory: Dispatch<SetStateAction<SortCategoryList>>;
}

const Category: React.FC<SortCategory & Props> = ({ name, oParam, sParam, isActive, setCategory }) => {
  const { pathWithParams } = useSearchParams({ o: oParam, s: sParam });

  const onHandleCategory = () => {
    setCategory(name);
  };

  return (
    <Box className={styles.category_item}>
      {isActive && <CheckMark />}
      <Link onClick={onHandleCategory} to={pathWithParams} className={styles.popper_link}>
        {name}
      </Link>
    </Box>
  );
};
