import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { ReactComponent as GithubIcon } from '@shared/assets/icons/github.svg';
import { Button as UIButton } from '@shared/ui';

import { LoginUser } from '../model';

import styles from './styles.module.scss';

export const Button = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const onLogin = () => {
        dispatch(LoginUser(history));
    };

    return (
        <UIButton
            className={styles.button}
            onClick={onLogin}
            size='large'
            variant='contained'
            endIcon={<GithubIcon />}
        >
            Login by Github
        </UIButton>
    );
};
