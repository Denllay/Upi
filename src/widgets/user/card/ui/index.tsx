import React, { SyntheticEvent, useState } from 'react';
import styles from './styles.module.scss';
import { AboutProfile, OverviewProfile, RepositoriesProfile } from '@entities/user/profile/ui';
import { Box } from '@mui/material';
import { Tab, Tabs, TabPanel } from '@shared/ui';

export const UserCard = () => {
  const [tab, setTab] = useState(1);

  const changeTab = (_: SyntheticEvent, value: number) => {
    setTab(value);
  };

  return (
    <Box className={styles.main}>
      <AboutProfile />

      <Box className={styles.tabs}>
        <Tabs value={tab} onChange={changeTab}>
          <Tab label="Overview" value={1} />
          <Tab label="Repositories" value={2} />
        </Tabs>
      </Box>

      <TabPanel value={tab} index={1}>
        <OverviewProfile />
      </TabPanel>

      <TabPanel value={tab} index={2}>
        <RepositoriesProfile />
      </TabPanel>
    </Box>
  );
};
