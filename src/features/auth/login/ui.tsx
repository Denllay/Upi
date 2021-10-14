import React, { useEffect } from 'react';
import { Button as UIButton } from '@shared/ui';
import { useDispatch } from 'react-redux';
import { LoginUser } from './model';
import { useHistory } from 'react-router';
import { githubApi } from '@shared/api';

export const Button = () => {
  const { data } = githubApi.endpoints.getUserData.useQueryState();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    return () => {
      if (data) {
        history.push(`user/${data?.login}`);
      }
    };
  }, [data]);

  const onLogin = () => {
    dispatch(LoginUser());
  };

  return (
    <UIButton onClick={onLogin} size="large" variant="contained">
      Login by Github
    </UIButton>
  );
};
