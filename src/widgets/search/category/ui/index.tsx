import React from 'react';
import { Box } from '@mui/material';
import { searchCategoryConfig } from '../config';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { useSearchParams } from '@shared/model';
import { checkRequirements } from '../lib';

export const CategoryList = () => {
  const categoryListEl = searchCategoryConfig.map(({ type, name, requirements }) => {
    const {
      pathWithParams,
      formattedParams: { q = '' },
    } = useSearchParams({ type });

    if (requirements) {
      const qParams = decodeURIComponent(q)
        .replace(/:[\w\\\/]+/g, '')
        .split(' ');

      const isNotValid = !checkRequirements({ requirements, queryParams: qParams });

      if (isNotValid) {
        return null;
      }
    }

    return (
      <Link className={styles.link} key={pathWithParams} to={pathWithParams}>
        {name}
      </Link>
    );
  });

  return <Box className={styles.main}>{categoryListEl}</Box>;
};
