import React from 'react';
import { Button as UIButton } from '@shared/ui';
import { useDispatch } from 'react-redux';
import { LoginUser } from '../model';

export const Button = () => {
  const dispatch = useDispatch();

  const onLogin = () => {
    dispatch(LoginUser());
  };

  return (
    <UIButton onClick={onLogin} size="large">
      Login by Github
    </UIButton>
  );
};
