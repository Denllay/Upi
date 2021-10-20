import { Box, Typography } from '@mui/material';
import { Skeleton } from '@shared/ui';
import React from 'react';
import styles from './styles.module.scss';
interface Props {
  value: number;
  isLoading: boolean;
  onClick: () => void;
}

export const ActivityRepositoryButton: React.FC<Props> = ({ children, value, onClick, isLoading }) => {
  return (
    <Skeleton isActive={isLoading} height={50} width={120}>
      <button className={styles.main} onClick={onClick}>
        <Typography variant="subtitle1" className={styles.text}>
          {children}
        </Typography>

        <Box className={styles.content}>
          <Typography variant="subtitle1" color="var(--color-dark)" className={styles.text}>
            {value}
          </Typography>
        </Box>
      </button>
    </Skeleton>
  );
};
