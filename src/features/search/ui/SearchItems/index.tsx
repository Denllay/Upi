import React, { useState } from 'react';
import { Button, Field } from '@shared/ui';
import styles from './styles.module.scss';
import { Alert, Box, Snackbar } from '@mui/material';
import Arrow from '@features/search/assets/icons/arrow.svg';
import { getPathUrl } from '@features/search/lib';
import { useHistory } from 'react-router';

export const SearchItems = () => {
  const [url, setUrl] = useState('');
  const [isError, setError] = useState(false);
  const history = useHistory();

  const onChangeUrl = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(target.value);
  };

  const onSubmit = () => {
    const [, , , path] = getPathUrl(url) || [];

    if (path) {
      history.push(path);
    } else {
      setError(true);
    }
  };

  const handleCloseError = () => {
    setError(false);
  };

  return (
    <>
      <Box className={styles.main}>
        <Field
          onChange={onChangeUrl}
          value={url}
          className={styles.input}
          placeholder="Paste URL of repository or profile"
        />

        <Button onClick={onSubmit} className={styles.button} variant="contained">
          <Arrow />
        </Button>
      </Box>
      <Snackbar
        open={isError}
        autoHideDuration={6000}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        onClose={handleCloseError}
      >
        <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
          Incorrect url
        </Alert>
      </Snackbar>
    </>
  );
};
