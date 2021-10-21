import React from 'react';
import { Field } from '@shared/ui';
import styles from './styles.module.scss';

export const SearchHeader = () => {
  return <Field className={styles.search} placeholder="Search" />;
};
