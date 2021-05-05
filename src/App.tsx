import React, { useEffect } from 'react';
import styles from './App.module.scss';

export const App: React.FC = () => {
  const kek = ' kss';
  const lol = 'd';
  useEffect(() => {
    console.log(kek);
  }, [lol]);

  return <div className={styles.wrapper}></div>;
};
