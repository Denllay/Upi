import React, { SyntheticEvent, useState } from 'react';
import { ProfileAbout, ProfileOverview, ProfileRepositories } from '@entities/user/profile';
import { Box } from '@mui/material';
import { Tab, Tabs, TabPanel } from '@shared/ui';
import styles from './styles.module.scss';

export const Card = () => {
  const [tab, setTab] = useState(1);

  const changeTab = (_: SyntheticEvent, value: number) => {
    setTab(value);
  };

  return (
    <Box className={styles.main}>
      <ProfileAbout />

      <Box className={styles.tabs}>
        <Tabs value={tab} onChange={changeTab}>
          <Tab label="Overview" value={1} />
          <Tab label="Repositories" value={2} />
        </Tabs>
      </Box>

      <TabPanel value={tab} index={1}>
        <ProfileOverview />
      </TabPanel>

      <TabPanel value={tab} index={2}>
        <ProfileRepositories />
      </TabPanel>
    </Box>
  );
};
