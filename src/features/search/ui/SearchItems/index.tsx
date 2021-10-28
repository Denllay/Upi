import React, { useState } from 'react';
import { Button, Field } from '@shared/ui';
import { Alert, FormControl, Snackbar } from '@mui/material';
import { getPathUrl } from '@features/search/lib';
import { useHistory } from 'react-router';
import styles from './styles.module.scss';
import Arrow from '@shared/assets/icons/arrow.svg';

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
      <FormControl className={styles.main}>
        <Field
          onChange={onChangeUrl}
          value={url}
          className={styles.input}
          placeholder="Paste URL of repository or profile"
        />

        <Button onClick={onSubmit} className={styles.button} variant="contained">
          <Arrow />
        </Button>
      </FormControl>

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
