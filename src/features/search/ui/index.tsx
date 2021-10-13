import React from 'react';
import { Field } from '@shared/ui';
import styles from './styles.module.scss';

export const Search = () => {
  return <Field className={styles.search} placeholder="Search" />;
};
