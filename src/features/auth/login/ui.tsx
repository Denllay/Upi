import React from 'react';
import { Button as UIButton } from '@shared/ui';
import { useDispatch } from 'react-redux';
import { LoginUser } from './model';
import { useHistory } from 'react-router';

export const Button = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogin = () => {
    dispatch(LoginUser(history));
  };

  return (
    <UIButton onClick={onLogin} size="large" variant="contained">
      Login by Github
    </UIButton>
  );
};
